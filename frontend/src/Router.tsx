import { HashRouter, Route, Routes } from 'react-router-dom'
import { Start } from './page/start/Start.tsx'
import { SignUp } from './page/signup/SignUp'
import { MainPage } from './page/main/Main'
import { Watch } from './page/watch/Watch'
import { Write } from './page/write/Write'
import { MyPage } from './page/mypage/MyPage'

export function Router() {
	return (
		<HashRouter basename='/ilsang-0gam'>
			<Routes>
				<Route path="/" element={<Start />}></Route>
				<Route path="/signup" element={<SignUp />}></Route>
				<Route path="/main" element={<MainPage />}>
					<Route path="/main/:id" element={<Watch />} />
				</Route>
				<Route path="/write" element={<Write />}></Route>
				<Route path="/mypage" element={<MyPage />}></Route>
			</Routes>
		</HashRouter>
	)
}
