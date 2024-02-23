export function ContactForm() {
  return (
    <div className='w-full sm:w-96 md:w-full md:max-w-[60%] lg:w-[52rem] bg-white px-10 py-10 rounded-xl flex flex-col items-center'>
      <div className='text-center md:w-72'>
        <span className='text-slate-700 text-lg sm:text-xl'>
          It would be great to hear from you, and I&apos;ll get back to you as
          soon as possible!
        </span>
      </div>

      <form className='w-full flex flex-col gap-4 mt-12'>
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
  );
}
