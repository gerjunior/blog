export function ContactForm() {
  return (
    <div className='flex flex-col items-center mb-10'>
      <div className='text-4xl font-black text-slate-800 mb-10 mt-8'>
        Contact
      </div>
      <div className='w-[28rem] bg-white px-20 py-10 rounded-xl text-center text-slate-700'>
        <span>
          It would be great to hear from you, and I&apos;ll get back to you as
          soon as possible!
        </span>

        <form className='flex flex-col gap-4 mt-12'>
          <input
            type='text'
            placeholder='Name'
            className='p-4 rounded-lg bg-gray-50'
          />
          <input
            type='email'
            placeholder='Email'
            className='p-4 rounded-lg bg-gray-50'
          />
          <textarea
            placeholder='Message'
            className='p-4 rounded-lg bg-gray-50'
            rows={4}
          />
          <button className='bg-blue-500 text-white p-4 rounded-lg'>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
