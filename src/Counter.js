import React, {useState} from 'react';
function Counter(){
    const [count, setCount] = useState(0); //count = state variable

    const increase = () =>{
        setCount(count +1);
    };
    const decrease =()=>{
        setCount(count -1);
    };
    const reset =()=>{
        setCount(0);
    };
    
    return(
        <div style={{textAlign: 'center',marginTop:'2rem'}}>
            <h2>Counter App</h2>
            <h3>Count: {count}</h3>
            <button onClick={increase}>+Increase</button>
            <button onClick={decrease} style={{marginLeft:'10px'}}>-Decrease</button>
            <button onClick={reset} style={{marginLeft:'10px'}}>Reset</button>
        </div>
    );
}

export default Counter;
