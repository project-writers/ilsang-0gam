import { KeyboardEvent, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function SignUp() {
	const [sssssssssss, setNameState] = useState<{
		res: null | boolean
		message: string
	}>({ res: null, message: 'ㅤ' })
	const ref = useRef<HTMLInputElement>(null)
	const navigate = useNavigate()

	const registerNickname = async () => {
		if (!sssssssssss.res || !ref.current) return

		// TODO get email from jwt
		const email = 'user@email.com'
		// TODO registration data fetching with backend server
		const data = { email, nickName: ref.current.value }
		// todo fetching url

		const res = { state: Math.random() >= 0.5 }

		if (res.state) navigate('/main')
		else setNameState({ res: false, message: '유효하지 않은 필명입니다' })
	}

	return (
		<div className="w-screen h-screen relative">
			{/* input */}
			<div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center gap-[17px] px-[5%]">
				<div className="w-full text-center font-bold text-2xl">
					당신의 필명은?
				</div>
				<div className="h-[60px] rounded-[80px] text-center text-xl font-bold items-center bg-white border-2 border-[#BABABA] overflow-hidden relative">
					<input
						ref={ref}
						type="text"
						maxLength={20}
						className="absolute top-0 left-0 w-full h-full outline-none text-center text-xl font-bold items-center content-center"
					/>
					<div className="absolute top-0 right-0 w-32 h-full p-1">
						<button
							className="w-full h-full bg-amber-300 rounded-full"
							onClick={registerNickname}
						>
							확인
						</button>
					</div>
				</div>
				<div
					className={`opacity-0 ${
						sssssssssss.res
							? 'text-green-300 opacity-100'
							: 'text-red-300 opacity-100'
					}`}
				>
					{sssssssssss.message}
				</div>
			</div>
			{/* footer UI 디자인에 문제가 있음. 키보드배열이 하단 버튼화면을 가려서 사용성을 떨어뜨림. 인풋필드 오른쪽에 확인버튼 심는게 나을 듯 */}
			{/* <div className="absolute bottom-0 left-0 w-full h-[276px] bg-[#707070] rounded-t-[40px] px-[5%]">
				<Link to="/main">
					<button className="relative top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-[60px] rounded-[80px] text-center text-xl font-bold items-center bg-white">
						확인
					</button>
				</Link>
			</div> */}
		</div>
	)
}
