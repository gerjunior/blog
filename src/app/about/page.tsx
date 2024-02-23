import { Accordion } from './accordion';
import { ContactForm } from './contact-form';

export default function About() {
  return (
    <div className='w-screen flex flex-col items-center'>
      <div className='text-white bg-gradient-radial w-full flex flex-col gap-5 items-center justify-center pt-24 pb-24 pr-12 pl-12 bg-cover'>
        <div className='flex flex-col items-center text-center gap-1'>
          <p className='font-black text-3xl sm:text-5xl'>Hey 👋</p>
          <p className='font-black text-3xl sm:text-5xl text-nowrap'>
            I&apos;m Geraldo
          </p>
        </div>
        <p className='flex flex-col items-center text-center font-normal text-wrap w-80 sm:w-96'>
          I have 5 years of software engineering experience, excelling in
          challenging projects focused on backend or full-stack development.
        </p>
      </div>

      <div className='flex flex-col p-10 w-full items-center t'>
        <div className='text-4xl font-black text-slate-800 mb-12'>FAQs</div>
        <div className='flex flex-col gap-4'>
          <Accordion />
          <Accordion />
          <Accordion />
          <Accordion />
        </div>
      </div>

      <ContactForm />
    </div>
  );
}
