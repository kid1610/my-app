import { useState } from "react";
import Error from "./Error";

    function Login1(props){
        const [input, setInput] = useState({
            email:'',
            password:''            
        })
    const [error, setError] = useState({})
    const handleInput =(e) =>{
        const nameInput = e.target.name
        const value = e.target.value
        setInput(state => ({...state, [nameInput]:value}))
    }
    const handleSubmit =(e) =>{
        e.preventDefault()
       
        let errorSubmit = {}
        let flag = true

        if(input.email ==''){
            errorSubmit.email ='Vui long nhap mail'
            flag = false
        }


        if(input.password ==''){
            errorSubmit.pass ='Vui long nhap password'
            flag = false
        }
        
        if(!flag){
            setError(errorSubmit)
        }else{
            setError("")
            alert('OK')
        }
    }
    console.log(error)

    return(
        <div>
            <Error error={error} />
            <form onSubmit={handleSubmit}>
                <input type="text" name="email" onChange={handleInput} />
                <input type="password" name="password" onChange={handleInput} /> <br/>
                <button type="submit" > Login</button>
            </form>
        </div>
    )


    }
export default Login1;    