import { NavBar } from '@/component/NavBar.tsx'

export function Footer() {
	return (
		<footer className="absolute bottom-0 w-full h-[180px] bg-white">
			<div className="fixed bottom-24 right-0 w-full h-[120px] px-6 text-center items-center flex flex-col gap-2 bg-white">
				<button className="w-full h-[60px] bg-zinc-300 rounded-full">
					로그아웃
				</button>
				<div className="w-full h-[60px] flex justify-center">
					<button className="w-fit h-fit right-0 text-zinc-400 border-b-2 border-zinc-400 m-auto">
						회원탈퇴
					</button>
				</div>
			</div>
			<NavBar />
		</footer>
	)
}
