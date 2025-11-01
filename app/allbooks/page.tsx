import BookItem from '../components/book-item';
import { BookData } from '../types/types';

export async function AllBooks() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`,
    { next: { revalidate: 86400, tags: ['all-books'] } }
  );
  if (!response.ok) {
    return <div>Error in All Books: {response.statusText}</div>;
  }
  const allBooks: BookData[] = await response.json();
  return (
    <div>
      {allBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}
