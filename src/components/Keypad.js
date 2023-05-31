// Code Keypad Component Here
import React from 'react';

function Keypad (){
    return (
        <div>
            <input onChange={showPassword} type="password" />
        </div>
    )
}
function showPassword(event){
    console.log('Entering password...')
}

export default Keypad;