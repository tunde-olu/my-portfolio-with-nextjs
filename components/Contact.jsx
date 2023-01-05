import {useEffect, useState} from 'react';
import Notification from './Notification';

const postInput = async (input) => {
  const res = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(input),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }
  return data;
};

const Contact = () => {
  const [userInput, setuserInput] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [requestStatus, setRequestStatus] = useState(); // pending success error
  const [requestError, setRequestError] = useState();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      setRequestStatus('pending');
      const data = await postInput(userInput);
      setRequestStatus('success');
      setuserInput({name: '', email: '', message: ''});
    } catch (error) {
      setRequestStatus('error');
      setRequestError(error.message);
    }
  };

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [requestStatus]);

  let notification;
  if (requestStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending message...',
      message: 'Your message is on its way!',
    };
  }
  if (requestStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Thanks!',
      message: 'The form was submitted successfully.',
    };
  }
  if (requestStatus === 'error') {
    notification = {
      status: 'error',
      title: 'Error',
      message: requestError || 'Something went wrong',
    };
  }

  return (
    <section
      name='contact'
      className='w-full min-h-screen bg-gradient-to-b from-black to-[#111] p-4 text-gray-100'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full mb-[10rem]'>
        <div className='pb-8 pt-[5rem]'>
          <h2 className='text-4xl font-bold border-b-4 border-gray-500 inline pb-2'>
            Contact
          </h2>
          <p className='py-1 mt-16 text-gray-300'>
            Fill and submit the form below to get in touch with me
          </p>
        </div>
        <div>
          <form
            // action='https://formspree.io/f/xpznvvka'
            // method='POST'
            onSubmit={submitHandler}
            className='flex flex-col max-w-lg w-full gap-y-4'>
            <input
              type='text'
              name='name'
              value={userInput.name}
              onChange={(e) =>
                setuserInput({...userInput, name: e.target.value})
              }
              placeholder='Enter your name'
              className='p-2 bg-transparent border-2 rounded-md text-gray-100 focus:outline-none border-gray-600'
              required
            />
            <input
              type='email'
              name='email'
              value={userInput.email}
              onChange={(e) =>
                setuserInput({...userInput, email: e.target.value})
              }
              placeholder='Enter your email'
              className='p-2 bg-transparent border-2 rounded-md border-gray-600 text-gray-100 focus:outline-none'
              required
            />
            <textarea
              name='message'
              value={userInput.message}
              onChange={(e) =>
                setuserInput({...userInput, message: e.target.value})
              }
              placeholder='Enter your message'
              rows='10'
              className='p-2 bg-transparent border-2 border-gray-600 rounded-md text-gray-100 focus:outline-none'
              required></textarea>
            <button
              type='submit'
              className='text-gray-100 bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
              Let's talk
            </button>
          </form>
        </div>
      </div>
      {notification && <Notification {...notification} />}
    </section>
  );
};
export default Contact;
