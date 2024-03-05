export function CategoryTag({ category }: { category: string }) {
  return (
    <div className='bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 font-bold pt-1 pb-1 pr-3 rounded-lg w-fit'>
      {category}
    </div>
  );
}
