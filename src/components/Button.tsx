import { useState } from "react";

export function Button() {
    const [counter, setCounter] = useState(0) //Imutavel, se precisar criar um novo estado

    function increment() {
        setCounter(counter + 1);
        console.log(counter);
    }

    return (
        <button onClick={increment}>
            {counter}
        </button>
     )  
}
