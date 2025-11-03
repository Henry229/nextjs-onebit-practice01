import { getBooks } from '../actions/book-actions';
import BookItem from '../components/book-item';
import { BookData } from '../types/types';
import { CirclePlus } from 'lucide-react';
import Link from 'next/link';

export default async function AllBooks() {
  const allBooks: BookData[] = await getBooks();
  return (
    <div className='border-t-2 border-gray-700 p-4'>
      <div className='flex items-center justify-end'>
        <Link href='/allbooks/newbook'>
          <button className='flex items-center gap-2 text-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-300'>
            <CirclePlus className='w-4 h-4' />
            Add New Book
          </button>
        </Link>
      </div>
      {allBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}
