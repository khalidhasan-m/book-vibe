import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";

const BookCard = ({book}) => {
  return (
    <Link to={`/bookDetails/${book.bookId}`} className="card bg-base-100 shadow-sm border border-gray-100 p-6">
      <figure className="p-6 bg-base-200">
        <img
          className="rounded-xl h-41.5"
          src={book.image}
          alt={book.bookName}
        />
      </figure>
      <div className="card-body">
        <div className="flex items-center gap-6">
          {book.tags.map((tag, index) => (
            <div key={index} className="badge badge-soft badge-success font-bold text-md">
              {tag}
            </div>
          ))}
        </div>
        <h2 className="card-title text-2xl">{book.bookName}</h2>
        <p className="text-base">By : {book.author}</p>
        <div className="card-actions justify-between border-t border-dashed border-gray-300 pt-4">
          <div className="font-medium text-base">{book.category}</div>
          <div className="flex items-center gap-1 font-medium text-base">
            {book.rating}
            <FaRegStar />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
