// import traductions from '$lib/lang/traductions.json'
import {json} from '@sveltejs/kit'
export function GET(req){
    
    let { langCode } = req.params
    return new Response(JSON.stringify({}),{
        headers:{
            'Content-Type': 'application/json'
        }
    })
}


export async function POST(req){
    let { langCode } = req.params
    let {request} = req
    let {name} =  await request.json()
  
    return new Response(JSON.stringify({}),{
        headers:{
            'Content-Type': 'application/json'
        }
    })
}