import { Header } from '@/component/Header'
import { useLocation } from 'react-router-dom'
import { Footer } from './Footer.tsx'

// function findContainer(el: HTMLElement) {
// 	if (el.classList.contains('btn')) return el
// 	else return findContainer(el.parentElement as HTMLElement)
// }

// const goto = (e: MouseEvent) => {
// 	const target = e.target as HTMLElement
// 	if (target.classList.contains('nav')) return
// 	const btn = findContainer(target)
// 	const toUrl = btn.getAttribute('data-href')
// 	console.log(toUrl)
// }

const getNickName = (id: string) => {
	// fetching(id):nickname
	console.log(id);
	return '테스트-유져'
}

// const sliceLine = (str: string) => {
// 	const line = str.split('\n')
// 	console.log(line.length)
// }

export function MyPage() {
	const userId = useLocation().pathname.replace('/mypage/', '')
	const userNickName = getNickName(userId)

	return (
		<div className="w-screen h-screen relative overflow-hidden bg-zinc-100">
			<Header name={userNickName} />
			<section className="translate-y-12 w-full h-full px-6 overflow-y-scroll scrollbar-hide">
				{dummy.map((o, i) => {
					return (
						<div
							key={o.title + i}
							className="mt-4 px-5 pt-3 pb-5 w-full h-fit border rounded-[20px] bg-white "
						>
							<div className="w-full max-h-[80vh] flex flex-col gap-1 overflow-hidden">
								<div className="flex font-bold text-base justify-between ">
									<div className="">{o.title}</div>
									<div className="">작성일 {o.date}</div>
								</div>
								<div className="h-full text-xs overflow-hidden ">
									{o.content}
								</div>
							</div>
						</div>
					)
				})}
				<div className="w-full h-[280px] " />
			</section>
			<Footer />
		</div>
	)
}

const dummy = [
	{
		title: 'wrote',
		date: '8/1/2122',
		content: `eaYbVeHsXREnonRLgkCQ Lorem lasdsad
		a;sdasdsad asdasdasdasd asd asd sad asd lasdaskd jkas jk sa
		asdasdsad asdasdasdasd asd asd sad asd lasdaskd jkas jk sa
		asdasdsad asdasdasdasd asd asd sad asd lasdaskd jkas jk sa
		asdasdsad asdasdasdasd asd asd sad asd lasdaskd jkas jk sa
		asdasdsad asdasdasdasd asd asd sad asd lasdaskd jkas jk sa
		asdasdnasldnkasdnlasndnlasdnlnasdnasndnsad a nskl nklas klalsdn
		asdkajsd ba jks djaksd asjkjkasbd kkas dbkb k
		asdasdnasldnkasdnlasndnlasdnlnasdnasndnsad a nskl nklas klalsdn
		asdkajsd ba jks djaksd asjkjkasbd kkas dbkb k
		asdasdnasldnkasdnlasndnlasdnlnasdnasndnsad a nskl nklas klalsdn
		asdkajsd ba jks djaksd asjkjkasbd kkas dbkb k
		asdasdnasldnkasdnlasndnlasdnlnasdnasndnsad a nskl nklas klalsdn
		asdkajsd ba jks djaksd asjkjkasbd kkas dbkb k
		a;sdasdsad asdasdasdasd asd asd sad asd lasdaskd jkas jk sa
		a;sdasdsad asdasdasdasd asd asd sad asd lasdaskd jkas jk sa
		a;sdasdsad asdasdasdasd asd asd sad asd lasdaskd jkas jk sa
		a;sdasdsad asdasdasdasd asd asd sad asd lasdaskd jkas jk sa
		a;sdasdsad asdasdasdasd asd asd sad asd lasdaskd jkas jk sa
		a;sdasdsad asdasdasdasd asd asd sad asd lasdaskd jkas jk sa
		asdasdsad asdasdasdasd asd asd sad asd lasdaskd jkas jk sa
		asdasdsad asdasdasdasd asd asd sad asd lasdaskd jkas jk sa
		asdasdsad asdasdasdasd asd asd sad asd lasdaskd jkas jk sa
		asdasdsad asdasdasdasd asd asd sad asd lasdaskd jkas jk sa
		asdasdnasldnkasdnlasndnlasdnlnasdnasndnsad a nskl nklas klalsdn
		asdkajsd ba jks djaksd asjkjkasbd kkas dbkb k
		asdasdnasldnkasdnlasndnlasdnlnasdnasndnsad a nskl nklas klalsdn
		asdkajsd ba jks djaksd asjkjkasbd kkas dbkb k
		asdasdnasldnkasdnlasndnlasdnlnasdnasndnsad a nskl nklas klalsdn
		asdkajsd ba jks djaksd asjkjkasbd kkas dbkb k
		asdasdnasldnkasdnlasndnlasdnlnasdnasndnsad a nskl nklas klalsdn
		asdkajsd ba jks djaksd asjkjkasbd kkas dbkb k
		asdasdsad asdasdasdasd asd asd sad asd lasdaskd jkas jk sa
		asdasdsad asdasdasdasd asd asd sad asd lasdaskd jkas jk sa
		asdasdsad asdasdasdasd asd asd sad asd lasdaskd jkas jk sa
		asdasdsad asdasdasdasd asd asd sad asd lasdaskd jkas jk sa
		asdasdnasldnkasdnlasndnlasdnlnasdnasndnsad a nskl nklas klalsdn
		a;sdasdsad asdasdasdasd asd asd sad asd lasdaskd jkas jk sa
		a;sdasdsad asdasdasdasd asd asd sad asd lasdaskd jkas jk sa
		a;sdasdsad asdasdasdasd asd asd sad asd lasdaskd jkas jk sa
		a;sdasdsad asdasdasdasd asd asd sad asd lasdaskd jkas jk sa
		a;sdasdsad asdasdasdasd asd asd sad asd lasdaskd jkas jk sa
		asdasdsad asdasdasdasd asd asd sad asd lasdaskd jkas jk sa
		asdasdsad asdasdasdasd asd asd sad asd lasdaskd jkas jk sa
		asdasdsad asdasdasdasd asd asd sad asd lasdaskd jkas jk sa
		asdasdsad asdasdasdasd asd asd sad asd lasdaskd jkas jk sa
		asdasdnasldnkasdnlasndnlasdnlnasdnasndnsad a nskl nklas klalsdn
		asdkajsd ba jks djaksd asjkjkasbd kkas dbkb k
		asdasdnasldnkasdnlasndnlasdnlnasdnasndnsad a nskl nklas klalsdn
		asdkajsd ba jks djaksd asjkjkasbd kkas dbkb k
		asdasdnasldnkasdnlasndnlasdnlnasdnasndnsad a nskl nklas klalsdn
		asdkajsd ba jks djaksd asjkjkasbd kkas dbkb k
		asdasdnasldnkasdnlasndnlasdnlnasdnasndnsad a nskl nklas klalsdn
		asdkajsd ba jks djaksd asjkjkasbd kkas dbkb k
		asdasdsad asdasdasdasd asd asd sad asd lasdaskd jkas jk sa
		asdasdsad asdasdasdasd asd asd sad asd lasdaskd jkas jk sa
		asdasdsad asdasdasdasd asd asd sad asd lasdaskd jkas jk sa
		asdasdsad asdasdasdasd asd asd sad asd lasdaskd jkas jk sa
		asdasdnasldnkasdnlasndnlasdnlnasdnasndnsad a nskl nklas klalsdn
		asdkajsd ba jks djaksd asjkjkasbd kkas dbkb k
		asdasdnasldnkasdnlasndnlasdnlnasdnasndnsad a nskl nklas klalsdn
		asdkajsd ba jks djaksd asjkjkasbd kkas dbkb k
		asdasdnasldnkasdnlasndnlasdnlnasdnasndnsad a nskl nklas klalsdn
		asdkajsd ba jks djaksd asjkjkasbd kkas dbkb k
		asdasdnasldnkasdnlasndnlasdnlnasdnasndnsad a nskl nklas klalsdn
		asdkajsd ba jks djaksd asjkjkasbd kkas dbkb k
		asdasdsad asdasdasdasd asd asd sad asd lasdaskd jkas jk sa
		asdasdsad asdasdasdasd asd asd sad asd lasdaskd jkas jk sa
		asdasdsad asdasdasdasd asd asd sad asd lasdaskd jkas jk sa
		asdasdsad asdasdasdasd asd asd sad asd lasdaskd jkas jk sa
		asdasdnasldnkasdnlasndnlasdnlnasdnasndnsad a nskl nklas klalsdn
		asdkajsd ba jks djaksd asjkjkasbd kkas dbkb k
		asdasdnasldnkasdnlasndnlasdnlnasdnasndnsad a nskl nklas klalsdn
		asdkajsd ba jks djaksd asjkjkasbd kkas dbkb k
		asdasdnasldnkasdnlasndnlasdnlnasdnasndnsad a nskl nklas klalsdn
		asdkajsd ba jks djaksd asjkjkasbd kkas dbkb k
		asdasdnasldnkasdnlasndnlasdnlnasdnasndnsad a nskl nklas klalsdn
		asdkajsd ba jks djaksd asjkjkasbd kkas dbkb k
		asdasdsad asdasdasdasd asd asd sad asd lasdaskd jkas jk sa
		asdasdsad asdasdasdasd asd asd sad asd lasdaskd jkas jk sa
		asdasdsad asdasdasdasd asd asd sad asd lasdaskd jkas jk sa
		asdasdsad asdasdasdasd asd asd sad asd lasdaskd jkas jk sa
		asdasdnasldnkasdnlasndnlasdnlnasdnasndnsad a nskl nklas klalsdn
		asdkajsd ba jks djaksd asjkjkasbd kkas dbkb k
		asdasdnasldnkasdnlasndnlasdnlnasdnasndnsad a nskl nklas klalsdn
		asdkajsd ba jks djaksd asjkjkasbd kkas dbkb k
		asdasdnasldnkasdnlasndnlasdnlnasdnasndnsad a nskl nklas klalsdn
		asdkajsd ba jks djaksd asjkjkasbd kkas dbkb k
		asdasdnasldnkasdnlasndnlasdnlnasdnasndnsad a nskl nklas klalsdn
		asdkajsd ba jks djaksd asjkjkasbd kkas dbkb k
		asdasdsad asdasdasdasd asd asd sad asd lasdaskd jkas jk sa
		asdasdsad asdasdasdasd asd asd sad asd lasdaskd jkas jk sa
		asdasdsad asdasdasdasd asd asd sad asd lasdaskd jkas jk sa
		asdasdsad asdasdasdasd asd asd sad asd lasdaskd jkas jk sa
		asdasdnasldnkasdnlasndnlasdnlnasdnasndnsad a nskl nklas klalsdn
		asdkajsd ba jks djaksd asjkjkasbd kkas dbkb k
		asdasdnasldnkasdnlasndnlasdnlnasdnasndnsad a nskl nklas klalsdn
		asdkajsd ba jks djaksd asjkjkasbd kkas dbkb k
		asdasdnasldnkasdnlasndnlasdnlnasdnasndnsad a nskl nklas klalsdn
		asdkajsd ba jks djaksd asjkjkasbd kkas dbkb k
		asdasdnasldnkasdnlasndnlasdnlnasdnasndnsad a nskl nklas klalsdn
		asdkajsd ba jks djaksd asjkjkasbd kkas dbkb k
		asdkajsd ba jks djaksd asjkjkasbd kkas dbkb k
		asdasdnasldnkasdnlasndnlasdnlnasdnasndnsad a nskl nklas klalsdn
		asdkajsd ba jks djaksd asjkjkasbd kkas dbkb k
		asdasdnasldnkasdnlasndnlasdnlnasdnasndnsad a nskl nklas klalsdn
		asdkajsd ba jks djaksd asjkjkasbd kkas dbkb k
		asdasdnasldnkasdnlasndnlasdnlnasdnasndnsad a nskl nklas klalsdn
		asdkajsd ba jks djaksd asjkjkasbd kkas dbkb k
		asdasdsad asdasdasdasd asd asd sad asd lasdaskd jkas jk sa
		asdasdsad asdasdasdasd asd asd sad asd lasdaskd jkas jk sa
		asdasdsad asdasdasdasd asd asd sad asd lasdaskd jkas jk sa
		asdasdsad asdasdasdasd asd asd sad asd lasdaskd jkas jk sa
		asdasdnasldnkasdnlasndnlasdnlnasdnasndnsad a nskl nklas klalsdn
		asdkajsd ba jks djaksd asjkjkasbd kkas dbkb k
		asdasdnasldnkasdnlasndnlasdnlnasdnasndnsad a nskl nklas klalsdn
		asdkajsd ba jks djaksd asjkjkasbd kkas dbkb k
		asdasdnasldnkasdnlasndnlasdnlnasdnasndnsad a nskl nklas klalsdn
		asdkajsd ba jks djaksd asjkjkasbd kkas dbkb k
		asdasdnasldnkasdnlasndnlasdnlnasdnasndnsad a nskl nklas klalsdn
		asdkajsd ba jks djaksd asjkjkasbd kkas dbkb k
		asdasdsad asdasdasdasd asd asd sad asd lasdaskd jkas jk sa
		asdasdsad asdasdasdasd asd asd sad asd lasdaskd jkas jk sa
		asdasdsad asdasdasdasd asd asd sad asd lasdaskd jkas jk sa
		asdasdsad asdasdasdasd asd asd sad asd lasdaskd jkas jk sa
		asdasdnasldnkasdnlasndnlasdnlnasdnasndnsad a nskl nklas klalsdn
		asdkajsd ba jks djaksd asjkjkasbd kkas dbkb k
		asdasdnasldnkasdnlasndnlasdnlnasdnasndnsad a nskl nklas klalsdn
		asdkajsd ba jks djaksd asjkjkasbd kkas dbkb k
		asdasdnasldnkasdnlasndnlasdnlnasdnasndnsad a nskl nklas klalsdn
		asdkajsd ba jks djaksd asjkjkasbd kkas dbkb k
		asdasdnasldnkasdnlasndnlasdnlnasdnasndnsad a nskl nklas klalsdn
		asdkajsd ba jks djaksd asjkjkasbd kkas dbkb k
		asdasdsad asdasdasdasd asd asd sad asd lasdaskd jkas jk sa
		asdasdsad asdasdasdasd asd asd sad asd lasdaskd jkas jk sa
		asdasdsad asdasdasdasd asd asd sad asd lasdaskd jkas jk sa
		asdasdsad asdasdasdasd asd asd sad asd lasdaskd jkas jk sa
		asdasdnasldnkasdnlasndnlasdnlnasdnasndnsad a nskl nklas klalsdn
		asdkajsd ba jks djaksd asjkjkasbd kkas dbkb k
		asdasdnasldnkasdnlasndnlasdnlnasdnasndnsad a nskl nklas klalsdn
		asdkajsd ba jks djaksd asjkjkasbd kkas dbkb k
		asdasdnasldnkasdnlasndnlasdnlnasdnasndnsad a nskl nklas klalsdn
		asdkajsd ba jks djaksd asjkjkasbd kkas dbkb k
		asdasdnasldnkasdnlasndnlasdnlnasdnasndnsad a nskl nklas klalsdn
		asdkajsd ba jks djaksd asjkjkasbd kkas dbkb k
		asdasdsad asdasdasdasd asd asd sad asd lasdaskd jkas jk sa
		asdasdsad asdasdasdasd asd asd sad asd lasdaskd jkas jk sa
		asdasdsad asdasdasdasd asd asd sad asd lasdaskd jkas jk sa
		asdasdsad asdasdasdasd asd asd sad asd lasdaskd jkas jk sa
		asdasdnasldnkasdnlasndnlasdnlnasdnasndnsad a nskl nklas klalsdn
		asdkajsd ba jks djaksd asjkjkasbd kkas dbkb k
		asdasdnasldnkasdnlasndnlasdnlnasdnasndnsad a nskl nklas klalsdn
		asdkajsd ba jks djaksd asjkjkasbd kkas dbkb k
		asdasdnasldnkasdnlasndnlasdnlnasdnasndnsad a nskl nklas klalsdn
		asdkajsd ba jks djaksd asjkjkasbd kkas dbkb k
		asdasdnasldnkasdnlasndnlasdnlnasdnasndnsad a nskl nklas klalsdn
		asdkajsd ba jks djaksd asjkjkasbd kkas dbkb k
		asdasdnasldnkasdnlasndnlasdnlnasdnasndnsad a nskl nklas klalsdn
		asdkajsd ba jks djaksd asjkjkasbd kkas dbkb k
		`,
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
		title: 'end post',
		date: '4/20/2117',
		content: 'KkvYGPvYgupq',
		tag: '',
	},
]
