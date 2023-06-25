import MobileNavLink from './MobileNavLink';

export default function MobileNav() {
	return (
		<div className='md:hidden absolute z-50 bg-black top-16 right-0 bottom-0 left-0'>
			<div className='flex flex-col p-4'>
				<MobileNavLink linkName='home' route='/' />
				<MobileNavLink linkName='about' route='/about' />
			</div>
		</div>
	);
}
