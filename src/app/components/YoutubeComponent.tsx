"use client";

import React, { useState } from 'react'
import YouTube from 'react-youtube'

type ContentProps = {
	videoId: string
	title: string
	caption: string
}

const YoutubeContent = ({ videoId, title, caption }: ContentProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	return (
		<div className='m-6'>
			<YouTube
				videoId={videoId}
				iframeClassName='aspect-video w-full h-full'
			/>
			<div className="text-center mt-4">
				<button
					type="button"
					aria-controls="contents"
					aria-expanded={isOpen}
					onClick={() => setIsOpen(!isOpen)}
					className="bg-gray-300 px-4 py-2 rounded-md focus:outline-none"
				>
					{!isOpen ? `▶︎ ${title}` : `▼ ${title}`}
				</button>
				<div
					id="contents"
					className={`overflow-hidden transition-height duration-300 ease-out ${isOpen ? "h-auto" : "h-0"}`}
					aria-hidden={!isOpen}
				>
					<div className='text-center mt-2'>
						{replaceLineBreaks(caption)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default YoutubeContent

function replaceLineBreaks(text: string) {
	return text.split('\n').map((line, index) => (
		<span key={index}>
			{line}
			<br />
		</span>
	))
}
