import { useContext } from "react";
import { BookContext } from "../../context/BookProvider";
import BookCard from "../ui/BookCard";

const ReadListBook = ({ sortingType }) => {
  const { storedBook, handleRemoveFromReadList } = useContext(BookContext);

  const sortedBooks = [...storedBook];
  if (sortingType === "Pages") {
    sortedBooks.sort((a, b) => a.totalPages - b.totalPages);
  } else if (sortingType === "Rating") {
    sortedBooks.sort((a, b) => b.rating - a.rating);
  }

  if (storedBook.length === 0) {
    return (
      <div className="text-center mt-9">
        <h2 className="text-2xl font-semibold">Your read list is empty.</h2>
        <p className="text-gray-600 mt-2">
          Explore books and add them to your read list!
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-9 gap-6">
        {sortedBooks.map((book, index) => (
          <BookCard
            key={index}
            book={book}
            onRemove={() => handleRemoveFromReadList(book.bookId)}
          />
        ))}
      </div>
    </div>
  );
};

export default ReadListBook;
