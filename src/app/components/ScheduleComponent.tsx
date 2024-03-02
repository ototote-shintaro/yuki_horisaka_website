import Image from 'next/image'
import React from 'react'

type ScheduleComponentProps = {
	imageUrl: string,
	imageAlt: string,
	dateTime: string,
	title: string,
	performers: string,
	place: string,
	price: string,
	memo: string
}

const ScheduleComponent = ({ imageUrl, imageAlt, dateTime, title, performers, place, price, memo }: ScheduleComponentProps) => {
	return (
		<div className='pb-12 flex justify-start gap-24'>
			<div className='flex flex-col'>
				<span>{dateTime}</span>
				<span className='text-lg font-bold text-gray-700 underline'>{title}</span>
				<span>{performers}</span>
				<span>{place}</span>
				<span>{price}</span>
				<span>{memo}</span>
			</div>
			<Image
				src={imageUrl}
				alt={imageAlt}
				width={756}
				height={210}
				className='max-w-xs'
			/>
		</div>
	)
}

export default ScheduleComponent