import { Schedule } from '@/app/utils/types';
import { headers } from 'next/headers'
import React from 'react'

export default async function ScheduleList() {
	const url = `${process.env.NEXT_PUBLIC_API_URL}/api/schedule/all`;
	const res = await fetch(url, {
		cache: 'no-cache',
		headers: Object.fromEntries(headers())
	});
	if (!res.ok) throw new Error('Failed to fetch data')
	const schedules: Schedule[] = await res.json()

	return (
		<div className='mx-12'>
			<table className='border border-black'>
				<thead>
					<tr>
						<th className='border border-black'>ID</th>
						<th className='border border-black'>Date</th>
						<th className='border border-black'>Title</th>
						<th className='border border-black'>Memo</th>
						<th className='border border-black'>Image URL</th>
						<th className='border border-black'>Created At</th>
						<th className='border border-black'>Updated At</th>
					</tr>
				</thead>
				<tbody>
					{schedules.map((schedule) => (
						<tr key={schedule.id}>
							<td className='border border-black p-2'>{schedule.id}</td>
							<td className='border border-black p-2'>{schedule.date.toString()}</td>
							<td className='border border-black p-2'>{schedule.title}</td>
							<td className='border border-black p-2'>{schedule.memo}</td>
							<td className='border border-black p-2'>{schedule.image_url}</td>
							<td className='border border-black p-2'>{schedule.created_at.toString()}</td>
							<td className='border border-black p-2'>{schedule.updated_at.toString()}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}