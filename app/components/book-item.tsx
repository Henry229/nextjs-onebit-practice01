import Link from 'next/link';
import { BookData } from '../types/types';
import Image from 'next/image';
import { Trash2 } from 'lucide-react';
import { deleteBook } from '../actions/book-actions';

type BookItemProps = Pick<
  BookData,
  'id' | 'title' | 'subTitle' | 'author' | 'publisher' | 'coverImgUrl'
>;

function ConfirmDialog({
  title,
  description,
  onConfirm,
}: {
  title: string;
  description: string;
  onConfirm: () => void;
}) {
  return (
    <dialog>
      <h2 className='text-lg font-bold'>{title}</h2>
      <p className='text-sm text-gray-500'>{description}</p>
      <button
        className='bg-red-500 text-white px-4 py-2 rounded-md'
        onClick={onConfirm}
      >
        Confirm
      </button>
    </dialog>
  );
}

export default function BookItem({
  id,
  title,
  subTitle,
  author,
  publisher,
  coverImgUrl,
}: BookItemProps) {
  const handleDelete = () => {
    deleteBook(id);
  };
  return (
    <>
      <Link
        href={`/book/${id}`}
        className='flex items-center gap-4 border-b border-gray-800 p-4'
      >
        <div className='relative w-24 h-32 shrink-0'>
          <Image
            src={coverImgUrl}
            alt={title}
            fill
            className='object-cover rounded-md'
            loading='eager'
            sizes='96px'
          />
        </div>
        <div>
          <h3 className='text-lg font-bold'>{title}</h3>
          <p className='text-md text-gray-300 line-clamp-2 mb-4'>{subTitle}</p>
          <p className='text-sm text-gray-500'>
            {author} | {publisher}
          </p>
        </div>
      </Link>
      <button
        onClick={(e) => {
          e.preventDefault();
          <ConfirmDialog
            title='Delete Book'
            description='Are you sure you want to delete this book?'
            onConfirm={handleDelete}
          />;
        }}
      >
        <Trash2 className='w-4 h-4 text-red-500' />
      </button>
    </>
  );
}
