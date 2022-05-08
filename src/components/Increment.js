import {useState} from 'react';
export default function Increment() {
    const [countOne, setCountOne] = useState(0);
    const [countTwo, setCountTwo] = useState(0);
    return(
        <div>
            <h1>Count: {countOne}</h1>
            <button onClick={()=>{setCountOne(1+countOne)}}>Add 1</button>
            <h1>Count: {countTwo}</h1>
            <button onClick={()=>{setCountTwo(2+countTwo)}}>Add 2</button>
        </div>
    )
}