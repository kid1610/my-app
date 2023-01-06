import { useEffect, useState } from 'react';
function D(props){
    let data = props.data

    function renderData(){
        if(data.length > 0){
            return data.map((value, key) => {
                return(
                    <li key={key}>
                        <p>{value.id}</p>
                        <p>{value.name}</p>
                        <p>{value.address.street}</p>
                        <p>{value.phone}</p>
                        <p>{value.company.name}</p>
                    </li>
                )
            })
        }
    }
    return (
        <ul>{renderData()}</ul>
    )
}
export default D;