'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { createBook, updateBook } from '@/app/actions/book-actions';
import { BookData } from '../types/types';

type BookFormProps = {
  mode: 'new' | 'edit';
  bookData?: BookData;
};

export default function BookForm({ mode, bookData }: BookFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Prevent double submission
    if (isLoading) return;

    setIsLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);

    try {
      const bookPayload = {
        title: formData.get('title') as string,
        subTitle: formData.get('subTitle') as string,
        description: formData.get('description') as string,
        author: formData.get('author') as string,
        publisher: formData.get('publisher') as string,
        coverImgUrl: formData.get('coverImgUrl') as string,
      };
      if (mode === 'new') {
        await createBook(bookPayload);
      } else {
        await updateBook(bookData?.id as number, bookPayload);
      }

      // 뒤로가기로 Modal 닫기 (Modal의 경우) 또는 이전 페이지로 이동
      router.back();
      // 캐시된 데이터 갱신
      router.refresh();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : `Failed to ${mode === 'new' ? 'create' : 'edit'} book`
      );
      setIsLoading(false);
    }
  };

  return (
    <div>
      {error && (
        <div className='mb-4 p-3 bg-red-100 text-red-700 rounded-md'>
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label htmlFor='title' className='block text-sm font-medium mb-1'>
            Title
          </label>
          <input
            type='text'
            id='title'
            name='title'
            defaultValue={bookData?.title || ''}
            placeholder='Enter book title'
            required
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>

        <div>
          <label htmlFor='subTitle' className='block text-sm font-medium mb-1'>
            Subtitle
          </label>
          <input
            type='text'
            id='subTitle'
            name='subTitle'
            defaultValue={bookData?.subTitle || ''}
            placeholder='Enter subtitle'
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>

        <div>
          <label
            htmlFor='description'
            className='block text-sm font-medium mb-1'
          >
            Description
          </label>
          <textarea
            id='description'
            name='description'
            defaultValue={bookData?.description || ''}
            placeholder='Enter book description'
            rows={4}
            required
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>

        <div>
          <label htmlFor='author' className='block text-sm font-medium mb-1'>
            Author
          </label>
          <input
            type='text'
            id='author'
            name='author'
            defaultValue={bookData?.author || ''}
            placeholder='Enter author name'
            required
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>

        <div>
          <label htmlFor='publisher' className='block text-sm font-medium mb-1'>
            Publisher
          </label>
          <input
            type='text'
            id='publisher'
            name='publisher'
            defaultValue={bookData?.publisher || ''}
            placeholder='Enter publisher'
            required
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>

        <div>
          <label
            htmlFor='coverImgUrl'
            className='block text-sm font-medium mb-1'
          >
            Cover Image URL
          </label>
          <input
            type='url'
            id='coverImgUrl'
            name='coverImgUrl'
            defaultValue={bookData?.coverImgUrl || ''}
            placeholder='https://example.com/cover.jpg'
            required
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>

        <div className='flex gap-3 pt-4'>
          <button
            type='submit'
            disabled={isLoading}
            className='flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-300'
          >
            {isLoading
              ? mode === 'new'
                ? 'Creating...'
                : 'Updating...'
              : mode === 'new'
              ? 'Create Book'
              : 'Update Book'}
          </button>
          <button
            type='button'
            onClick={() => router.back()}
            disabled={isLoading}
            className='px-4 py-2 border border-gray-300 hover:bg-gray-100 rounded-lg transition-colors duration-300'
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
