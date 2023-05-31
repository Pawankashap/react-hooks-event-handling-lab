// Code EyesOnMe Component Here
import React from 'react';


function EyesOnMe (){
    return (
        <div>
            <button onFocus={setonFocus} onBlur={setonBlur} >Eyes on me</button>
        </div>
    )
}

function setonFocus(){
    console.log("Good!")
}

function setonBlur(){
    console.log("Hey! Eyes on me!")
}

export default EyesOnMe;
