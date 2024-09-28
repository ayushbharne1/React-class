import React, { useState } from 'react';

const Twoway_binding = () => {
    // State to store the value of the first input field (username)
    const [username, setusername] = useState('');

    // State to store the value of the second input field (userrr)
    const [userrr, setuserrr] = useState('');

    // Form submission handler to prevent default form behavior
    const submitHandler = (e) => {
        e.preventDefault(); // Prevents page from refreshing
    };

    // Change handler for the first input field (username)
    const changeHandler = (e) => {
        setusername(e.target.value); // Updates the 'username' state
    };

    // Logs the value of 'userrr' when it changes
    const userrrChangeHandler = (e) => {
        setuserrr(e.target.value); // Updates the 'userrr' state
        console.log(e.target.value); // Logs the new value of 'userrr'
    };

    return (
        <div>
            {/* Form with two input fields and a submit button */}
            <form onSubmit={submitHandler}>
                {/* First input field with its value controlled by 'username' */}
                <input
                    onChange={changeHandler} // Calls changeHandler when input changes
                    type="text"
                    placeholder="username"
                    name="username"
                    value={username} // Controlled component, tied to 'username' state
                />
                or
                {/* Second input field with its value controlled by 'userrr' */}
                <input
                    onChange={userrrChangeHandler} // Calls userrrChangeHandler when input changes
                    type="text"
                    name="userrr"
                    placeholder="userrr"
                    value={userrr} // Controlled component, tied to 'userrr' state
                />
                {/* Submit button */}
                <button>submit</button>
            </form>
        </div>
    );
};

export default Twoway_binding;
