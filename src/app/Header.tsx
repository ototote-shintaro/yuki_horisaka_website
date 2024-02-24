"use client";

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
	const pathname = usePathname()
	const isActive = (path: string) => {
		return pathname === path ? 'text-blue-700' : 'text-black';
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
							Music
						</li>
						<li className={`${isActive('/discography')}`}>
							Discography
						</li>
						<li className={`${isActive('/contact')}`}>
							Contact
						</li>
						<li>
							Shop
						</li>
					</ul>
				</div>
			</div>
		</header>
	)
}

export default Header