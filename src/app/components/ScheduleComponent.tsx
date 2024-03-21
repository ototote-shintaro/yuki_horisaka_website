import Image from 'next/image'
import React from 'react'

type ScheduleComponentProps = {
	date: Date,
	title: string,
	memo: string,
	imageUrl: string,
}

const dateOptions: Intl.DateTimeFormatOptions = {
	year: 'numeric',
	month: 'long',
	day: 'numeric'
};

export const scheduleOption = { dateOptions };

const ScheduleComponent = ({ date, title, memo, imageUrl }: ScheduleComponentProps) => {
	return (
		<div className='pb-12 flex flex-col md:flex-row items-center md:items-start justify-start gap-3 md:gap-14'>
			<div className='flex flex-col w-3/5'>
				<span className='text-center md:text-start'>{new Date(date).toLocaleDateString('ja-JP', scheduleOption.dateOptions)}</span>
				<span className='text-lg font-bold text-gray-700 underline text-center md:text-start'>{title}</span>
				<span className='hidden md:block'>{parseTextWithLinks(memo)}</span>
			</div>
			<Image
				src={imageUrl}
				alt={title}
				width={756}
				height={210}
				className='max-w-xs'
			/>
		</div>
	)
}

export default ScheduleComponent

function replaceLineBreaks(text: string) {
	return text.split('\n').map((line, index) => (
		<span key={index}>
			{line}
			<br />
		</span>
	));
}

function parseTextWithLinks(text: string) {
	const urlRegex = /(https?:\/\/[^\s]+)/g;
	return text.split(urlRegex).map((part, index) => {
		if (part.match(urlRegex)) {
			return (
				<a key={index} href={part} target="_blank" rel="noopener noreferrer" className='text-blue-500'>
					{part}
				</a>
			);
		}
		return replaceLineBreaks(part);
	});
}
