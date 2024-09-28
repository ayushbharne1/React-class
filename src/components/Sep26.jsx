import React from 'react'

const Sep26 = () => {

    const submitHandler = (e)=> {
        e.preventDefault();
        // destructuring
        const {firstname , lastname , username , email, contact} = e.target;
        const user = {
            username: username.value,
            firstname: firstname.value,
            lastname: lastname.value,
            email: email.value,
            contact: contact.value
        }
        console.log(user);
    }
  return (
    <>
    <div>
        <h1>form</h1>
        <form onSubmit={submitHandler}>
            <input type="text" placeholder='firstname' name='firstname' />
            <input type="text" placeholder='lastname' name='lastname' />
            <input type="text" placeholder='username' name='username' />
            <input type="email" placeholder='email' name='email' />
            <input type="text" placeholder='contact' name='contact' />
            <button type='submit' >Submit</button>
        </form>
    </div>
    </>
  )
}

export default Sep26