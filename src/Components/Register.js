import { useState } from 'react';
import Error from './Error';


function Register(props){
    const [input, setInput] = useState({
        email:'',
        password:''

    })
    const [getSex, setSex] = useState("")
    const [error, setError] = useState({})
    let [getFile, setFile] = useState("")
    
    const handleInput =(e) =>{
        const nameInput = e.target.name
        const value = e.target.value
    setInput(state => ({...state, [nameInput]:value}))
    }
    
    const xulySex = (e) =>{    
        e.preventDefault()
        setSex(e.target.value)
    }

    const xulyfile =(event) =>{
        setFile(event.target.files)
        

    }


    const handleSubmit =(e) =>{
    e.preventDefault()
   
    let errorSubmit = {}
    let flag = true

    if(input.email ==''){
        errorSubmit.email ='Vui long nhap mail'
        flag = false
    }
    else{
        let testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i
        testEmail.test(input.email)
        if(!testEmail.test(input.email)){
            errorSubmit.email =('Email Invalid!!!!')
        }
        else{
            errorSubmit.email =('')
        }
    }

    if(getFile ==''){
        errorSubmit.setFile ='Vui long chon file Anh'
        flag = false
    }else{
        console.log(getFile[0]["size"])
        if(getFile[0]["size"] > 1024*1024){
            errorSubmit.setFile='Buc anh dung luong qua lon!'
        }
        else{
            errorSubmit.setFile=''
        }
      

    }

    if(input.password ===''){
        errorSubmit.password ='Vui long nhap password'
        flag = false
    }

    if(getSex ===''){
        errorSubmit.setSex ='Vui long chon gioi tinh'
        flag = false
    }
    
    if(!flag){
        setError(errorSubmit)
    }else{
        setError("")
        alert('OK')
    }
}




function renderData(){
    const arr=[
        {
            "id": "",
            "name": "Vui long chon",
        },
        {
            "id": 1,
            "name": "Male",
        },
        {
            "id": 2,
            "name": "Female",
        }
    ]
    if(arr.length > 0){
    return arr.map((value, key) => {
        return(
             <option value={value.id}>{value.name}</option>
        )
        })
    }   
    
}
return(
    <div>
        <Error error={error} />
        <form onSubmit={handleSubmit}>
            <input type="text" name="email" onChange={handleInput} />
            <input type="password" name="password" onChange={handleInput} /> <br/>
            <input type="file" name="avatar" onChange={xulyfile} accept=".jpg, .png, .jpeg, .PNG, .JPG" multiple/> <br/>
            <select value = {getSex} onChange = {xulySex} > {renderData()}</select>
            
            <button type="submit" >Register</button>
        </form>
    </div>
)

}
export default Register;