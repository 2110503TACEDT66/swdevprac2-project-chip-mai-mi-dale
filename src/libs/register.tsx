import { RegisterJson, Role } from "../../interfaces";

export default async function Register(userRegisterData: RegisterJson, role: Role) {
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: userRegisterData.name, 
            tel: userRegisterData.tel,
            email: userRegisterData.email,
            password: userRegisterData.password,
            role: role.toString()
         })
    });

    if (!response.ok) {
        throw new Error("Failed to register")
    }

    // return success:boolean and token
    return await response.json();
}