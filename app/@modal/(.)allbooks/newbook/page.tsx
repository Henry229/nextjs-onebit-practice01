import NewBookPage from '@/app/allbooks/newbook/page';
import Modal from '@/app/components/modal';

export default function InterceptNewBookPage() {
  return (
    <Modal>
      <NewBookPage />
    </Modal>
  );
}
