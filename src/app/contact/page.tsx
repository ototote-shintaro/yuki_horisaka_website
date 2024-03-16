"use client";

import React, { useEffect, useState } from 'react'

const page = () => {
	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [message, setMessage] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(false);
	const [toast, setToast] = useState({ show: false, message: "" });

	const showToast = (message: string) => {
		setToast({ show: true, message });
		setTimeout(() => setToast({ show: false, message: "" }), 5000);
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);

		if (!validateEmail(email)) {
			alert("メールアドレスを正しく入力してください");
			setLoading(false);
			return;
		}

		const API_URL = process.env.NEXT_PUBLIC_API_URL;
		const response = await fetch(`${API_URL}/api/contact`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ name, email, message }),
		});
		if (response.status === 200) {
			setLoading(false);
			setName("");
			setEmail("");
			setMessage("");
			showToast("お問い合わせを受け付けました / Your inquiry has been submitted!");
		} else {
			alert("エラーが発生しました。お手数ですが各種SNSよりお問合せください");
			setLoading(false);
			console.log(await response.json());
		}
	};

	return (
		<div className='mx-6 mt-12 flex flex-col justify-start items-center h-screen'>
			<form
				className='flex flex-col gap-4 w-full max-w-2xl mx-auto'
				onSubmit={handleSubmit}
			>
				<input
					type="text"
					placeholder="Name / お名前"
					required
					className="p-2 block w-full"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					type="text"
					placeholder="Email / メールアドレス"
					required
					className="p-2 block w-full"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<textarea
					placeholder="Message / メッセージ"
					rows={10}
					required
					className="p-2 block w-full"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<button
					type="submit"
					disabled={loading}
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
			{toast.show && (
				<div
					style={{
						position: 'absolute', bottom: '50px', left: '50%', transform: 'translateX(-50%)', fontSize: '18px',
						backgroundColor: '#9295B3', color: 'white', padding: '15px', borderRadius: '5px',
					}}
					className='w-4/5 md:w-fit'
				>
					{toast.message}
				</div>
			)}
		</div>
	)
}

export default page;

function validateEmail(email: string) {
	var regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
	return regex.test(email);
};