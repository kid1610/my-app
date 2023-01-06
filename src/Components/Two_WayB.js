import { useState } from 'react'


const course =[
    {
        id: 1,
        name: 'HTML, CSS'
    },
    {
        id: 2,
        name: 'JavaScript'
    },
    {
        id: 3,
        name: 'React Native'
    }
]
function Two_WayB(){
    const [checked, setChecked] = useState()

    console.log(checked)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const handleSubmit =() =>{
        
    }

    return(
        <div style={{padding: 100}}>
            {course.map(course => (
            <div key = {course.id}>
                <input
                type='radio'
                checked={checked === course.id}
                onChange={() => setChecked(course.id)}
                />
                {course.name}
            </div>
                
            ))}
            
            <button onClick={handleSubmit} > Register</button>
        
            
        </div>
    )
}
export default Two_WayB;