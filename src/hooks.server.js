// import traductions from '$lib/lang/traductions.json'
import { error } from '@sveltejs/kit';



export async function handle({event,resolve}) {

    // let { route , params, url } = event;
    // let { id = "/" } = route;

    // if(id != null && id.includes("/(portfolio)/[[langCode=lang]]"))
    // {
    //     let { langCode = 'fr'} = event.params
    //     let baseTrads=traductions[langCode]
    //     let { defaults = {} } = baseTrads;
    //     event.locals.traductions = defaults;
        

    // }
    return await resolve(event);
}