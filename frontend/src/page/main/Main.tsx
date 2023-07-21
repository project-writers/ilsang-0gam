import { NavBar } from '@/component/NavBar'
import { Tag } from '@/component/Tag'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

export function MainPage() {
    const card_dummy_list = [
        {
            ilsang_no: 31,
            title: 'lack',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            penname: 'Summers',
            tag: '자전거',
        },
        {
            ilsang_no: 98,
            title: 'bend',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            penname: 'Jensen',
            tag: '밤',
        },
        {
            ilsang_no: 58,
            title: 'current',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            penname: 'Pierce',
            tag: '글귀',
        },
        {
            ilsang_no: 49,
            title: 'trunk',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            penname: 'Cunningham',
            tag: '회사',
        },
        {
            ilsang_no: 26,
            title: 'same',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            penname: 'Springs',
            tag: '개발',
        },
    ]

    interface IForm {
        keyword: string
    }

    const [dummyList, setDummyList] = useState(card_dummy_list)

    const navigate = useNavigate()
    const { register, handleSubmit, setFocus } = useForm<IForm>()
    const onValid = (data: IForm) => {
        navigate(`/main?keyword=${data.keyword}`)

        // 검색조건
        const keyword = data.keyword.slice(1)
        const searchedTag = card_dummy_list.filter((item) =>
            item.tag.includes(keyword)
        )
        const searchedPenname = card_dummy_list.filter((item) =>
            item.penname.includes(keyword)
        )
        const searchedTitle = card_dummy_list.filter((item) =>
            item.title.includes(keyword)
        )
        if (data.keyword.startsWith('#')) {
            setDummyList(searchedTag)
        } else if (data.keyword.startsWith('@')) {
            setDummyList(searchedPenname)
        } else {
            setDummyList(searchedTitle)
        }
    }

    return (
        <div className="w-screen h-screen relative bg-[#F7F7F7]">
            <div className="pt-9 pl-6">{'로고영역'}</div>
            <div className="w-full pt-9 px-6 flex flex-col">
                <div className="font-bold text-2xl">{'일상공감'}</div>
                <form
                    className="mt-3 flex items-center relative"
                    onSubmit={handleSubmit(onValid)}
                >
                    <input
                        {...register('keyword')}
                        type="text"
                        className="w-full pl-5 py-1 border rounded-[20px] border-[#D9D9D9]"
                        placeholder="검색"
                    />
                    <svg
                        className="absolute right-5"
                        onClick={() => {
                            setFocus('keyword')
                        }}
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M20 18.4444L13 11.4444C13.4444 10.8889 13.7963 10.25 14.0556 9.52778C14.3148 8.80556 14.4444 8.03704 14.4444 7.22222C14.4444 5.2037 13.7452 3.49556 12.3467 2.09778C10.9481 0.700001 9.24 0.000741145 7.22222 3.15693e-07C5.2037 2.27461e-07 3.49556 0.699259 2.09778 2.09778C0.7 3.4963 0.000740513 5.20444 -3.15693e-07 7.22222C-4.03926e-07 9.24074 0.699259 10.9489 2.09778 12.3467C3.4963 13.7444 5.20444 14.4437 7.22222 14.4444C8.03704 14.4444 8.80556 14.3148 9.52778 14.0556C10.25 13.7963 10.8889 13.4444 11.4444 13L18.4444 20L20 18.4444ZM12.2222 7.22222C12.2222 8.61111 11.7359 9.79185 10.7633 10.7644C9.79074 11.737 8.61037 12.223 7.22222 12.2222C5.83333 12.2222 4.65259 11.7359 3.68 10.7633C2.70741 9.79074 2.22148 8.61037 2.22222 7.22222C2.22222 5.83333 2.70852 4.65259 3.68111 3.68C4.6537 2.70741 5.83407 2.22148 7.22222 2.22222C8.61111 2.22222 9.79185 2.70852 10.7644 3.68111C11.737 4.6537 12.223 5.83407 12.2222 7.22222Z"
                            fill="#D0D0D0"
                        />
                    </svg>
                </form>
                <Tag bgColor="#FFCE52" />
                {dummyList.map((data) => (
                    <Link
                        to={`/watch/${data.ilsang_no}`}
                        key={data.penname}
                        className="relative mt-4 px-5 py-5 h-44 border rounded-[20px] bg-white"
                    >
                        <div className="font-bold text-base">{data.title}</div>
                        <div className="mt-4 text-xs line-clamp-5">
                            {data.content}
                        </div>
                        <Link
                            to={`/mypage/${data.penname}`}
                            className="absolute mt-1 right-5 text-xs"
                        >
                            {data.penname}님의 글
                        </Link>
                    </Link>
                ))}
            </div>

            {/* footer */}
            <NavBar />
        </div>
    )
}
