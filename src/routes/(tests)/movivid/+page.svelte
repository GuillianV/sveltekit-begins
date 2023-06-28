<script>

    import * as movivid from '$lib/movivid'
    import {browser} from '$app/environment'
	import { onMount } from 'svelte';

    onMount(_ => {



        if(browser){
            let frames = [];
            let video = document.createElement('video');
            video.src = "https://scrollyvideo.js.org/goldengate.mp4";
            const drawingLoop = async(timestamp, frame) => {
                
                const bitmap = await createImageBitmap(video);
                const index = frames.length;
                frames.push(bitmap);
                select.append(new Option("Frame #" + (index + 1), index));

                if (!video.ended && !stopped) {
                    video.requestVideoFrameCallback(drawingLoop);
                } else {
                    select.disabled = false;
                }
            };
            // the last call to rVFC may happen before .ended is set but never resolve
            video.onended = (evt) => select.disabled = false;
            video.requestVideoFrameCallback(drawingLoop);
            
        }



    })


</script>

<div>

</div>