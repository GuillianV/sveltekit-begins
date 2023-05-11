import PhotoComponent from '../photo.component.svelte';

export const load = async (loadEvent) =>{
    const { data } = loadEvent;
    return {
        title: data.alt_description,
        icon : data.urls.thumb,
        randomPhoto : {
                photoData: data,
                Component: PhotoComponent
        }
    }
}