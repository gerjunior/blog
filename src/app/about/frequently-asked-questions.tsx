'use client';
import { useRef } from 'react';
import { Accordion } from './accordion';
import { usePageEffect } from '../common/usePageEffect';
import { FAQWithId } from '../lib/contentful/types';

type FrequentlyAskedQuestionsProps = {
  faqs: FAQWithId[];
};

export function FrequentlyAskedQuestions({
  faqs,
}: FrequentlyAskedQuestionsProps) {
  const faqsRef = useRef<HTMLDivElement | null>(null);
  const { effectClassSet: faqsEffectClassSet } = usePageEffect(faqsRef, {
    duration: 300,
    effect: 'slide',
  });

  return (
    <div
      ref={faqsRef}
      className={`w-full flex flex-col items-center sm:flex-row sm:items-start sm:justify-evenly p-10 sm:p-0 sm:mt-16 ${faqsEffectClassSet}
        `}
    >
      <div className='mb-12 min-w-48 sm:mt-[-20px] text-center sm:text-end md:text-start'>
        <span className='text-4xl sm:text-5xl font-black text-slate-800'>
          FAQs
        </span>
      </div>
      <div className='w-full flex flex-col items-center gap-4 md:max-w-[60%] lg:w-[52rem]'>
        {faqs?.length &&
          faqs.map((faq) => (
            <Accordion
              key={faq.id}
              title={faq.title}
              htmlContent={faq.content}
            />
          ))}
      </div>
    </div>
  );
}
