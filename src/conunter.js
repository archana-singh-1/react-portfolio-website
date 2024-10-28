import { useState } from "react";

function Couner(){
    const [count,setCount]=useState(0)
    function handleClick(){
        setCount(count+1)
    }
    return(
        <button onClick={handleClick}>{count}</button>
    )

}
export default Couner;