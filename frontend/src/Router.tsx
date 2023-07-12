import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Start } from './page/start/Start.tsx'
import { SignUp } from './page/signup/SignUp'
import { MainPage } from './page/main/Main'
import { Watch } from './page/watch/Watch'
import { Write } from './page/write/Write'
import { MyPage } from './page/mypage/MyPage'

export function Router() {
    return (
        // <BrowserRouter basename={import.meta.env.BASE_URL}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Start />}></Route>
                <Route path="/signup" element={<SignUp />}></Route>
                <Route path="/main" element={<MainPage />}></Route>
                <Route path="/watch/:id" element={<Watch />} />
                <Route path="/write" element={<Write />}></Route>
                <Route path="/mypage" element={<MyPage />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
