import { Link, useMatch } from 'react-router-dom'

export function NavBar() {
    const getUserId = () => {
        return 'test-user'
    }

    return (
        <div className="bg-zinc-100 w-full h-16 fixed bottom-0 z-50 flex justify-around items-center ">
            <Link to={'/mypage/' + getUserId()}>
                <MyPageBtnSVG />
            </Link>
            <Link to="/main">
                <MainPageBtnSVG />
            </Link>
            <Link to="/write">
                <WriteBtnSVG />
            </Link>
        </div>
    )
}

function MyPageBtnSVG() {
    const mypageMatch = useMatch('/mypage/:id')
    return (
        <svg
            className="w-8 h-8"
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
        >
            <path
                d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
                fill={mypageMatch ? 'black' : '#9F9F9F'}
            />
        </svg>
    )
}
function MainPageBtnSVG() {
    const mainMatch = useMatch('/main')
    return (
        <svg
            className="w-8 h-8"
            width="29"
            height="33"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
        >
            <path
                d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
                fill={mainMatch ? 'black' : '#9F9F9F'}
            />
        </svg>
    )
}
function WriteBtnSVG() {
    const writepageMatch = useMatch('/write')
    return (
        <svg
            className="w-8 h-8"
            width="32"
            height="32"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
        >
            <path
                d="M368.4 18.3L312.7 74.1 437.9 199.3l55.7-55.7c21.9-21.9 21.9-57.3 0-79.2L447.6 18.3c-21.9-21.9-57.3-21.9-79.2 0zM288 94.6l-9.2 2.8L134.7 140.6c-19.9 6-35.7 21.2-42.3 41L3.8 445.8c-3.8 11.3-1 23.9 7.3 32.4L164.7 324.7c-3-6.3-4.7-13.3-4.7-20.7c0-26.5 21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48c-7.4 0-14.4-1.7-20.7-4.7L33.7 500.9c8.6 8.3 21.1 11.2 32.4 7.3l264.3-88.6c19.7-6.6 35-22.4 41-42.3l43.2-144.1 2.8-9.2L288 94.6z"
                fill={writepageMatch ? 'black' : '#9F9F9F'}
            />
        </svg>
    )
}
