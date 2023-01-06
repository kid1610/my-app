import { useState } from "react"
import { useSearchParams } from "react-router-dom"

function Warning(props) {
    if(!props.warning){
        return null    
    }
    return(
        <div>Warning !</div>
    )

}
function Warns(props) {
    const [showWarning, setShowWarning] = useState(true)

    function handelToogleClick(){
        setShowWarning(!showWarning)
        
    }

    return(
        <>
            <Warning warning = {showWarning}>
            </Warning>
            <button onClick={handelToogleClick}>
                    {showWarning ? "Hide" : "Show"}
            </button>
        </>
    )
}
export default Warns;