import { useContext, useState } from "react";
import { BookContext } from "../../context/BookProvider";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadListBook from "../../components/listedBooks/ReadListBook";
import WishListBook from "../../components/listedBooks/WishListBook";

const Books = () => {
  const { storedBook, wishList } = useContext(BookContext);
  console.log(storedBook, wishList, "BookContext");

  const [sortingType, setSortingType] = useState("");
  return (
    <div className="container mx-auto mt-13">
      <div className="flex justify-center my-3">
        <div className="dropdown dropdown-start">
          <div tabIndex={0} role="button" className="btn m-1">
            Click
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li onClick={() => setSortingType("Pages")}>
              <a>Pages</a>
            </li>
            <li onClick={() => setSortingType("Rating")}>
              <a>Rating</a>
            </li>
          </ul>
        </div>
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
