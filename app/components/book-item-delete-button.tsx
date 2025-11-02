'use client';

import { Trash2 } from 'lucide-react';
import { deleteBook } from '../actions/book-actions';
import { useState, useRef, useEffect } from 'react';

export default function BookItemDeleteButton({ bookId }: { bookId: number }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (showDialog) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [showDialog]);

  const handleDeleteClick = () => {
    setShowDialog(true);
  };

  const handleConfirm = async () => {
    setIsDeleting(true);
    setShowDialog(false);

    try {
      await deleteBook(bookId);
    } catch (error) {
      console.error('Failed to delete book:', error);
      alert('Failed to delete book');
      setIsDeleting(false);
    }
  };

  const handleCancel = () => {
    setShowDialog(false);
  };

  return (
    <>
      <button
        onClick={handleDeleteClick}
        disabled={isDeleting}
        className='p-2 hover:bg-red-50 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
        aria-label='Delete book'
      >
        <Trash2
          className={`w-4 h-4 ${isDeleting ? 'text-gray-400' : 'text-red-500'}`}
        />
      </button>

      <dialog
        ref={dialogRef}
        className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-xl p-6 backdrop:bg-black/50 m-0'
        onClose={handleCancel}
      >
        <div className='space-y-4'>
          <h2 className='text-xl font-bold text-gray-900'>Delete Book</h2>
          <p className='text-gray-600'>
            Are you sure you want to delete this book? This action cannot be
            undone.
          </p>
          <div className='flex gap-3 justify-end'>
            <button
              onClick={handleCancel}
              className='px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors'
            >
              Cancel
            </button>
            <button
              onClick={handleConfirm}
              disabled={isDeleting}
              className='px-4 py-2 bg-red-600 hover:bg-red-700 disabled:bg-red-300 text-white rounded-md transition-colors'
            >
              {isDeleting ? 'Deleting...' : 'Delete'}
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
