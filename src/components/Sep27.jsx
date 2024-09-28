import React, { useState } from 'react';

const Sep27 = () => {
    // State for managing the username input
    const [username, setusername] = useState("");

    // State for showing an error if the username length is less than 5
    const [error, seterror] = useState(false);

    // State for managing the selected gender, defaulting to "others"
    const [gender, setgender] = useState("others");

    // Form submission handler
    const submitHandler = (e) => {
        e.preventDefault(); // Prevents form from refreshing the page
        console.log(gender); // Logs the selected gender
    };

    return (
        <div>
            {/* Form for user input */}
            <form onSubmit={submitHandler}>
                {/* Input field for username with validation */}
                <input
                    // Checks input length on every input change
                    onInput={(e) => e.target.value.length < 5 ? seterror(true) : seterror(false)}
                    // Updates the 'username' state as user types
                    onChange={(e) => setusername(e.target.value)}
                    value={username} // Controlled input field
                    type="text"
                    name="username"
                    placeholder="username"
                />
                {/* Displays error message if username length is less than 5 */}
                {error && (
                    <p>Length must be greater than 5</p>
                )}
                <br />

                {/* Radio button for "others" gender */}
                <input
                    type="radio"
                    name="gender"
                    onChange={(e) => setgender(e.target.value)} // Updates gender state when changed
                    checked={gender === "others" ? true : false} // Checks if "others" is selected
                    defaultValue="others"
                /> 
                others <br />

                {/* Radio button for "male" gender */}
                <input
                    type="radio"
                    name="gender"
                    onChange={(e) => setgender(e.target.value)} // Updates gender state when changed
                    checked={gender === "male" ? true : false} // Checks if "male" is selected
                    defaultValue="male"
                /> 
                male <br />

                {/* Radio button for "female" gender */}
                <input
                    type="radio"
                    name="gender"
                    onChange={(e) => setgender(e.target.value)} // Updates gender state when changed
                    checked={gender === "female" ? true : false} // Checks if "female" is selected
                    defaultValue="female"
                /> 
                female <br />

                
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Sep27;
