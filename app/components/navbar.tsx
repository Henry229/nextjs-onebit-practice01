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
          <h3 className='text-lg font-semibold'>Featured Books</h3>
        </Link>
      </div>
      <div className='flex items-center gap-4'>
        <button className='text-lg text-blue-600 hover:bg-blue-50 font-semibold px-4 py-2 rounded-lg transition-colors duration-300'>
          Profile
        </button>
      </div>
    </nav>
  );
}
