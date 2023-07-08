import { Link } from 'react-router-dom'

export function Header({ name }: { name: string }) {
	return (
		<header className="absolute top-0 left-0 z-20 w-full h-[48px] text-center items-center bg-white">
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-lg select-none">
				{name}
			</div>
			<Link
				to={'/main'}
				className="absolute top-1/2 left-[18px]  -translate-y-1/2"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="12"
					height="20"
					viewBox="0 0 12 20"
					fill="none"
				>
					<path
						d="M12 17.1336L4.583 9.7166L12 2.2834L9.7166 0L0 9.7166L9.7166 19.4332L12 17.1336Z"
						fill="black"
					/>
				</svg>
			</Link>
		</header>
	)
}
