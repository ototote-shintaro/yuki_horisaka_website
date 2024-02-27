"use client";

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
	const pathname = usePathname()
	const isActive = (path: string) => {
		return pathname === path ? 'text-gray-500 font-bold' : 'text-black font-bold';
	};

	return (
		<header>
			<div className='hidden md:block'>
				<div className='flex items-center justify-between'>
					<h1 className='text-xl font-bold py-6 pl-12'>
						<Link href='/'>
							YUKI<br />HORISAKA
						</Link>
					</h1>
					<ul className='flex flex-auto justify-center gap-12'>
						<li className={`${isActive('/')}`}>
							<Link href='/'>Home</Link>
						</li>
						<li className={`${isActive('/schedule')}`}>
							<Link href='/schedule'>Schedule</Link>
						</li>
						<li className={`${isActive('/profile')}`}>
							<Link href='/profile'>Profile</Link>
						</li>
						<li className={`${isActive('/music')}`}>
							<Link href='/music'>Music</Link>
						</li>
						<li className={`${isActive('/discography')}`}>
							<Link href='/discography'>Discography</Link>
						</li>
						<li className={`${isActive('/contact')}`}>
							<Link href='/contact'>Contact</Link>
						</li>
						<li className='font-bold text-black'>
							<Link href='https://yukihorisaka.booth.pm/' target='_blank'>
								Shop <FontAwesomeIcon icon={faExternalLinkAlt} className='h-[15px] ml-1' />
							</Link>
						</li>
					</ul>
					<div className='flex gap-4 mr-24'>
						<Link href={"https://www.instagram.com/yuki_horisaka/"} target='_blank' className='flex justify-center items-center'>
							<FontAwesomeIcon icon={faInstagram} className='h-[20px] mr-2' />
						</Link>
						<Link href={"https://twitter.com/yuki_Qtarockets"} target='_blank' className='flex justify-center items-center'>
							<FontAwesomeIcon icon={faXTwitter} className='h-[20px] mr-2' />
						</Link>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header