import PhotoComponent from '../photo.component.svelte';

export const load = async (loadEvent) =>{
    const { data } = loadEvent;
    return {
        randomPhoto : {
                photoData: data,
                Component: PhotoComponent
        }
    }
}