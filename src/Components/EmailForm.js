import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const EmailForm = ({ backgroundColor, setDisplayEmailForm }) => {
  // INPUT STATES
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3xwvome', 'template_wg0cs5r', form.current, 'RaPyrke9KNUq-EDUY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  }

  const handleButtonClick = (e) => {
    e.preventDefault();

    setName('');
    setEmail('');
    setMessage('');

    sendEmail(e);
    alert('Email has been sent!');
    setDisplayEmailForm(false);
  }

  return (
    <div className='email-form-container'>
      <form
        ref={form}
        onSubmit={sendEmail}
        className='email-form'
      >
        <h1 className='email-contact-me'>Contact Me</h1>
        <label>Name</label>
        <input
          required
          className='email-input'
          type="text"
          name="user_name"
          style={{ background: `var(${backgroundColor[0]})`}}
          value={name}
          onChange={(e) => {
            handleInputChange(e, setName)
          }}
        />
        <label>Email</label>
        <input
          required
          className='email-input'
          type="email"
          name="user_email"
          style={{ background: `var(${backgroundColor[0]})`}}
          value={email}
          onChange={(e) => {
            handleInputChange(e, setEmail)
          }}
        />
        <label>Message</label>
        <textarea
          required
          className='email-input'
          id='email-textarea'
          name="message"
          style={{ background: `var(${backgroundColor[0]})`}}
          value={message}
          onChange={(e) => {
            handleInputChange(e, setMessage)
          }}
        />
        <input
          className='email-send-btn'
          type="submit"
          value="Send"
          onClick={handleButtonClick}
        />
      </form>
    </div>
  );
}
 
export default EmailForm;