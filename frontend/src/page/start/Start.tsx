import { useEffect } from 'react'
import { GoogleLogoSvg } from '@component/GoogleLogoSVG.tsx'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '@/constant.ts'

export function Start() {
	// const [jwtState, setJwtState] = useState(false)
	const navigate = useNavigate()

	const jwtAuth = async () => {
		// TODO get jwt in google
		// TODO signin data fetching by jwt in backend server
		// return res
		const res = {
			state: Math.random() >= 0.5,
			user: {
				name: '',
				email: '',
			},
		}
		return res
	}

	const navigating = async () => {
		const res = await jwtAuth()
		if (res.state) {
			// TODO 로그인 정보 브라우저 등록 함수 작성
			navigate(BASE_URL + '/main')
		} else navigate(BASE_URL + '/signup')
	}

	useEffect(() => {
		// check token
		const signIn = false
		if (signIn) navigate(BASE_URL+ '/main')
	}, [])

	return (
		<>
			{/* 배경 */}
			<div className="bg-[#D0956A] w-screen h-screen relative">
				{/* 하단영역 */}
				<footer className="absolute bottom-0 left-0 w-full h-[276px] bg-white rounded-t-[40px] ">
					{/* 버튼 */}
					<button
						className="relative top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[90%] h-[60px] border-2 rounded-[80px] border-[#BABABA] text-center text-xl font-bold items-center "
						onClick={navigating}
					>
						로그인
						<GoogleLogoSvg className="absolute top-1/2 translate-x-16 -translate-y-1/2" />
					</button>
				</footer>
			</div>
		</>
	)
}
