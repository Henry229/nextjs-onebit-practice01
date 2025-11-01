'use client';

import { createPortal } from 'react-dom';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function Modal({ children }: { children: React.ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
      dialogRef.current?.scrollTo({
        top: 0,
      });
    }
  }, []);

  return createPortal(
    <dialog
      ref={dialogRef}
      onClose={() => router.back()}
      onClick={(e) => {
        if (e.target instanceof Node && e.target.nodeName === 'DIALOG') {
          router.back();
        }
      }}
      className='mx-auto backdrop:bg-black/50 backdrop:backdrop-blur-sm bg-white rounded-lg shadow-xl p-0 max-w-[500px] w-4/5 mt-5 max-h-[90vh] overflow-y-auto'
    >
      {children}
    </dialog>,
    document.getElementById('modal-root') as HTMLElement
  );
}
