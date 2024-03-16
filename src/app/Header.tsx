"use client";

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare, faBars, faExternalLinkAlt, faXmark } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
	const pathname = usePathname()
	const isActive = (path: string) => {
		return pathname === path ? 'text-gray-500 font-bold' : 'text-black font-bold';
	};

	// SP MENU用
	const [isOpen, setOpen] = useState<boolean>(false)
	const handleMenuOpen = () => {
		setOpen(!isOpen)
	}
	const handleMenuClose = () => {
		setOpen(false)
	}

	return (
		<header>
			{/* PC MENU */}
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
			{/* SP MENU */}
			<div className='md:hidden'>
				<div className='flex justify-center items-center'>
					<h1 className='text-xl font-bold mt-6'>
						YUKI<br />HORISAKA
					</h1>
					<button className='absolute right-0 mr-6 z-50' onClick={handleMenuOpen}>
						{isOpen
							? <FontAwesomeIcon icon={faXmark} className='h-6' />
							: <FontAwesomeIcon icon={faBars} className='h-6' />
						}
					</button>
				</div>
				<nav className={
					isOpen
						? 'bg-custom-pastel-pink fixed top-0 right-0 bottom-0 left-0 h-screen flex flex-col'
						: 'fixed right-[-100%]'
				}>
					<ul className={
						isOpen
							? 'flex h-screen justify-center items-center flex-col gap-6 text-lg'
							: 'block'
					}>
						<li>
							<Link onClick={handleMenuClose} href='/'>home</Link>
						</li>
						<li>
							<Link onClick={handleMenuClose} href='/schedule'>Schedule</Link>
						</li>
						<li>
							<Link onClick={handleMenuClose} href='/profile'>Profile</Link>
						</li>
						<li>
							<Link onClick={handleMenuClose} href='/music'>Music</Link>
						</li>
						<li>
							<Link onClick={handleMenuClose} href='/discography'>Discography</Link>
						</li>
						<li>
							<Link onClick={handleMenuClose} href='/contact'>Contact</Link>
						</li>
						<li>
							<Link
								onClick={handleMenuClose}
								href='https://yukihorisaka.booth.pm/'
								target='_blank'
							>
								Shop
								<FontAwesomeIcon icon={faArrowUpRightFromSquare} className='h-[16px] ml-2' />
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header