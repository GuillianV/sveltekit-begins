import { UNSPLASH_API_KEY } from '$env/static/private'
import { error,redirect } from '@sveltejs/kit';
export const load = async (serverloadEvent) =>{
    const { fetch } = serverloadEvent;
    const response = await fetch('https://api.unsplash.com/photos/random',{
        headers: {
            "Accept-Version": "v1",
            "Authorization": `Client-ID ${UNSPLASH_API_KEY}` 
        }
    });
    if(!response.ok)
        throw error(response.status,{message:`Error: ${response.status} ${response.statusText}`});

    let photo = await response.json();
    return photo
}