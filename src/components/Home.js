import { useEffect, useState } from "react";
import Books from "./Books";

const Home = () => {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/books")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBooks(data);
      });
  }, []);

  return <div>{books && <Books books={books} title="Books List" />}</div>;
  // const handleDelete = (id) => {
  //   const smallList = books.filter((list) => list._id != id);
  //   setBooks(smallList);
  // };
};

export default Home;
