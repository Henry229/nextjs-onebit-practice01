import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='flex items-center justify-between gap-4'>
      <Link href={'/'}>
        <h1 className='text-2xl font-bold'>📚 ONEBITE BOOKS</h1>
      </Link>
      <div className='flex items-center gap-4 mx-auto'>
        <Link href={'/allbooks'}>
          <h3 className='text-lg font-semibold'>All Books</h3>
        </Link>
        <Link href={'/books'}>
          <h3 className='text-lg font-semibold'>All Books</h3>
        </Link>
      </div>
      <div className='flex items-center gap-4'>
        <button className='bg-blue-500 text-white px-4 py-2 rounded-md'>
          Profile
        </button>
      </div>
    </nav>
  );
}
