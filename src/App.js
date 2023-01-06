
import { useState } from "react";


// cau truc 1 component 
function App(props){

  const [getEmail, setEmail] = useState("")
  const [getPass, setPass] = useState("")
  const [getContent, setContent] = useState("")
  const [getInput, setInput] = useState("")

  const [errE, setErrE] = useState("")
  const [errP, setErrP] = useState("")
  const [errC, setErrC] = useState("")
  const [errI, setErrI] = useState("")

  function thaydoiE(e){
    // e.target: giong attr lay gia tri cua thuoc tinh 
    setEmail(e.target.value)
  }

  function thaydoiP(e){
    // e.target: giong attr lay gia tri cua thuoc tinh 
    setPass(e.target.value)
  }

  function handelContent(e){
    setContent(e.target.value)
  }

  function handelInput(e){
    setInput(e.target.value)
  }

  function handelSubmit(e){
    e.preventDefault()
    if(getContent == ""){
      setErrC("Vui long nhap content")
    }
    else{
      setErrC("")
    }
  }
  
  function handelSubmit1(e){
    e.preventDefault()
    if(getInput ==""){
      setErrI("Vui long chon!")
    }
    else{
      setErrI("")
    }
  }

  function xulyForm(e){
    e.preventDefault();
    let x = true;
    if(getEmail == ""){
      setErrE("vui long nhap email")
      x = false
    }else{
      setErrE("")
    }

    if(getPass == ""){
      setErrP("vui long nhap passs")
      x = false
    }else{
      setErrP("")
    }

    if(x == true){
      alert("ok")
    }
  }
  return (  
    // hien thi html thoi 
    <div>
       <h1>xu ly form: THUAT TOAN 3 NGOI (if else ngan gon)</h1>
       <form onSubmit={xulyForm}>
          <input type="text" onChange={thaydoiE} value={getEmail}/>
          <p>{errE}</p>

          <input type="text" onChange={thaydoiP} value={getPass}/>
          <p>{errP}</p>


         <button type="submit">click</button>
       </form>
       <form onSubmit={handelSubmit}>
            <textarea onChange={handelContent}>{getContent}</textarea>
            <p>{errC}</p>
            <button type="submit">click</button>
       </form>

       <form onSubmit={handelSubmit1}>
            <select value = {getInput} onChange = {handelInput}  >
                <option value="">Gioi tinh</option>
                <option value="1">male</option>
                <option value="2">female</option>
            </select>
            <p>{errI}</p>
            <button type="submit">click</button>
       </form>
     
    </div>

    

    // xem va code lai ,
    // trong bai 13 co 2 the select , textarea , xem 2 cai nay xu ly loi 
    // sau do tao 1 form hoanf hinh: input, select, textarea, viet ham xu ly 
    // ok het thi thong thanh cong nhu vdu tren
  
   
  );
}
export default App;