import { useState } from "react"
import LoginButton from "./Loginn"
import LogoutButton from "./Logout"

function Toogle() {
    const [isToogle, setIsToogle] = useState(false)
    function handleLoginClick(){
        setIsToogle(!isToogle)
    }
    const handleLogoutClick = () =>{
        setIsToogle(!isToogle)
    }
    function renderButton(){
        if(isToogle){
            return <LoginButton onClick={handleLogoutClick} />
        }
            return<LogoutButton onClick={handleLoginClick} />


    }
    return(
    <div>
        {renderButton()}
    </div>
    )
}
export default Toogle;
