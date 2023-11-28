import { useState } from 'react';

const EmailForm = ({ sendEmail }) => {
  const [emailInfo, setEmailInfo] = useState({
    to: '',
    subject: '',
    text: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmailInfo({...emailInfo, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(emailInfo);
  }

  return (
    <form onSubmit={handleSubmit}>
        <label>
            To:
            <input
              type="email"
              name="to"
              value={emailInfo.to}
              onChange={handleInputChange}
            />
        </label>
        <label>
            Subject:
            <input
              type="text"
              name="subject"
              value={emailInfo.subject}
              onChange={handleInputChange}
            />
        </label>
        <label>
            Message:
            <textarea
              name="text"
              value={emailInfo.text}
              onChange={handleInputChange}
              cols="30"
              rows="10" 
            />
        </label>
        <button type="submit">Send Email</button>
    </form>
  );
}
 
export default EmailForm;