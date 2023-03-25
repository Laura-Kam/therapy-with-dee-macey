import { useState } from 'react';
import Layout from '../../comps/Layout';
import { MessageSchema } from '../../utils/MessageSchema';

const Contact = () => {
  const initialState = {
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  };

  const [formState, setFormState] = useState(initialState);
  const [errors, setErrors] = useState({});

  function handleFormChange(event) {
    const { name, value } = event.target;

    setFormState((oldState) => ({
      ...oldState,
      [name]: value,
    }));
  }

  async function sendMessage(message) {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });

    const data = await response.json();
    if (response.ok) {
      console.log('success:', data);
    } else {
      console.log('error:', data);
    }
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    const formData = MessageSchema.safeParse(formState);

    switch (formData.success) {
      case true:
        console.log('valid data');
        setErrors({});
        sendMessage(formData.data);
        break;
      case false:
        console.log('invalid data');
        const formattedErrors = formData.error.format();
        setErrors({
          name: formattedErrors.name?._errors[0] || undefined,
          email: formattedErrors.email?._errors[0] || undefined,
          phoneNumber: formattedErrors.phoneNumber?._errors[0] || undefined,
          message: formattedErrors.message?._errors[0] || undefined,
        });
        break;
    }
  }

  return (
    <Layout>
      <div
        style={{
          textAlign: 'center',
          margin: '0px',
          padding: '40px',
          backgroundColor: '#D6eadf',
        }}>
        <h1 style={{ fontWeight: 'bold', fontSize: '20px' }}>
          Contact Me
          <br></br>
          <span style={{ fontWeight: 'normal', fontSize: '20px' }}>Our first consultation is free</span>
          <br></br>
          <span style={{ fontSize: '17px', fontWeight: 'normal' }}>Let's start your journey</span>
        </h1>
        <div className='stack'>
          <img
            src='https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            alt='Image 1'
            className='rounded profile-image'
            style={{
              height: '170px',
              width: '200px',
              borderRadius: '50%',
              margin: '30px',
            }}
          />
        </div>

        <p style={{ textAlign: 'center', margin: '25px', padding: '20px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.{' '}
        </p>
      </div>
      <form style={{ margin: '30px' }} onSubmit={handleFormSubmit}>
        <div
          className='form-control, input-bordered'
          style={{
            width: '500px',
            margin: 'auto',
            backgroundColor: '##FFB6C1',
          }}>
          <label className='input-group input-group-vertical'>
            <span
              style={{
                width: '500px',
                margin: '11px',
                backgroundColor: '#FOFOFO',
              }}>
              Enter your First Name and Surname
            </span>
            <input
              type='text'
              className='input input-bordered'
              name='name'
              id='name'
              value={formState.name}
              onChange={handleFormChange}
            />
            {!!errors.name && <p>{errors.name}</p>}
          </label>
          <label className='input-group input-group-vertical'>
            <span style={{ width: '500px', margin: '11px' }}>Email address</span>
            <input
              type='text'
              className='input input-bordered'
              name='email'
              id='email'
              value={formState.email}
              onChange={handleFormChange}
            />
            {!!errors.email && <p>{errors.email}</p>}
          </label>
          <label className='input-group input-group-vertical'>
            <span style={{ width: '500px', margin: '11px' }}>Mobile Phone Number</span>
            <input
              type='text'
              className='input input-bordered'
              name='phoneNumber'
              id='phoneNumber'
              value={formState.phoneNumber}
              onChange={handleFormChange}
            />
            {!!errors.phoneNumber && <p>{errors.phoneNumber}</p>}
          </label>
          <label className='input-group input-group-vertical'>
            <span style={{ width: '500px', margin: '11px' }}>Type Your Message Below</span>
            <textarea
              type='text'
              className='input input-bordered'
              style={{ height: '250px', verticalAlign: 'top' }}
              name='message'
              id='message'
              value={formState.message}
              onChange={handleFormChange}
            />
            {!!errors.message && <p>{errors.message}</p>}
          </label>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </Layout>
  );
};

export default Contact;
