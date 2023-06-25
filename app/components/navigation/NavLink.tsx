import { link } from 'fs';
import Link from 'next/link';
import React from 'react';

interface NavLinkProps {
	linkName: string;
	route: string;
}

export default function NavLink({ linkName, route }: NavLinkProps) {
	return (
		<Link
			href={route}
			className={`text-gray-300 text-sm hover:text-white transition-colors duration-200`}
		>
			{linkName}
		</Link>
	);
}
