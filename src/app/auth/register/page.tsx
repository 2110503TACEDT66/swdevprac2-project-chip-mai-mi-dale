"use client"
import { TextField } from "@mui/material"
import Register from "@/libs/register"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Role } from "../../../../interfaces"
import Link from "next/link"

export default function Page() {

    const router = useRouter()

    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [tel, setTel] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const onSubmit = async () => {
        if (name && email && tel && password) {
            const userRegisterJson = JSON.parse(JSON.stringify({name: name, email: email, tel: tel, password: password}))
            const res = await Register(userRegisterJson, Role.User);
                
                if (res.success) {
                    router.push("/")
                } else {
                    alert("Failed to register")
                }

        } else alert("Please fill in all fields")
    }

    return (
        <main className='w-[100%] h-[100vh] flex flex-col justify-center items-center bg-white'>
            <div className="bg-[#FFFFFF] shadow-lg rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-96 gap-4">
                <h1 className="text-2xl text-center mb-5 font-bold">Register</h1>
                <TextField id="name" label="name" variant="standard"  onChange={(e) => setName(e.target.value)} className="border border-gray-300 rounded-md w-full focus:outline-none focus:border-brown-500"/>
                <TextField id="email" label="email" variant="standard" type="email" onChange={(e) => setEmail(e.target.value)} className="border border-gray-300 rounded-md w-full focus:outline-none focus:border-brown-500"/>
                <TextField id="tel" label="tel" variant="standard" type="tel" onChange={(e) => setTel(e.target.value)} className="border border-gray-300 rounded-md w-full focus:outline-none focus:border-brown-500"/>
                <TextField id="password" label="password" variant="standard" type="password" onChange={(e) => setPassword(e.target.value)} className="border border-gray-300 rounded-md w-full focus:outline-none focus:border-brown-500"/>
                <button onClick={() => onSubmit()} className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-5">Register</button>
                <h2  className="mt-5 text-sm text-center">If you already have account <Link href={"/auth/signIn"} className="text-blue-600">Sign In</Link></h2>
            </div>
                
        </main>
    )
}