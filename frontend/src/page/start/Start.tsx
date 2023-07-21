import { useEffect } from 'react'
import { GoogleLogoSvg } from '@component/GoogleLogoSVG.tsx'
import { useNavigate } from 'react-router-dom'

export function Start() {
    // const [jwtState, setJwtState] = useState(false)
    const navigate = useNavigate()

    const jwtAuth = async () => {
        // TODO get jwt in google
        // TODO signin data fetching by jwt in backend server
        // return res
        const res = {
            state: Math.random() >= 0.5,
            user: {
                name: '',
                email: '',
            },
        }
        return res
    }

    const navigating = async () => {
        const res = await jwtAuth()
        if (res.state) {
            // TODO 로그인 정보 브라우저 등록 함수 작성
            navigate('/main')
        } else navigate('/signup')
    }

    useEffect(() => {
        // check token
        const signIn = false
        if (signIn) navigate('/main')
    }, [])

    return (
        <>
            {/* 배경 */}
            <div className="bg-[#D0956A] w-screen h-screen relative">
                {/* 하단영역 */}
                <footer className="absolute bottom-0 left-0 w-full h-[276px] bg-white rounded-t-[40px] ">
                    {/* 버튼 */}
                    <GoogleJWTBtn />
                    <button
                        className="relative top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[90%] h-[60px] border-2 rounded-[80px] border-[#BABABA] text-center text-xl font-bold items-center "
                        onClick={navigating}
                    >
                        로그인
                        <GoogleLogoSvg className="absolute top-1/2 translate-x-16 -translate-y-1/2" />
                    </button>
                </footer>
            </div>
        </>
    )
}
function GoogleJWTBtn() {
    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://accounts.google.com/gsi/client'
        script.async = true
        script.defer = true
        document.body.appendChild(script)
    })
    return (
        <div className="w-full h-20">
            <div
                id="g_id_onload"
                data-client_id="164605912125-jk0vlhp2q9trlsqtrc5n06nlsao95j29.apps.googleusercontent.com"
                data-login_uri="http://localhost:5173/signup"
                data-auto_prompt="false"
                data-context="use"
                data-ux_mode="redirect"
                data-auto_select="true"
                data-itp_support="true"
            ></div>
            <div
                className="g_id_signin"
                data-type="standard"
                data-shape="rectangular"
                data-theme="outline"
                data-text="signin_with"
                data-size="large"
                data-logo_alignment="left"
            ></div>
        </div>
    )
}
