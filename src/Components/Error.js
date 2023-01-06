import { useState } from "react";

function Error(props){
    function renderError(){
        let {error} = props;

        
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
            {/* <form onSubmit={handleSubmit}>
                <input type="text" name="Email" onChange={handelInput} />
                <input type="password" name="Pass" onChange={handelInput} />
                <button type="submit" > Login</button>
            </form> */}
            {renderError()}
        </ul>
    )
}
export default Error;
