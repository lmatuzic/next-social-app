import React from 'react';

export default function MobileNav() {
	return (
		<div className='md:hidden absolute z-50 bg-black top-16 right-0 bottom-0 left-0'>
			<div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
				<a
					href='#'
					className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
				>
					Home
				</a>
				<a
					href='#'
					className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
				>
					About
				</a>
				<a
					href='#'
					className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
				>
					Services
				</a>
				<a
					href='#'
					className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
				>
					Contact
				</a>
			</div>
		</div>
	);
}
