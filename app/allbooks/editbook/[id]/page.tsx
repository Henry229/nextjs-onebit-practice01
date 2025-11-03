import { getBook } from '@/app/actions/book-actions';
import BookForm from '@/app/components/book-form';

export default async function EditBookPage({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  const bookData = await getBook(id);

  return (
    <div className='bg-gray-900/50 p-6 rounded-md'>
      <h1 className='text-2xl font-bold mb-6'>Edit Book</h1>
      <BookForm mode='edit' bookData={bookData} />
    </div>
  );
}
