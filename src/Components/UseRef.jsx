import React, { useRef } from 'react';

function UseRef() {
    let inputRef = useRef(null);

    function handleInput() {
        inputRef.current.value = "React UseRef";
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "Grey";
    }
    
    return (
        <div>
            <input type="text" name="text" placeholder="Put Me" ref={inputRef} />
            <button onClick={handleInput}>Handle Input</button>
        </div>
    )
}

export default UseRef;