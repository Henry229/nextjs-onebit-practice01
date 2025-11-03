import BookForm from '@/app/components/book-form';

export default function NewBookPage() {
  return (
    <div className='bg-gray-900/50 p-6 rounded-md'>
      <h1 className='text-2xl font-bold mb-6'>Add New Book</h1>

      <BookForm mode='new' />
    </div>
  );
}
