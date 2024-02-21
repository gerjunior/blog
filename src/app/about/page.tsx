export default function About() {
  return (
    <div className='h-screen w-screen flex flex-col items-center'>
      <div className='bg-black text-white flex flex-col gap-5 items-center justify-center p-28'>
        <div className='flex flex-col items-center gap-1'>
          <p className='font-bold text-3xl sm:text-5xl'>Hey 👋</p>
          <p className='font-bold text-3xl sm:text-5xl'>I&apos;m Geraldo</p>
        </div>
        <p className='flex flex-col items-center text-center'>
          I have 5 years of Software Engineer experience, excelling in
          challenging projects focused on backend or full-stack development.
        </p>
      </div>
      <div className='flex flex-row'>
        <div>FAQs</div>
        <div>Here is the list</div>
      </div>
      <div>
        <div>Contact</div>
        <div>Contact Form</div>
      </div>
    </div>
  );
}
