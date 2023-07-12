import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Start } from './page/start/Start.tsx'
import { SignUp } from './page/signup/SignUp'
import { MainPage } from './page/main/Main'
import { Watch } from './page/watch/Watch'
import { Write } from './page/write/Write'
import { MyPage } from './page/mypage/MyPage'
import { useState } from 'react'

export function Router() {
  const publish = useState('github')[0]
  const prefix = publish === 'github' ? '/ilsang-0gam' : ''

  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${prefix}/`} element={<Start />}></Route>
        <Route path={`${prefix}/signup`} element={<SignUp />}></Route>
        <Route path={`${prefix}/main`} element={<MainPage />}></Route>
        <Route path={`${prefix}/watch/:id`} element={<Watch />} />
        <Route path={`${prefix}/write`} element={<Write />}></Route>
        <Route path={`${prefix}/mypage`} element={<MyPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
