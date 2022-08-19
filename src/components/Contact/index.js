
import React, { useState } from 'react'


function ContactForm() {

    const [formState, setFormData] = useState({ name: '', email: '', message: '' });
    const {name, email, message } = formState;

    function handleChange(event) {
        setFormData({...formState, [event.target.name]: event.target.value })
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(formState)
    }

    return (
        <section>
            <h1>Contact Me</h1>
            <form id='contact-form' onSubmit={ handleSubmit }>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' name='name' defaultValue={ name } onChange={ handleChange }></input>
                </div>
                <div>
                    <label htmlFor='email'>Email address:</label>
                    <input type='email' name='email' defaultValue={ email } onChange={ handleChange }></input>
                </div>
                <div>
                    <label htmlFor='message'>message:</label>
                    <textarea name='message' rows='5' defaultValue={ message } onChange={ handleChange } ></textarea>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </section>
    )

}

export default ContactForm;