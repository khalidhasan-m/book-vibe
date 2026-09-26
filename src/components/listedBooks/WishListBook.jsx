import { useContext } from "react";
import { BookContext } from "../../context/BookProvider";
import BookCard from "../ui/BookCard";

const WishListBook = ({ sortingType }) => {
  const { wishList } = useContext(BookContext);

  const sortedBooks = [...wishList];
  if (sortingType === "Pages") {
    sortedBooks.sort((a, b) => a.totalPages - b.totalPages);
  } else if (sortingType === "Rating") {
    sortedBooks.sort((a, b) => b.rating - a.rating);
  }

  if (wishList.length === 0) {
    return (
      <div className="text-center mt-9">
        <h2 className="text-2xl font-semibold">Your wishlist is empty.</h2>
        <p className="text-gray-600 mt-2">
          Explore books and add them to your wishlist!
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-9 gap-6">
        {sortedBooks.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

export default WishListBook;
