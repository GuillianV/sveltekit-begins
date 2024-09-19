


const base_uri = new URL('https://tile.googleapis.com/v1/');
const api_key = 'AIzaSyBb6vLFUfBtzMizXZZ2w4ccoUD3ZfDkCyI';
const TILE_SIZE = 256;
const MAP_SIZE = 3;

var pixelOrigin_ = { x: TILE_SIZE / 2, y: TILE_SIZE / 2 };
var pixelsPerLonDegree_ = TILE_SIZE / 360;
var pixelsPerLonRadian_ = TILE_SIZE / (2 * Math.PI);

const zoom_lat_lng_radius = {
    17: {
        lat: 0.00095903788,
        lng: 0.00137329101
    }
};

//lat = -y
//lng = x

function _bound(value, opt_min, opt_max) {
    if (opt_min != null) value = Math.max(value, opt_min);
    if (opt_max != null) value = Math.min(value, opt_max);
    return value;
}

function _degreesToRadians(deg) {
    return deg * (Math.PI / 180);
}

function _radiansToDegrees(rad) {
    return rad / (Math.PI / 180);
}

function fromLatLngToPoint(latLng, opt_point) {
    var point = { x: null, y: null };
    var origin = pixelOrigin_;

    point.x = origin.x + latLng.lng * pixelsPerLonDegree_;

    // Truncating to 0.9999 effectively limits latitude to 89.189. This is
    // about a third of a tile past the edge of the world tile.
    var siny = _bound(Math.sin(_degreesToRadians(latLng.lat)), -0.9999, 0.9999);
    point.y = origin.y + 0.5 * Math.log((1 + siny) / (1 - siny)) * -pixelsPerLonRadian_;

    return point;
}

function fromPointToLatLng(point) {
    var origin = pixelOrigin_;
    var lng = (point.x - origin.x) / pixelsPerLonDegree_;
    var latRadians = (point.y - origin.y) / -pixelsPerLonRadian_;
    var lat = _radiansToDegrees(2 * Math.atan(Math.exp(latRadians)) - Math.PI / 2);

    return { lat: lat, lng: lng };
}

function fromLatLngToTileCoord(latLng, zoom) {
    var point = fromLatLngToPoint(latLng);
    var scale = Math.pow(2, zoom);

    return {
        x: Math.floor((point.x * scale) / TILE_SIZE),
        y: Math.floor((point.y * scale) / TILE_SIZE),
        z: zoom
    };
}

function fromTileCoordToLatLng(tileCoord) {
    var scale = Math.pow(2, tileCoord.z);
    var point = {
        x: (tileCoord.x * TILE_SIZE) / scale,
        y: (tileCoord.y * TILE_SIZE) / scale
    };

    return fromPointToLatLng(point);
}

const GetSession = async () => {
    const body = {
        mapType: 'satellite',
        language: 'fr-FR',
        region: 'FR',
        highDpi: true
    };

    return await fetch(`${base_uri.origin}${base_uri.pathname}createSession?key=${api_key}`, {
        method: 'POST',
        body: JSON.stringify(body)
    })
        .then((response) => response.json())
        .catch((error) => {
            return { error };
        });
};

const GetTile = async (session, coord = { x: 0, y: 0, z: 0 }) => {
    const { x, y, z } = coord;

    return await fetch(
        `${base_uri.origin}${base_uri.pathname}2dtiles/${z}/${x}/${y}?session=${session.session}&key=${api_key}`,
        {
            method: 'GET'
        }
    )
        .then((response) => {
            return response.blob();
        })
        .catch((error) => {
            console.log(error);
            return null;
        });
};

const GetElevation = async (bbox) => {

    let locations = ""
    Object.keys(bbox).forEach((key, index) => {
        locations += bbox[key].lat + "," + bbox[key].lng
        if (index < Object.keys(bbox).length - 1) {
            locations += "|"
        }
    })

    return await fetch(
        `https://maps.googleapis.com/maps/api/elevation/json?locations=${encodeURIComponent(locations)}&key=${api_key}`,
        {
            method: 'GET'
        }
    ).then(response => response.json()).catch(error => {
        console.log(error)
        return null
    })


}

function bb(latlng, zoom) {
    const bb = {
        topLeft: {
            lat: latlng.lat,
            lng: latlng.lng
        },
        topRight: {
            lat: latlng.lat,
            lng: latlng.lng + zoom_lat_lng_radius[zoom].lng * 2
        },
        bottomLeft: {
            lat: latlng.lat - zoom_lat_lng_radius[zoom].lat * 2,
            lng: latlng.lng
        },
        bottomRight: {
            lat: latlng.lat - zoom_lat_lng_radius[zoom].lat * 2,
            lng: latlng.lng + zoom_lat_lng_radius[zoom].lng * 2
        }
    };

    return bb;
}


async function run() {


    const session = await GetSession();
    if (session.error) {
        console.log(session.error);
        return;
    }

    //Initial lat long picked
    let latLng = { lat: 45.707249, lng: 6.469505 };
    const zoom = 17;
    let tileCoord = fromLatLngToTileCoord(latLng, zoom);

    //Final lat long of tile (top left)
    latLng = fromTileCoordToLatLng(tileCoord);

    const tiles_array = [];

    for (let y = 0; y < MAP_SIZE; y++) {
        for (let x = 0; x < MAP_SIZE; x++) {
            const actualX = x - 1;
            const actualY = y - 1;
            const new_coord = {
                x: tileCoord.x + actualX,
                y: tileCoord.y + actualY,
                z: tileCoord.z
            };
            const tile = await GetTile(session, new_coord);
            if (!tile) return;
            const url = URL.createObjectURL(tile);
            const actual_tile_topLeft_coord = fromTileCoordToLatLng(new_coord);
            const actual_bbox = bb(actual_tile_topLeft_coord, tileCoord.z);
            const elevation = await GetElevation(actual_bbox);
            if (!elevation) return;


            Object.entries(actual_bbox).forEach(([key, value]) => {

                elevation.results.forEach((result) => {
                    console.log(result)
                    console.log(value)
                    if (value.lat == result.location.lat && value.lng == result.location.lng) {
                        value.elevation = result.elevation
                    }

                })

            })
            tiles_array.push({ new_coord, actual_bbox, elevation, tile_url: url });
        }
    }

    return tiles_array;

}

export async function load({ fetch }) {

    // const tiles_array = await run();

    // return {
    //     tiles_array
    // };
}