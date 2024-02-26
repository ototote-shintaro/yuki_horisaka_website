import Image from 'next/image'
import React from 'react'

const page = () => {
	return (
		<>
			<div className='px-[28%] flex justify-center gap-12'>
				<Image
					src={'/moon_boat_cover.jpg'}
					alt='moon_boat_sails'
					width={756}
					height={210}
					className='max-w-sm'
				/>
				<h1 className='text-lg font-bold text-gray-700 underline'>静かの基地 「つきのふね」</h1>
				<span></span>
			</div>
		</>
	)
}

export default page