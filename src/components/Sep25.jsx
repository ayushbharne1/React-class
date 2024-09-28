import React, { useState } from 'react';

const Sep25 = () => {
    // State to manage the 'username' input value
    const [username, setusername] = useState('');

    // State to keep track of the current time
    const [time, settime] = useState(new Date().toLocaleTimeString());

    // Function to update the time every second
    setInterval(() => {
        settime(new Date().toLocaleTimeString());
    }, 1000);

    // Handler for form submission
    const submitHandler = (e) => {
        e.preventDefault(); // Prevents the default form submission behavior
        console.log(e.target.username.value); // Logs the value of the 'username' input
        // Alternative way to access the first input field value:
        // console.log(e.target[0].value);
    };

    return (
        <div>
            {/* Displays the current time, updated every second */}
            <h1>{time}</h1>

            {/* Form for submitting the username */}
            <form onSubmit={submitHandler}>
                {/* Input field for the username, with its value controlled by state */}
                <input 
                    onChange={(e) => setusername(e.target.value)} // Updates 'username' on input change
                    type="text" 
                    placeholder="username" 
                    name="username"  // Name of the input field for form submission
                    value={username} // Value tied to the 'username' state
                />
                {/* Submit button */}
                <button type="submit">submit</button>
            </form>
        </div>
    );
};

export default Sep25;
