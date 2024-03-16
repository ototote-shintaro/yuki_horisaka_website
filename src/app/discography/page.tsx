import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import DiscComponent from '../components/DiscComponent'

const page = () => {
	return (
		<div className='md:px-[30%]'>
			<DiscComponent
				path={'discography/thinking-about-you'}
				src={'/moon_boat_cover.jpg'}
				alt={'thinking-about-you'}
				title={'あなたを思うと'}
			/>
			<DiscComponent
				path={'discography/fruhlingstraum'}
				src={'/fruhlingstraum_cover.png'}
				alt={'fruhlingstraum'}
				title={'静かの基地「はるのゆめ」'}
			/>
			<DiscComponent
				path={'discography/moon-boat-sails'}
				src={'/moon_boat_cover.jpg'}
				alt={'moon_boat_sails'}
				title={'静かの基地 「つきのふね」'}
			/>
		</div>
	)
}

export default page