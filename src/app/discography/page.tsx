import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
	return (
		<>
			<div className='px-[28%] mt-12 flex justify-center gap-12'>
				<Link href={`discography/moon-boat-sails`} className='hover:opacity-75'>
					<Image
						src={'/moon_boat_cover.jpg'}
						alt='moon_boat_sails'
						width={756}
						height={210}
						className='max-w-sm'
					/>
				</Link>
				<Link href={`discography/moon-boat-sails`}>
					<span className='text-lg font-bold text-gray-700 underline'>静かの基地 「つきのふね」</span>
				</Link>
				<span></span>
			</div>
		</>
	)
}

export default page