import { Header } from '@/component/Header'
import { NavBar } from '@/component/NavBar'
import { useLocation } from 'react-router-dom'
import { Footer } from './Footer.tsx'

function findContainer(el: HTMLElement) {
	if (el.classList.contains('btn')) return el
	else return findContainer(el.parentElement as HTMLElement)
}

const goto = (e: MouseEvent) => {
	const target = e.target as HTMLElement
	if (target.classList.contains('nav')) return
	const btn = findContainer(target)
	const toUrl = btn.getAttribute('data-href')
	console.log(toUrl)
}

export function MyPage() {
	const userId = useLocation().pathname.replace('/mypage/', '')

	return (
		<div className="w-screen h-screen relative overflow-hidden">
			<Header name={userId} />
			<section className="translate-y-[90px] w-full h-full px-6 overflow-y-scroll scrollbar-hide">
				{dummy.map((o, i) => {
					return (
						<div
							key={o.title + i}
							className="mt-4 px-5 py-5 h-44 border rounded-[20px] bg-white"
						>
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
			<Footer />
		</div>
	)
}

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
