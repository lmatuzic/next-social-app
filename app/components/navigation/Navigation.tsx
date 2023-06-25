'use client';

import { UserButton } from '@clerk/nextjs';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import MobileNav from './MobileNav';
import NavLink from './NavLink';

export default function Navigation() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		if (isOpen) {
			document.body.classList.add('overflow-hidden');
		} else {
			document.body.classList.remove('overflow-hidden');
		}
	}, [isOpen]);

	return (
		<nav className='bg-black'>
			<div className='container flex items-center justify-between px-4 h-16'>
				<Link href='/' className='text-white'>
					Logo
				</Link>

				<div className='hidden md:flex items-center space-x-6'>
					<NavLink linkName='home' route='/' />
					<NavLink linkName='about' route='/about' />
					<UserButton />
				</div>

				<button
					onClick={toggleMenu}
					type='button'
					className='text-gray-400 hover:text-white md:hidden'
				>
					{!isOpen ? <Menu /> : <X />}
				</button>
			</div>

			{isOpen && <MobileNav />}
		</nav>
	);
}
