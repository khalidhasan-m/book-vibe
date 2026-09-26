import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

// eslint-disable-next-line react-refresh/only-export-components
export const BookContext = createContext();

const loadList = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? [];
  } catch {
    return [];
  }
};

const BookProvider = ({ children }) => {
  const [storedBook, setStoredBook] = useState(() => loadList("readList"));
  const [wishList, setWishList] = useState(() => loadList("wishList"));

  useEffect(() => {
    localStorage.setItem("readList", JSON.stringify(storedBook));
  }, [storedBook]);

  useEffect(() => {
    localStorage.setItem("wishList", JSON.stringify(wishList));
  }, [wishList]);

  const handleMarkAsRead = (currentBook) => {
    const isExistBook = storedBook.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExistBook) {
      toast.error("Already marked.");
    } else if (wishList.find((book) => book.bookId === currentBook.bookId)) {
      toast.warn(
        "Already in wishlist. You can't add it to read list. Please remove it from wishlist first.",
      );
    }
    else {
      setStoredBook([...storedBook, currentBook]);
      toast.success(`${currentBook.bookName} is added to list!`);
    }
    console.log(currentBook, storedBook, "book");
  };

  const handleAddToWishList = (currentBook) => {
    const isExistInReadList = storedBook.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExistInReadList) {
      toast.warn("Already marked as read. You can't add it to wishlist.");
      return;
    }

    const isExistBook = wishList.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExistBook) {
      toast.warn("Already in wishlist.");
    } else {
      setWishList([...wishList, currentBook]);
      toast.success(`${currentBook.bookName} is added to wishlist!`);
    }
    console.log(currentBook, wishList, "book");
  };

  const data = {
    storedBook,
    wishList,
    setStoredBook,
    setWishList,
    handleAddToWishList,
    handleMarkAsRead,
  };
  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvider;
