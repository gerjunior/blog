import Image from 'next/image';

export function BlogCard() {
  return (
    <div className='w-80 xl:w-[66rem] sm:w-[36rem] md:w-[44rem] bg-white p-5 rounded-3xl flex flex-row justify-between shadow-md'>
      <div className='ml-4 sm:ml-8 sm:w-1/2 md:mr-5 flex flex-col justify-center gap-3 items-start w-full'>
        <div className='bg-purple-500 text-white font-bold pt-1 pb-1 pl-3 pr-3 rounded-xl'>
          Design
        </div>
        <h3 className='text-xl sm:text-xl xl:text-3xl font-bold'>
          How Can Designers Prepare For The Future?
        </h3>
        <div className='text-slate-500'>May 2, 2022</div>
      </div>
      <div className='w-1/2 hidden sm:inline-block xl:flex justify-end'>
        <Image
          src='/test.webp'
          width={450}
          height={450}
          alt='Eat, Sleep, Code, Repeat'
          className='rounded-3xl'
        />
      </div>
    </div>
  );
}
