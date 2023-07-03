import { KeyboardEvent, useRef, useState } from 'react'

export function Signup() {
	const [nameState, setNameState] = useState<{
		res: null | boolean
		message: string
	}>({ res: null, message: '' })
	const keydown = (e: KeyboardEvent) => {
		if (e.key !== 'Enter') return
		const value = (e.target as HTMLInputElement).value
		// nickname validation fetching
		if (value === '홍길동')
			setNameState({ res: true, message: '사용이 가능합니다' })
		else
			setNameState({ res: false, message: '이미 존재하는 필명입니다' })
	}

	return (
		<div className="w-screen h-screen flex flex-col justify-center">
			{/* input */}
			<div className="w-full h-full flex flex-col justify-center gap-[17px] px-[5%]">
				<div className="w-full text-center font-bold text-2xl">
					당신의 필명은?
				</div>
				<input
					type="text"
					className="h-[60px] rounded-[80px] text-center text-xl font-bold items-center bg-white border-2 border-[#BABABA]"
					onKeyDown={keydown}
				/>
				<div className={`${nameState.res ? 'text-green-300' : 'text-red-300'}`}>
					{nameState.message}
				</div>
			</div>
			{/* footer */}
			<div className="w-full h-[276px] bg-[#707070] rounded-t-[40px] px-[5%]">
				<button className="relative top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-[60px] rounded-[80px] text-center text-xl font-bold items-center bg-white">
					확인
				</button>
			</div>
		</div>
	)
}
