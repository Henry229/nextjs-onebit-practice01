import { Pencil } from 'lucide-react';
import Link from 'next/link';

export default function BookItemEditButton({ bookId }: { bookId: number }) {
  return (
    <Link href={`/allbooks/editbook/${bookId}`}>
      <button
        className='p-2 hover:bg-blue-50 rounded-md transition-colors'
        aria-label='Edit book'
      >
        <Pencil className='w-4 h-4 text-blue-500 hover:text-blue-600 transition-colors' />
      </button>
    </Link>
  );
}
