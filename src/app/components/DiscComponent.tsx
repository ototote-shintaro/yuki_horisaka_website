import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type DiscComponentProps = {
	path: string,
	src: string,
	alt: string,
	title: string,
}

const DiscComponent = ({ path, src, alt, title }: DiscComponentProps) => {
	return (
		<div className='mt-12 flex flex-col items-center md:flex md:flex-row md:items-start md:justify-start md:gap-12'>
			<Link href={path} className='hover:opacity-75'>
				<Image
					src={src}
					alt={alt}
					width={756}
					height={210}
					className='max-w-sm'
				/>
			</Link>
			<Link href={path}>
				<span className='text-lg font-bold text-gray-700 underline'>{title}</span>
			</Link>
			<span></span>
		</div>
	)
}

export default DiscComponent