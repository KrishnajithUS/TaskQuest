import { LoginForm } from "../Components/Forms/LoginForm"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
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
    }, [])
    return (
        <div>
            <LoginForm />
        </div>
    )
}

export default Login
