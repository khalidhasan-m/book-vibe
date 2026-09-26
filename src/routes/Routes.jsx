import { createHashRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import Books from "../pages/books/Books";
import Errorpage from "../pages/errorpage/Errorpage";
import BookDetails from "../pages/bookDetails/BookDetails";
import PageToRead from "../pages/pageToRead/PageToRead";
import RequireAuth from "../layout/RequireAuth";
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
        element: (
          <RequireAuth>
            <Books />
          </RequireAuth>
        ),
      },
      {
        path: "/page-to-read",
        element: (
          <RequireAuth>
            <PageToRead />
          </RequireAuth>
        ),
      },
      {
        path: "/bookDetails/:id",
        element: (
          <RequireAuth>
            <BookDetails />
          </RequireAuth>
        ),
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
