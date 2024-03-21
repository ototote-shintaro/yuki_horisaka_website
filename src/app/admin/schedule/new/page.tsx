"use client";

import { supabase } from '@/app/utils/supabaseClient';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useState } from 'react'

const CreateSchedule = () => {
	const router = useRouter();
	const [date, setDate] = useState<string>("");
	const [title, setTitle] = useState<string>("");
	const [memo, setMemo] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(false);
	const [imageUrl, setImageUrl] = useState<string>("");

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		setLoading(true);

		const API_URL = process.env.NEXT_PUBLIC_API_URL;
		await fetch(`${API_URL}/api/schedule`, {
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ date, title, memo, imageUrl })
		});

		setLoading(false);

		router.push('/');
		router.refresh();
	};

	const handleImageChange = async (
		e: ChangeEvent<HTMLInputElement>
	): Promise<void> => {
		if (!e.target.files || e.target.files.length == 0) return;

		const file = e.target.files[0]
		const filePath = `${file.name}`
		const { error } = await supabase.storage
			.from('schedule_image')
			.upload(filePath, file)

		if (error) {
			// TODO::error handling
			console.log(error);
			return;
		}

		const { data } = supabase.storage.from('schedule_image').getPublicUrl(filePath)
		setImageUrl(data.publicUrl);
	}

	return (
		<div className='min-h-screen px-4 md:px-[15%]'>
			<h2 className='text-2xl font-bold mb-4 '>新規作成</h2>
			<form
				className='bg-slate-200 p-6 rounded shadow-lg'
				onSubmit={handleSubmit}
			>
				<div className='py-2'>
					<label htmlFor='date' className='text-gray-700 text-sm font-bold'>日付</label>
					<input
						id='date'
						type='date'
						className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none'
						onChange={(e: ChangeEvent<HTMLInputElement>) => setDate(e.target.value)}
						placeholder={"ライブタイトル"}
					/>
				</div>
				<div className='py-2'>
					<label htmlFor='title' className='text-gray-700 text-sm font-bold'>タイトル</label>
					<input
						id='title'
						className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none'
						onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
						placeholder={"ライブタイトル"}
					/>
				</div>
				<div className='py-2'>
					<label htmlFor='memo' className='text-gray-700 text-sm font-bold'>メモ</label>
					<textarea
						id='memo'
						className='shadow border rounded w-full h-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none'
						onChange={(e) => setMemo(e.target.value)}
						placeholder={`会場：ひかりのうま\n開場18時/開演19時\nチャージ2,500円 + 1drink order`}
					/>
				</div>
				<div className='py-2'>
					<label htmlFor='file-upload'>
						<span className='text-blue-500 cursor-pointer'>画像アップロード</span>
						<input
							id='file-upload'
							name='file-upload'
							type='file'
							className='sr-only'
							accept='image/png, image/jpeg'
							onChange={handleImageChange}
						/>
					</label>
				</div>
				<p>{imageUrl?.split("/").pop()}</p>
				{imageUrl &&
					<Image
						className='py-2'
						src={imageUrl}
						alt=''
						width='500'
						height='400'
					/>
				}
				<button
					type='submit'
					className={`px-4 py-2 border rounded-md ${loading || !(date && memo && imageUrl && title)
						? "bg-orange-200 cursor-not-allowed text-slate-400"
						: "bg-orange-400 hover:bg-orange-500"
						}`}
					disabled={loading || !(date && memo && imageUrl && title)}
				>
					投稿
				</button>
			</form>
		</div>
	)
}

export default CreateSchedule;
