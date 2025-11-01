import BookEachPage from '@/app/book/[id]/page';
import Modal from '@/app/components/modal';

export default function InterceptBookIdPage(props: {
  params: Promise<{ id: string }>;
}) {
  return (
    <Modal>
      <BookEachPage {...props} />
    </Modal>
  );
}
