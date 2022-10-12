import React, { useEffect, useState } from 'react';

const Counter = () => {


    const [count , setCount ] = useState(0);

    useEffect(()=>{
        document.title = `Button ${count} clicked`
    })
    return (
        <div>
            <p>
                Button {count} times clicked
            </p>

            <button onClick={()=> setCount(count+1)}>Click</button>
        </div>
    );
}


export default Counter;
