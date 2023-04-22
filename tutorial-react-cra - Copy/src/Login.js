import { useNavigate } from "react-router-dom"

export default function Login (){
    const navigate = useNavigate()
    function LoginHandler(event){
        event.preventDefault()
       const checkLogin = true
       if(checkLogin){
        navigate('/dashboard')
       }
    }
    return(
        <form onSubmit={LoginHandler}>
            <input type="text" name="username" />
            <input type="password" name="password" />
            <button>Login</button>
        </form>
    )
}