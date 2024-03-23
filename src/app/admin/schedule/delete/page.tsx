"use client";

import { supabase } from '@/app/utils/supabaseClient';
import { Schedule } from '@/app/utils/types';
import { headers } from 'next/headers';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useState } from 'react'

const page = () => {
	const router = useRouter();
	const [id, setId] = useState<string>("");
	const [data, setData] = useState<Schedule>();
	const [loading, setLoading] = useState<boolean>(false);

	const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/schedule/${id}`;

	const fetchSchedule = async () => {
		setLoading(true)

		const res = await fetch(API_URL, {
			cache: 'no-store',
		})
		if (!res.ok) {
			throw new Error('Failed to fetch data');
		}
		const data: Schedule = await res.json()
		data.id ? setData(data) : alert("IDが存在しません");

		setLoading(false)
	}

	const deleteSchedule = async () => {
		setLoading(true)

		const res = await fetch(API_URL, {
			method: 'DELETE',
			headers: {
				"Content-Type": "application/json",
			}
		})

		if (!res.ok) {
			throw new Error('Failed to delete');
		}
		setLoading(false)

		router.push('/schedule');
		router.refresh();
	}

	return (
		<div className='min-h-screen px-4 md:px-[15%]'>
			<h2 className='text-2xl font-bold mb-4 '>スケジュール更新</h2>
			{/* fetchフォーム */}
			<div className='flex flex-col mb-6'>
				<input
					id='id'
					type='text'
					className='shadow border rounded w-1/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none'
					onChange={(e: ChangeEvent<HTMLInputElement>) => setId(e.target.value)}
					placeholder={'IDを調べて入力してください'}
				/>
				<button
					className={`px-4 py-2 border rounded-md w-1/4 ${loading || id === ""
						? "bg-orange-200 cursor-not-allowed text-slate-400"
						: "bg-orange-400 hover:bg-orange-500"
						}`}
					disabled={loading || id === ""}
					onClick={fetchSchedule}
				>
					削除するスケジュールを取得
				</button>
			</div>
			<table className='border border-black w-full'>
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
				{data &&
					<tbody>
						<tr key={data.id}>
							<td className='border border-black p-2'>{data.id}</td>
							<td className='border border-black p-2'>{data.date.toString()}</td>
							<td className='border border-black p-2'>{data.title}</td>
							<td className='border border-black p-2'>{data.memo}</td>
							<td className='border border-black p-2'>{data.image_url}</td>
							<td className='border border-black p-2'>{data.created_at.toString()}</td>
							<td className='border border-black p-2'>{data.updated_at.toString()}</td>
						</tr>
					</tbody>
				}
			</table>
			<button
				className={`px-4 my-4 px-2 border rounded-md w-1/4 ${!data
					? "bg-slate-200 cursor-not-allowed text-slate-400"
					: "bg-red-400 hover:bg-orange-500"
					}`}
				disabled={!data}
				onClick={deleteSchedule}
			>
				削除
			</button>
		</div>
	)
}

export default page