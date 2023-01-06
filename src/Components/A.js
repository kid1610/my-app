import { useEffect, useState } from 'react';
import axios from 'axios';
import B from './B';
function A(){
    const [data, setData]   = useState([])
    useEffect(()=> {
        axios.request("https://jsonplaceholder.typicode.com/users")
        .then(res =>{
            setData(res.data[7])
        })
        .catch(error => console.log(error))
    }, [])
    console.log(data)
    return (
        <B data={data} />
    )
}
export default A;