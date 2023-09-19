
import { error, redirect } from '@sveltejs/kit';
export const load = async (serverloadEvent) => {
	
    throw redirect(301,"/threejs")
};
