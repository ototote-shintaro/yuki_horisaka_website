import Link from 'next/link'
import React from 'react'

const Header = () => {
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
						<li>
							<Link href='/'>Home</Link>
						</li>
						<li>
							Schedule
						</li>
						<li>
							<Link href='/profile'>Profile</Link>
						</li>
						<li>
							Music
						</li>
						<li>
							Discography
						</li>
						<li>
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