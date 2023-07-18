import { Header } from '@/component/Header'
import { NavBar } from '@/component/NavBar'
import { Tag } from '@/component/Tag'

export function Watch() {
    return (
        <div className="w-screen h-screen relative overflow-hidden">
            <Header name={'무지님의 글'} />
            <div className="translate-y-[90px] w-full px-6">
                <>
                    <div className="font-bold text-2xl">lack</div>
                    <div className="mt-4 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </div>
                </>
            </div>
            <div className="translate-y-[90px] px-6">
                <Tag bgColor="" />
            </div>
            <NavBar />
        </div>
    )
}
