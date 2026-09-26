import { createHashRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import Books from "../pages/books/Books";
import Errorpage from "../pages/errorpage/Errorpage";
import BookDetails from "../pages/bookDetails/BookDetails";
import booksData from "../data/booksData.json";

export const router = createHashRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/page-to-read",
        element: <Books />,
      },
      {
        path: "/bookDetails/:id",
        element: <BookDetails />,
        loader: () => booksData,
      },
      {
        path: "*",
        element: <Errorpage />,
      },
    ],
    errorElement: <Errorpage />,
  },
]);
