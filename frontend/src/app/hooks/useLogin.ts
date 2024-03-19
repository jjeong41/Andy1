import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { kakaoLogin } from "../api/kakao";
import { KakaoAuth, LoginResponse } from "../_models/login.interface";

export const useLogin = (data: KakaoAuth) => {
    const router = useRouter();
    const query = useQuery<LoginResponse>({
        queryKey:["user"],
        queryFn:()=>kakaoLogin(data),
    });
    useEffect(()=>{
        if(query.data){
            router.push("/");
        }

    },[data]);

    useEffect(()=>{
        if(query.error){
            router.push("/login/error");
        }
    },[query.error]);
    
    return query;
}