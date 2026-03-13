import{useNavigate} from 'react-router-dom'
function Login(){
    const navigate=useNavigate()
    const handleSubmit = (e)=>{
        e.preventDefault()
        const hi={}
        hi.name=e.target.userid.value
        hi.pass=e.target.passc.value
        sessionStorage.setItem("user",hi)
        navigate("/dashboard")
    }
    return(
        <form className="login-style" onSubmit={handleSubmit}>
            <input name="userid" type="text" placeholder="UserId"/>
            <input id="passc" type="text" placeholder="passcode"></input>
            <button type="submit">Login</button>
        </form>
    )
}export default Login