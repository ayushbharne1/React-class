import React, { useState } from 'react';

const Sep24 = () => {
    // Non-parameterized function that returns a JSX element
    const infoo = () => {
        return <h2>hello</h2>; // Renders an <h2> tag with "hello"
    };

    // State hook to manage 'userinfo', initialized with "hello0000000"
    const [userinfo, setuserinfo] = useState("hello0000000");

    // Function to log a message to the console
    const info = () => {
        console.log("this is info");
    };

    // Function that takes an argument and logs it to the console
    const takeInfo = (info) => {
        console.log(info);
    };

    return (
        <div>
            <h1>App.jsx</h1>

            {/* Calling infoo() function directly which returns a JSX element  */}
            <h2>{infoo()}</h2>

            {/* Button to call the info() function when clicked */}
            <button onClick={info}>click me!</button>

            {/* Button to call takeInfo() with an argument when clicked */}
            <button onClick={() => takeInfo("this is second info")}>Print me!</button>

            {/* Display current value of 'userinfo' */}
            <h2>{userinfo}</h2>

            {/* Button to change the value of 'userinfo' using setuserinfo */}
            <button onClick={() => setuserinfo("sadjfjo")}>change text</button>
        </div>
    );
};

export default Sep24;
