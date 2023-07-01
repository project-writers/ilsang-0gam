import { useState } from 'react'
import { GoogleLogoSvg } from './component/GoogleLogoSVG.tsx'

function App() {
	return (
		<>
			<div className="bg-[#D0956A] w-screen h-screen relative">
				<div className="absolute bottom-0 left-0 w-full h-[276px] bg-white rounded-t-[40px] ">
					<button className="relative top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[90%] h-[60px] border-2 rounded-[80px] border-[#BABABA] text-center text-xl font-bold items-center ">
						로그인
						<GoogleLogoSvg className="absolute top-1/2 translate-x-14 -translate-y-1/2" />
					</button>
				</div>
			</div>
		</>
	)
}

export default App
