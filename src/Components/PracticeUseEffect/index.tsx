import { useEffect, useState } from "react";

interface DemoProps { }

const Demo = ({ }: DemoProps) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      // The code that we want to run the code 
      console.log("the count is : ",count); // this Component did Mount 
      
      // Optional Return Function 
       return () =>{
        console.log("i am being clean up !"); // component will unMount mean Destroy 
       }

    }, [count]); // the dependency array // Component willUpdate 

    return (
        <div>
            <h1 className=" text-[22px] font-bold">Count : {count}</h1>
            <button className="mr-2 p-4 bg-red-500 rounded-lg" onClick={() => setCount(count > 0 ? count - 1 : 0)}>
                Decrement
            </button>
            <button className=" p-4 bg-green-500 rounded-lg" onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    )
};

export default Demo;