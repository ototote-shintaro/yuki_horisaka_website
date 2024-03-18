import Link from 'next/link'
import React from 'react'

const page = () => {
	return (
		<div>
			<ul className='flex flex-col justify-center items-center'>
				<li className='text-lg font-bold underline text-blue-500'>
					<Link href='/admin/schedule/new'>
						スケジュール作成
					</Link>
				</li>
			</ul>
		</div>
	)
}

export default page