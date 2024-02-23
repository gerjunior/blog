'use client';
import { useState } from 'react';
import { HiOutlineChevronDown } from 'react-icons/hi';

export function Accordion() {
  const [showPanel, setShowPanel] = useState(false);

  const togglePanel = () => {
    setShowPanel(!showPanel);
  };

  return (
    <div
      className={`w-96 group ${showPanel ? 'is-active' : ''}`}
      onClick={togglePanel}
    >
      <button
        className={`bg-white w-full rounded-xl text-slate-800 p-5 pb-12 group-[.is-active]:pb-0 duration-500 text-left text-lg font-black cursor-pointer`}
      >
        <div className='flex flex-row'>
          <span>Do you have a tech stack that you stick to?</span>
          <HiOutlineChevronDown
            size={30}
            className={`text-slate-400 duration-500 rotate-0 group-[.is-active]:rotate-[180deg]`}
          />
        </div>
      </button>
      <div className='bg-white overflow-hidden duration-300 rounded-b-xl p-5 max-h-0 mt-[-10px] pb-0 group-[.is-active]:pb-10 group-[.is-active]:pt-10 group-[.is-active]:max-h-96'>
        <p className='translate-y-[-100px] opacity-0 group-[.is-active]:translate-y-0 group-[.is-active]:opacity-100 duration-300'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel
          feugiat urna, tristique volutpat turpis. Fusce fringilla pretium massa
          non mattis. Curabitur at ornare mauris. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nullam vel feugiat urna, tristique
          volutpat turpis. Fusce fringilla pretium massa non mattis. Curabitur
          at ornare mauris.
        </p>
      </div>
    </div>
  );
}
