import Link from 'next/link';

interface MobileNavLinkProps {
	linkName: string;
	route: string;
}

export default function MobileNavLink({ linkName, route }: MobileNavLinkProps) {
	return (
		<Link
			href={route}
			className='text-gray-300 text-lg hover:text-white transition-colors duration-200 mb-6 pb-2 border-b-2 border-gray-700 border-solid'
		>
			{linkName}
		</Link>
	);
}
