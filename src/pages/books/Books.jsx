import { useContext, useState } from "react";
import { BookContext } from "../../context/BookProvider";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadListBook from "../../components/listedBooks/ReadListBook";
import WishListBook from "../../components/listedBooks/WishListBook";

const Books = () => {
  const { storedBook, wishList } = useContext(BookContext);

  const [sortingType, setSortingType] = useState("");
  return (
    <div className="container mx-auto mt-13">
      <div className="flex justify-center items-center my-3 gap-2 flex-wrap">
        <span className="font-medium">Sort by:</span>
        <button
          className={`btn btn-sm ${
            sortingType === "Pages"
              ? "btn-success text-white"
              : "btn-outline btn-success"
          }`}
          onClick={() => setSortingType("Pages")}
        >
          Pages
        </button>
        <button
          className={`btn btn-sm ${
            sortingType === "Rating"
              ? "btn-success text-white"
              : "btn-outline btn-success"
          }`}
          onClick={() => setSortingType("Rating")}
        >
          Rating
        </button>
        {sortingType && (
          <button
            className="btn btn-sm btn-ghost"
            onClick={() => setSortingType("")}
          >
            Clear
          </button>
        )}
      </div>

      <Tabs>
        <TabList>
          <Tab>Read list: {storedBook.length}</Tab>
          <Tab>Wishlist: {wishList.length}</Tab>
        </TabList>

        <TabPanel>
          <ReadListBook sortingType={sortingType} />
        </TabPanel>
        <TabPanel>
          <WishListBook sortingType={sortingType} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;
