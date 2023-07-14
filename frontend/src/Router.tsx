import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Start } from './page/start/Start.tsx'
import { SignUp } from './page/signup/SignUp'
import { MainPage } from './page/main/Main'
import { Watch } from './page/watch/Watch'
import { Write } from './page/write/Write'
import { MyPage } from './page/mypage/MyPage'
import { BASE_URL } from './constant.ts'

export function Router() {
	return (
		// 라우터에서 베이스네임을 선언하면 네비게이션에서 베이스를 따로 추가할 필요가 없음
		<BrowserRouter basename={BASE_URL}>
			<Routes>
				<Route path="/" element={<Start />}></Route>
				<Route path="/signup" element={<SignUp />}></Route>
				<Route path="/main" element={<MainPage />}></Route>
				<Route path="/watch/:id" element={<Watch />} />
				<Route path="/write" element={<Write />}></Route>
				<Route path="/mypage/:id" element={<MyPage />}></Route>
			</Routes>
		</BrowserRouter>
	)
}
