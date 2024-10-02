import React from 'react';

export function VideoCard(){
    return <>
    <div className='m-1' >

        <img src="thumbImage.png" className='rounded-xl' />
        <div className='flex pt-1 px-2 '>
            <img src="image.png" className='rounded-full' sizes='100'/>
            <div className='px-5'>
                <div className='text-xl '>Video Title</div>
                <div className='text-sm'>Channel Name</div>
                <div className='flex justify-start text-sm'>
                    <div> Views </div>
                    <div> · 10 hours ago </div>
                </div>
            </div>
        </div>
    </div>

    </>
}