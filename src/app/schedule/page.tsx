import Image from 'next/image'
import React from 'react'
import ScheduleComponent from '../components/ScheduleComponent'
import { headers } from 'next/headers';

export type Schedule = {
	id: number;
	date: Date;
	title: string;
	memo: string;
	image_url: string;
	created_at: Date;
	updated_at: Date;
}

export default async function Schedule() {
	const url = `${process.env.NEXT_PUBLIC_API_URL}/api/schedule`
	const res = await fetch(url, {
		cache: 'no-store',
		headers: Object.fromEntries(headers())
	});
	if (!res.ok) throw new Error('Failed to fetch data')
	const schedules: Schedule[] = await res.json()

	return (
		<div className='md:px-[28%] pt-12'>
			{schedules.map((schedule) => (
				<ScheduleComponent
					key={schedule.id}
					date={schedule.date}
					imageUrl={schedule.image_url}
					title={schedule.title}
					memo={schedule.memo}
				/>
			))}
		</div>
	)
}
