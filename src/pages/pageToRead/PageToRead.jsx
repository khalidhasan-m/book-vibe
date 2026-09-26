import { useContext } from "react";
import { BookContext } from "../../context/BookProvider";

const PageToRead = () => {
  const { storedBook, wishList } = useContext(BookContext);

  const totalPagesRead = storedBook.reduce(
    (sum, book) => sum + (book.totalPages || 0),
    0,
  );
  const avgRating = storedBook.length
    ? (
        storedBook.reduce((sum, book) => sum + (book.rating || 0), 0) /
        storedBook.length
      ).toFixed(1)
    : "0.0";

  const stats = [
    { label: "Books Read", value: storedBook.length, color: "bg-green-100 text-green-700" },
    { label: "Want to Read", value: wishList.length, color: "bg-cyan-100 text-cyan-700" },
    { label: "Total Pages Read", value: totalPagesRead, color: "bg-amber-100 text-amber-700" },
    { label: "Average Rating", value: avgRating, color: "bg-purple-100 text-purple-700" },
  ];

  return (
    <div className="container mx-auto mt-13">
      <h2 className="text-3xl font-bold text-center">Page to Read</h2>
      <p className="text-center text-gray-600 mt-2">
        Your reading dashboard at a glance.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={`card p-6 text-center shadow-sm border border-gray-100 ${stat.color}`}
          >
            <div className="text-4xl font-bold">{stat.value}</div>
            <div className="mt-2 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>

      {storedBook.length === 0 && wishList.length === 0 && (
        <div className="text-center mt-12">
          <h3 className="text-xl font-semibold">No activity yet</h3>
          <p className="text-gray-600 mt-2">
            Mark books as read or add them to your wishlist to see stats here.
          </p>
        </div>
      )}
    </div>
  );
};

export default PageToRead;