import { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { CgSpinner } from 'react-icons/cg';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        form.reset();
        setSubmitted(true);
      } else {
        alert('Failed to send message');
      }
    } catch (error) {
      console.error('An error occurred while sending the message:', error);
      alert('Failed to send message');
    }

    setIsSubmitting(false);
  };

  return (
    <div className='w-full sm:w-96 md:w-full md:max-w-[60%] lg:w-[52rem] bg-white px-10 py-10 sm:rounded-xl flex flex-col items-center'>
      {!submitted && (
        <>
          <div className='text-center md:w-72'>
            <span className='text-slate-700 text-lg sm:text-xl'>
              It would be great to hear from you, and I&apos;ll get back to you
              as soon as possible!
            </span>
          </div>

          <form
            className='w-full flex flex-col gap-4 mt-12'
            action='https://api.web3forms.com/submit'
            method='POST'
            onSubmit={handleSubmit}
          >
            <input
              type='hidden'
              name='access_key'
              value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY}
            />
            <input
              type='text'
              name='name'
              placeholder='Name'
              className='p-4 rounded-lg bg-gray-50'
              required
            />
            <input
              type='email'
              name='email'
              placeholder='Email'
              className='p-4 rounded-lg bg-gray-50'
              required
            />
            <textarea
              name='message'
              placeholder='Message'
              className='p-4 rounded-lg bg-gray-50'
              required
              rows={4}
            />
            <button
              className='bg-blue-500 text-white p-4 rounded-lg'
              type='submit'
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <CgSpinner
                  className='animate-spin text-center w-full'
                  size={24}
                />
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </>
      )}

      {submitted && (
        <div className='flex flex-col items-center gap-4 h-96 justify-center'>
          <FaCheckCircle className='text-green-500 text-5xl' />
          <span className='text-lg text-slate-700 flex flex-col items-center'>
            <p>Thank you for reaching out to me.</p>
            <p>{"I'll"} get back to you as soon as possible.</p>
          </span>
        </div>
      )}
    </div>
  );
}
