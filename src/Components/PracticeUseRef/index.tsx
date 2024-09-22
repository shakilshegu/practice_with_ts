import { useRef, useState } from "react";

interface DemoRefProps { }

const DemoRef = ({}: DemoRefProps) => {

    const [count, setCount] = useState(0);
    const countRef = useRef(0)

    const handleIncrement = () => {
        setCount(count + 1)
        countRef.current++;

        console.log('State', count);
        console.log('ref:', countRef.current);
    }

    return (
        <div>
            <h1 className="font-bold">
                Count : {count} 
            </h1> {/* Count : {countRef.current} */}
            <button onClick={handleIncrement}>
                Increment
            </button>
        </div>

    )
};

export default DemoRef;