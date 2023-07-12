import { Header } from '@/component/Header'
import { NavBar } from '@/component/NavBar'

export function MyPage() {
	const dummy = [
		{
			title: 'wrote',
			date: '8/1/2122',
			content: 'eaYbVeHsXREnonRLgkCQ',
			tag: '',
		},
		{
			title: 'bright',
			date: '1/22/2116',
			content: 'EgcjPpuoZCRRw',
			tag: '',
		},
		{
			title: 'paragraph',
			date: '2/3/2034',
			content: 'sJTXRHXOCoEzyIH',
			tag: '',
		},
		{
			title: 'arrow',
			date: '8/17/2023',
			content: 'jGsMOuBAMumTE',
			tag: '',
		},
		{
			title: 'claws',
			date: '5/5/2069',
			content: 'jjojRF',
			tag: '',
		},
		{
			title: 'upward',
			date: '7/20/2047',
			content: 'ZzvjXHZXeJJadfi',
			tag: '',
		},
		{
			title: 'detail',
			date: '2/13/2087',
			content: 'fyBMOejdsnWyKzBctVh',
			tag: '',
		},
		{
			title: 'especially',
			date: '4/20/2117',
			content: 'KkvYGPvYgupq',
			tag: '',
		},
		{
			title: 'especially',
			date: '4/20/2117',
			content: 'KkvYGPvYgupq',
			tag: '',
		},
		{
			title: 'especially',
			date: '4/20/2117',
			content: 'KkvYGPvYgupq',
			tag: '',
		},
		{
			title: 'especially',
			date: '4/20/2117',
			content: 'KkvYGPvYgupq',
			tag: '',
		},
	]

	return (
		<div className="w-screen h-screen relative overflow-hidden">
			<Header name={'나는어피치'} />
			<section className="translate-y-[90px] w-full h-full px-6 overflow-y-scroll scrollbar-hide">
				{dummy.map((o) => {
					return (
						<div className="mt-4 px-5 py-5 h-44 border rounded-[20px] bg-white">
							<div className="flex font-bold text-base justify-between">
								<div className="">{o.title}</div>
								<div className="">작성일 {o.date}</div>
							</div>
							<div className="mt-4 text-xs">{o.content}</div>
						</div>
					)
				})}
				<div className="w-full h-[180px] " />
			</section>
			<footer className="absolute bottom-0 w-full h-[180px] bg-white">
				<div className="fixed bottom-24 right-0 w-full h-[60px] px-6 text-center items-center">
					<button className="w-full h-full bg-zinc-300 rounded-full">
						확인
					</button>
					<div className="w-fit right-0 border-b-2 border-black text-right">
						회원탈퇴
					</div>
				</div>
				<NavBar />
			</footer>
		</div>
	)
}
