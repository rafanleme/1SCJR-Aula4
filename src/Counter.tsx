import React from "react";

interface CounterProps {
    initialValue?: number;
    handleClick: () => void;
    children: React.ReactElement
}

export const Counter = ({
    initialValue = 0,
    handleClick,
    children
}: CounterProps) => {

    // const initialValue = props.initialValue || 0;

    return (
        <>
            <div>
                Contador {initialValue}
                <button onClick={handleClick}>Enviar</button>
            </div>
            {children}
        </>
    );
}