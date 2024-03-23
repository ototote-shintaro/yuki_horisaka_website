import Link from 'next/link'
import React from 'react'

const page = () => {
	return (
		<div>
			<p className='text-2xl font-bold underline text-black text-center mb-2'>
				スケジュール
			</p>
			<ul className='flex justify-center items-center gap-6'>
				<li className='text-lg font-bold underline text-green-500 cursor-pointer'>
					<Link href='/admin/schedule/list'>
						一覧
					</Link>
				</li>
				<li className='text-lg font-bold underline text-blue-500'>
					<Link href='/admin/schedule/new'>
						作成
					</Link>
				</li>
				<li className='text-lg font-bold underline text-pink-500'>
					<Link href='/admin/schedule/update'>
						更新
					</Link>
				</li>
				<li className='text-lg font-bold underline text-gray-500'>
					<Link href='/admin/schedule/delete'>
						削除
					</Link>
				</li>
			</ul>
		</div>
	)
}

export default page