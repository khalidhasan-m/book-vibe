// import { use } from 'react';
import { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import { BookContext } from "../../context/BookProvider";
// const booksPromise = fetch("/booksData.json").then((res) => res.json());

const BookDetails = () => {
  const { id } = useParams();
  // console.log(id, "id");

  // const books = use(booksPromise);
  //   console.log(books, "books");

  const books = useLoaderData();
  // console.log(books, "books");
  const expectedBook = books.find((book) => book.bookId == id);

  const { handleMarkAsRead, handleAddToWishList } = useContext(BookContext);

  if (!expectedBook) {
    return (
      <div className="container mx-auto mt-13 py-20 text-center">
        <h2 className="text-3xl font-bold">Book not found</h2>
      </div>
    );
  }
  // console.log(expectedBook, "expectedBook");
  const {
    // bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = expectedBook;

  console.log(handleMarkAsRead, handleAddToWishList, "BookContext");

  return (
    <div className="container mx-auto mt-13 grid grid-cols-1 md:grid-cols-2 bg-base-100 shadow-sm">
      <figure className="p-10 w-full flex items-center justify-center bg-gray-300/10 rounded-xl">
        <img src={image} alt={bookName} className="h-150 rounded-md" />
      </figure>
      <div className="card-body p-10 rounded-xl">
        <h2 className="card-title text-2xl pt-4">{bookName}</h2>
        <h2 className="card-title pb-4">By: {author}</h2>
        <h2 className="border-y border-gray-300 py-4">{category}</h2>
        <p className="py-4">Review: {review}</p>
        <div className="flex items-center font-bold text-md py-4 gap-6">
          Tags:
          {tags.map((tag, index) => (
            <div key={index} className="badge badge-soft badge-success">
              #{tag}
            </div>
          ))}
        </div>
        <div className="border-t border-gray-300 py-4">
          <div className="flex justify-left items-center gap-11">
            <span>Number of Pages:</span>
            <span>{totalPages}</span>
          </div>
          <div className="flex justify-left items-center gap-24">
            <span>Publisher: </span>
            <span>{publisher}</span>
          </div>
          <div className="flex justify-left items-center gap-10">
            <span>Year of Publishing: </span>
            <span>{yearOfPublishing}</span>
          </div>
          <div className="flex justify-left items-center gap-29">
            <span>Rating: </span>
            <span>{rating}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            className="btn border-2 bg-white text-black"
            onClick={() => handleMarkAsRead(expectedBook)}
          >
            Mark as Read
          </button>
          <button
            className="btn bg-[#59C6D2] text-white"
            onClick={() => handleAddToWishList(expectedBook)}
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
