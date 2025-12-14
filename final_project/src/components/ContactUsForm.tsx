import { useState } from 'react';

export default function Footer() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleContactUsSubmit(event: React.FormEvent) {
    event.preventDefault();

    setName('');
    setEmail('');
    setMessage('');
    setSubmitted(true);
  }

  return (
    <>
      {submitted && (
        <div className='toast align-items-center text-bg-success border-0 show custom-toast'>
          <div className='d-flex'>
            <div className='toast-body'>Thank you for the submission!</div>
            <button type='button' className='btn-close btn-close-white me-2 m-auto' onClick={() => setSubmitted(false)}></button>
          </div>
        </div>
      )}
      <div className='card'>
        <div className='card-body'>
          <h4 className='card-title'>Contact Us!</h4>
          <form onSubmit={handleContactUsSubmit} className='mt-4'>
            <div className='mb-3'>
              <label htmlFor='nameInput' className='form-label'>
                Name
              </label>
              <input type='text' className='form-control' id='nameInput' placeholder='Your name' value={name} onChange={(e) => setName(e.target.value)} required />
            </div>

            <div className='mb-3'>
              <label htmlFor='emailInput' className='form-label'>
                Email address
              </label>
              <input type='email' className='form-control' id='emailInput' placeholder='name@example.com' value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>

            <div className='mb-3'>
              <label htmlFor='messageInput' className='form-label'>
                Message
              </label>
              <textarea className='form-control' id='messageInput' rows={3} value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
            </div>

            <button type='submit' className='btn btn-primary w-15'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
