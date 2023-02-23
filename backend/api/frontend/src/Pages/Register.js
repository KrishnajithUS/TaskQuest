import { RegisterForm } from "../Components/Forms/RegisterForm"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


const Register = () => {
    const navigate = useNavigate()
    const data = JSON.parse(localStorage.getItem("userDetails"))
    const FAuth = Boolean(data?.is_admin)
    useEffect(() => {
        if (data != null) {
            if (FAuth) {
                navigate('/adminhome')
            } else {
                navigate('userprofile')
            }
        }
    },[])
    return (
        <div className="">
            <RegisterForm />
        </div>
    )
}

export default Register
