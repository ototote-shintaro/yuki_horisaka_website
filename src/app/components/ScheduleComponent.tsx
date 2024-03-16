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
		<div className='pb-12 flex flex-col md:flex-row items-center md:items-start justify-start gap-3 md:gap-24'>
			<div className='flex flex-col'>
				<span className='text-center md:text-start'>{dateTime}</span>
				<span className='text-lg font-bold text-gray-700 underline text-center md:text-start'>{title}</span>
				<span className='hidden md:block'>{performers}</span>
				<span className='hidden md:block'>{place}</span>
				<span className='hidden md:block'>{price}</span>
				<span className='hidden md:block'>{memo}</span>
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