"use client";

import React from 'react'
import YouTube from 'react-youtube'

type ContentProps = {
	videoId: string,
	label: string
}

const YoutubeContent = ({ videoId, label }: ContentProps) => {
	return (
		<div className='m-6'>
			<YouTube
				videoId={videoId}
				iframeClassName='aspect-video w-full h-full'
			/>
			<label className='cursor-pointer flex justify-center items-center text-center pt-2'>{label}</label>
		</div>
	)
}

export default YoutubeContent