import { useState } from "react";
function MutipleInputs(props) {
    const [isGoing, setIsgoing] = useState(false)
    const [guest, setGuest] = useState(2)
    function renderList(e){
        const target = e.target
        if(target.type ==='checkbox'){
            setIsgoing(target.checkbox)
        }
        else{
            setGuest(target.value)
        }
    }    


    return(
        <form>
            <lable>Is going:
                <input
                name = "isgoing"
                type = "checkbox"
                checked = {isGoing}
                onChange = {renderList}
                />
            </lable>
            <p></p>

            <lable>Guest:
                <input
                name = "guest"
                type = "number"
                checked = {guest}
                onChange = {renderList}
                />
            </lable>
        </form>
    )
}
export default MutipleInputs;