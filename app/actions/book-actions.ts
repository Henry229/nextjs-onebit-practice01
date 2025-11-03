'use server';

import { updateTag } from 'next/cache';

export async function getBooks() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch books: ${response.statusText}`);
  }
  return await response.json();
}

export async function getBook(id: number) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${id}`
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch book: ${response.statusText}`);
  }
  return await response.json();
}

export async function createBook(bookData: {
  title: string;
  subTitle: string;
  description: string;
  author: string;
  publisher: string;
  coverImgUrl: string;
}) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookData),
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to create book: ${response.statusText}`);
  }

  // 캐시 무효화
  updateTag('all-books');

  return await response.json();
}

export async function updateBook(
  id: number,
  bookData: {
    title: string;
    subTitle: string;
    description: string;
    author: string;
    publisher: string;
    coverImgUrl: string;
  }
) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${id}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookData),
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to update book: ${response.statusText}`);
  }

  // 캐시 무효화
  updateTag('all-books');

  return await response.json();
}

export async function deleteBook(id: number) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${id}`,
    { method: 'DELETE' }
  );
  if (!response.ok) {
    throw new Error(`Failed to delete book: ${response.statusText}`);
  }
  updateTag('all-books');
}
