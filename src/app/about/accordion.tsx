'use client';
import { useState } from 'react';
import { HiOutlineChevronDown } from 'react-icons/hi';

type AccordionProps = {
  title: string;
  htmlContent: string;
};

export function Accordion({ htmlContent, title }: AccordionProps) {
  const [showPanel, setShowPanel] = useState(false);

  const togglePanel = () => {
    setShowPanel(!showPanel);
  };

  return (
    <div
      className={`w-full sm:w-96 md:w-full group ${
        showPanel ? 'is-active' : ''
      }`}
    >
      <button
        onClick={togglePanel}
        className='bg-white w-full rounded-xl text-slate-800 p-5 pb-12 group-[.is-active]:pb-0 duration-500 text-left text-lg font-black cursor-pointer'
      >
        <div className='w-full flex flex-row justify-between'>
          <span>{title}</span>
          <HiOutlineChevronDown
            size={30}
            className={`text-slate-400 duration-500 rotate-0 group-[.is-active]:rotate-[180deg]`}
          />
        </div>
      </button>
      <div className='bg-white overflow-hidden duration-300 rounded-b-xl p-5 max-h-0 mt-[-10px] pb-0 group-[.is-active]:pb-10 group-[.is-active]:pt-10 group-[.is-active]:max-h-fit'>
        <div className='translate-y-[-100px] opacity-0 group-[.is-active]:translate-y-0 group-[.is-active]:opacity-100 duration-300'>
          <div
            dangerouslySetInnerHTML={{
              __html: htmlContent,
            }}
            className='flex flex-col gap-5'
          />
        </div>
      </div>
    </div>
  );
}
