import { Suspense } from 'react';
import Searchbar from '../components/searchbar';

export default function SearchLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Searchbar />
      </Suspense>
      {children}
      {modal}
      <div id='modal-root'></div>
    </div>
  );
}
