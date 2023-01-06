import { useEffect, useState } from 'react';
import axios from 'axios';
import D from './D';
function C(){
    const [data, setData]   = useState([])
    useEffect(()=> {
        axios.request("https://jsonplaceholder.typicode.com/users")
        .then(res =>{
            setData(res.data)
        })
        .catch(error => console.log(error))
    }, [])
    return (
        <D data={data} />
    )
}
export default C;