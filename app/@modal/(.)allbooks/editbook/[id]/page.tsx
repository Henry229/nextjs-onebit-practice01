import Modal from '@/app/components/modal';
import BookForm from '@/app/components/book-form';
import { getBook } from '@/app/actions/book-actions';

export default async function InterceptEditBookPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const bookData = await getBook(Number(id));

  return (
    <Modal>
      <div className='bg-gray-900/50 p-6 rounded-md'>
        <h1 className='text-2xl font-bold mb-6'>Edit Book</h1>
        <BookForm mode='edit' bookData={bookData} />
      </div>
    </Modal>
  );
}
