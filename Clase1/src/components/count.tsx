import { useState } from "react"


export const Counter = ({name}: {name: string}) => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => {setCount(count+1)}}> hola {name}</button>
        </div>
    )
}