import tw from "tailwind-styled-components";

export const Wrapper = tw.div`
flex
justify-center
items-center
`

export const ProfileWrapper = tw.div`
flex
justify-center
items-center
h-[100vh]
`

// flex-wrap

// 프로필 입력폼
export const Form = tw.form`
flex
flex-col
px-5
ml-10
`

export const Label = tw.div`
mt-2
mr-10
font-bold
`

export const Input = tw.input`
ml-auto
h-full
w-[250px]
rounded-[7px]
bg-[#FFFFFF]
px-3
py-2.5
font-sans
text-sm 
font-normal 
text-black
outline-0
transition-all
placeholder-shown:border 
placeholder-shown:border-blue-gray-200 
placeholder-shown:border-blue-gray-200 
focus:border-gray-900 
focus:outline-0 
disabled:border-0 
disabled:bg-blue-gray-50 
`

export const InputBirth = tw.input`
w-[250px]
ml-auto
h-full
w-[250px]
rounded-[7px]
bg-[#FFFFFF]
px-3
py-2.5
font-sans 
text-sm
font-normal
text-black
outline-0
transition-all
focus:border-gray-900
focus:outline-0 
disabled:border-0 
disabled:bg-blue-gray-50
`

export const Name = tw.div`
mb-3
flex
flex-row
`

export const Nickname = tw.div`
mb-3
flex
flex-row
`

export const Birth = tw.div`
mb-3
flex
flex-row
`

export const Gender = tw.div`
flex
justify-between
`

export const Btn = tw.div`
mb-3
flex
w-[250px]
text-black
justify-between
`

export const BtnLabel = tw.label`
bg-[#FFFFFF]
rounded-[5px]
w-[120px]
mb-3
px-3
py-2.5
hover:bg-[#EEA241]
hover:text-white
focus:bg-[#EEA241]
focus:text-white
cursor-pointer
font-bold
text-[#EEA241]
`

export const SubmitBtn = tw.button`
font-bold
h-[50px]
rounded-[10px]
bg-[#EEA241]
text-white
py-2.5
hover:bg-[#f08a07]
`

// 프로필 이미지
export const ProfileImage = tw.div`
rounded-[100%]
w-[200px]
h-[200px]
shadow-md
flex
justify-center
align-center
relative
`

export const ProfileChange = tw.div`
bg-[rgba(0,0,0,0.5)]
rounded-[100%]
w-[200px]
h-[200px]
shadow-md
flex
justify-center
items-center
absolute
top-0
left-0
cursor-pointer
`