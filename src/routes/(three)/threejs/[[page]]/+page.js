import { error } from "@sveltejs/kit";

export const load = async (loadEvent) =>{

    const { data } = loadEvent;
    return data
    
}
export const prerender = true;
export let ssr = true;
export let csr = false;