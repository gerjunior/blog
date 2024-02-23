import { Accordion } from './accordion';
import { ContactForm } from './contact-form';
import { Introduction } from './introduction';

export default function About() {
  return (
    <div className='w-screen flex flex-col items-center'>
      <Introduction />

      <div className='w-full flex flex-col sm:flex-row items-center sm:items-start sm:justify-evenly p-10 sm:p-0 sm:mt-16 sm:mb-16'>
        <div className='mb-12 min-w-48 sm:mt-[-20px] text-center sm:text-start'>
          <span className='text-4xl sm:text-5xl font-black text-slate-800'>
            FAQs
          </span>
        </div>
        <div className='flex flex-col gap-4'>
          <Accordion />
          <Accordion />
          <Accordion />
          <Accordion />
        </div>
      </div>

      <div className='w-full flex flex-col sm:flex-row items-center sm:items-start sm:justify-evenly mb-10'>
        <div className='mb-10 mt-8 sm:mt-[-20px]'>
          <span className='text-4xl sm:text-5xl font-black text-slate-800'>
            Contact
          </span>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
