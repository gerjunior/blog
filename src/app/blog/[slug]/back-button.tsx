'use client';
import { useRouter } from 'next/navigation';
import { GoArrowLeft } from 'react-icons/go';

export function BackButton() {
  const navigation = useRouter();

  return (
    <button
      onClick={() => navigation.back()}
      className='hidden sm:flex gap-2 items-center font-medium'
    >
      <GoArrowLeft size={18} />
      Back
    </button>
  );
}
