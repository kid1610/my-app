import {useState} from 'react';

function Logintest(props){
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

    if(input.email ===''){
        errorSubmit.email ='Vui long nhap mail'
        flag = false
    }
    else{
        errorSubmit.email = ''
    }

    if(input.password ===''){
        errorSubmit.password ='Vui long nhap password'
        flag = false
    }
    else{
        errorSubmit.password = ''
    }
    
    if(flag === false){
        setError(errorSubmit)
    }
    else{
        setError('')
        alert('OK')
    }    
}
function renderError(){

    if(Object.keys(error).length > 0){
        return Object.keys(error).map((key, index) => {
            return(
                <li key={index}>
                    {error[key]}
                </li>
            )     
        })
    }
}
return(
    <ul>
        <form onSubmit={handleSubmit}>
            <input type="text" name="email" onChange={handleInput} />
            <input type="password" name="password" onChange={handleInput} />
            <button type="submit" > Login</button>
        </form>
        {renderError()}

    </ul>
)

}
export default Logintest;