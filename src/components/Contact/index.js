
import React, { useState } from 'react'
import { validateEmail } from '../../utils/helpers';


function ContactForm() {

    const [formState, setFormData] = useState({ name: '', email: '', message: '' });
    const {name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(event) {
        if (event.target.name === "email") {
          const isValid = validateEmail(event.target.value);
          console.log(isValid);
          if (!isValid) {
            setErrorMessage("Your email is invalid.");
          } else {
            setErrorMessage("");
          }
        } else {
          if (!event.target.value.length) {
            setErrorMessage(`${event.target.name} is required.`);
          } else {
            setErrorMessage("");
          }
        }
        if (!errorMessage) {
          setFormData({
            ...formState,
            [event.target.name]: event.target.value,
          });
        }

    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(formState)
    }

    return (
      <section>
        <h1 data-testid='contact-me'>Contact Me</h1>
        <form id="contact-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              defaultValue={name}
              onBlur={handleChange}
            ></input>
          </div>
          <div>
            <label htmlFor="email">Email address:</label>
            <input
              type="email"
              name="email"
              defaultValue={email}
              onBlur={handleChange}
            ></input>
          </div>
          <div>
            <label htmlFor="message">message:</label>
            <textarea
              name="message"
              rows="5"
              defaultValue={message}
              onBlur={handleChange}
            ></textarea>
          </div>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <button data-testid="submit-btn" type="submit">Submit</button>
        </form>
      </section>
    );

}

export default ContactForm;