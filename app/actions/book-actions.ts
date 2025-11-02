'use server';

import { revalidateTag } from 'next/cache';

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
  revalidateTag('all-books', 'default');

  return await response.json();
}
