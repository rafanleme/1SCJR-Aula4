import React, { useState } from "react";

interface CounterProps {
    initialValue?: number;
    children: React.ReactElement
}

export const Counter = ({
    initialValue = 0,
    children
}: CounterProps) => {
    let [count, setCount] = useState(0);

    const increment = () => {
        setTimeout(() => {
            setCount(prevState => prevState + 1);
        }, 1000)
        console.log(count);
    }

    return (
        <>
            <div>
                Contador {count}
            </div>
            <br />
            <button onClick={() => { }}>-</button>
            <button onClick={increment}>+</button>
        </>
    );
}