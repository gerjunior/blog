import { Accordion } from './accordion';
import { ContactForm } from './contact-form';
import { Introduction } from './introduction';

export default function About() {
  return (
    <div className='w-full flex flex-col items-center'>
      <Introduction />

      <div className='w-full flex flex-col items-center max-w-[96rem]'>
        <div className='w-full flex flex-col items-center sm:flex-row sm:items-start sm:justify-evenly p-10 sm:p-0 sm:mt-16 sm:mb-16'>
          <div className='mb-12 min-w-48 sm:mt-[-20px] text-center sm:text-end md:text-start'>
            <span className='text-4xl sm:text-5xl font-black text-slate-800'>
              FAQs
            </span>
          </div>
          <div className='w-full flex flex-col items-center gap-4 md:max-w-[60%] lg:w-[52rem]'>
            <Accordion />
            <Accordion />
            <Accordion />
            <Accordion />
          </div>
        </div>

        <div className='w-full flex flex-col sm:flex-row items-center sm:items-start sm:justify-evenly sm:mb-10 sm:mx-10'>
          <div className='mb-10 mt-8 sm:mt-[-20px]'>
            <span className='text-4xl md:text-5xl sm:text-4xl font-black text-slate-800'>
              Contact
            </span>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
