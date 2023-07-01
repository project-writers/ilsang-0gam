import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Start } from "./page/Start.tsx";
import { SignUp } from "./page/SignUp";
import { Main } from "./page/Main";
import { Watch } from "./page/Watch";
import { Write } from "./page/Write";
import { MyPage } from "./page/MyPage";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/main" element={<Main />}>
          <Route path="/main/:id" element={<Watch />} />
        </Route>
        <Route path="/write" element={<Write />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
