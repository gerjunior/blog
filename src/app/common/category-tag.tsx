export function CategoryTag({ category }: { category: string }) {
  return (
    <div className='bg-purple-500 text-white font-bold pt-1 pb-1 pl-3 pr-3 rounded-lg w-fit'>
      {category}
    </div>
  );
}