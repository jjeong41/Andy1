'use client'
import tw from "tailwind-styled-components";
import kakao_logo from "../../../asset/_img/kakao_logo.png"
import { useLogin } from "../../../hooks/useLogin"

export const KakaoLogin = () => {
    const KAKAO_REST_API_KEY = process.env.NEXT_PUBLIC_API_KEY;
    // const KAKAO_REDIRECT_URL = process.env.SERVER_URL;
    const KAKAO_REDIRECT_URL = "https://localhost:3000/login/kakao"
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URL}&response_type=code`;

    const handleLogin = () => {
        window.location.href = KAKAO_AUTH_URL
    }

    let code = ""
    if (typeof window !== "undefined") {
        // 인가코드 받아오기
        const codeParam = new URL(window.location.href).searchParams.get("code");
        code = codeParam !== null ? codeParam : "";
    }

    useLogin({ code });

    return (
        <div>
            <LoginBtn onClick={handleLogin}>
                <Symbol>
                    <img src={kakao_logo.src} style={{ width: "24px", height: "21px", filter: "invert(0%) sepia(1%) saturate(4%) hue-rotate(25deg) brightness(98%) contrast(101%)" }}></img>
                </Symbol>
                <Label>카카오 로그인</Label>
            </LoginBtn>
        </div>
    )
}

const LoginBtn = tw.button`
w-[230px]
h-[60px]
absolute
left-[50%]
bottom-[15%]
transform
-translate-x-1/2
bg-[#FEE500]
rounded-[12px]
flex
flex-row
justify-center
items-center
border-[3px]
border-[white]
`

const Symbol = tw.div`
color-[#000000]
w-[18%]
`

const Label = tw.div`
text-black
opacity-[85%]
w-[65%]
font-bold
text-[16px]
`