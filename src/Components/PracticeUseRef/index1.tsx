import { useEffect, useRef } from "react";

interface DemoUseRefProps { }

const DemoUseRef = ({ }: DemoUseRefProps) => {
    const inputRef = useRef<HTMLInputElement | null>(null)

    useEffect(() => {
        inputRef.current?.focus(); //automatically focus 
    }, []);
    return (
        <div>
            <input ref={inputRef} type="text" placeholder="type Somthing " />
        </div>
    )
};

export default DemoUseRef;