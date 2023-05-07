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
        setErrors({});
        sendMessage(formData.data);
        break;
      case false:
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
      <div className='text-center m-0 p-20 bg-sky-100'>
        <div className='upperTextContactForm'>
          <h1 className='font-bold text-lg'>
            Contact Me
            <br />
            <span className='font-normal text-lg'>Your first consultation is free</span>
          </h1>
        </div>
        {/* formdiv */}
        <div className='w-full sm:w-1/3 md:w-1/2 lg:w-1/3 mx-auto bg-sky-100 form-control input-bordered mt-10 h-1/5'>
          <form onSubmit={handleFormSubmit}>
            <label className='input-group input-group-vertical'>
              <span className='w-auto m-5 h-50'>First Name and Surname</span>
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
              <span className='w-auto m-5 h-50'>Email Address</span>
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
              <span className='w-auto m-5 h-50'>Mobile Phone Number</span>
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
              <span className='w-auto m-5 h-3/5'>Type Your Message Below</span>
              <textarea
                type='text'
                className='input input-bordered h-60 resize-y'
                name='message'
                id='message'
                value={formState.message}
                onChange={handleFormChange}
              />
              {!!errors.message && <p>{errors.message}</p>}
            </label>

            <button
              className='bg-amber-50 border-2 border-black rounded-full py-2 px-4 inline-block text-black hover:text-black  hover:bg-amber-200 focus:outline-none focus:shadow-outline m-5'
              type='submit'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
