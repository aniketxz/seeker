import { assets } from "../../assets/assets"

const Footer = () => {
	return (
		<footer className='flex flex-col-reverse md:flex-row items-center justify-between text-left w-full px-8 py-2 border-t border-gray-500/30'>
			<div className='hidden md:flex items-center gap-5 text-gray-500'>
				<img src={assets.logo} alt='logo' className='w-20 opacity-80' />
				<div className="w-px h-7 bg-gray-500/60"></div>
				<p className='text-sm md:text-base'>
					All rights reserved. Copyright @Seeker
				</p>
			</div>
			<div className='flex items-center gap-3 opacity-70'>
				<a href='#'>
					<img src={assets.facebook_icon} alt='facebook' />
				</a>
				<a href='#'>
					<img src={assets.twitter_icon} alt='twitter' />
				</a>
				<a href='#'>
					<img src={assets.instagram_icon} alt='instagram' />
				</a>
			</div>
		</footer>
	)
}

export default Footer
