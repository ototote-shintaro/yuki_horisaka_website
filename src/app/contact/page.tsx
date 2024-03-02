import React from 'react'

type ContactFormProps = {
  name: string
  email: string
  message: string
}

const page = () => {
	return (
		<div className='mt-12 flex flex-col justify-start items-center h-screen'>
			<form className='flex flex-col gap-4 w-full max-w-2xl mx-auto'>
				<input type="text" placeholder="Name / お名前" required className="p-2 block w-full" />
				<input type="text" placeholder="Email / メールアドレス" required className="p-2 block w-full" />
				<textarea placeholder="Message / メッセージ" rows={10} required className="p-2 block w-full"></textarea>
				<button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">送信</button>
			</form>
		</div>
	)
}

export default page