// function hello(){
//     alert("Hello World!");
//     console.log("Hello World!");
// }

// export default function EventDemo(){
//     return <button onClick={hello} onMouseMove={() => console.log("Boop!")}>Event Demo</button>
// }


import { useState } from "react";


export default function EventDemo(){
    const [counter, setCounter] = useState(0);

    return <button onMouseEnter={() => {
            setCounter(counter + 1)
            setCounter(counter + 2)
            setCounter(counter + 3)
        }
    }>Event Demo {counter}</button>
}