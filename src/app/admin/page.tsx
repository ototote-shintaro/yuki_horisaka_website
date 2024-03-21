import Link from 'next/link'
import React from 'react'

const page = () => {
	return (
		<div>
			<ul className='flex flex-col justify-center items-center gap-4'>
				<li className='text-lg font-bold underline text-blue-500'>
					<Link href='/admin/schedule/new'>
						スケジュール作成
					</Link>
				</li>
				<li className='text-lg font-bold underline text-pink-500'>
					<Link href='/admin/schedule/update'>
						スケジュール更新
					</Link>
				</li>
			</ul>
		</div>
	)
}

export default page