"use client";

import React, { useState } from 'react'

type ContactFormProps = {
	name: string
	email: string
	message: string
}

const page = () => {
	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [message, setMessage] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);

		const API_URL = process.env.NEXT_PUBLIC_API_URL;
		const response = await fetch(`${API_URL}/api/contact`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ name, email, message }),
		});
		if (response.status === 200) {
			console.log('bbbb')
			setLoading(false);
		} else {
			console.error(response);
			alert("エラーが発生しました。各種SNSよりお問合せください");
			setLoading(false);
		}
	};

	return (
		<div className='mt-12 flex flex-col justify-start items-center h-screen'>
			<form
				className='flex flex-col gap-4 w-full max-w-2xl mx-auto'
				onSubmit={handleSubmit}
			>
				<input
					type="text"
					placeholder="Name / お名前"
					required
					className="p-2 block w-full"
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					type="text"
					placeholder="Email / メールアドレス"
					required
					className="p-2 block w-full"
					onChange={(e) => setEmail(e.target.value)}
				/>
				<textarea
					placeholder="Message / メッセージ"
					rows={10}
					required
					className="p-2 block w-full"
					onChange={(e) => setMessage(e.target.value)}
				/>
				<button
					type="submit"
					className={`mt-4 px-4 py-2 text-white rounded hover:bg-blue-700
						${loading
							? "bg-blue-300 cursor-not-allowed"
							: "bg-blue-400 hover:bg-blue-500"
						}`
					}
				>
					送信
				</button>
			</form>
		</div>
	)
}

export default page