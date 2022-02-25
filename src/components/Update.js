import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const bookid = localStorage.getItem("id");
  const bookname = localStorage.getItem("Name");
  const bookcategory = localStorage.getItem("Category");
  const bookauthor = localStorage.getItem("Author");
  const bookprice = localStorage.getItem("Price");

  const [Name, setName] = useState(bookname);
  const [Category, setCategory] = useState(bookcategory);
  const [Author, setAuthor] = useState(bookauthor);
  const [Price, setPrice] = useState(bookprice);
  const navigate = useNavigate();

  const handleupdate = (e) => {
    e.preventDefault();
    const updatedbook = {
      Name,
      Category,
      Author,
      Price,
    };
    fetch("http://localhost:4000/books/" + bookid, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedbook),
    }).then(() => {
      console.log("Book Updated");
      navigate("/");
    });
  };
  return (
    <div>
      <Button variant="outlined" href="/">
        {" "}
        Back{" "}
      </Button>
      <br></br>
      <br></br>
      <h1>Update Book</h1>
      <form onSubmit={handleupdate}>
        <TextField
          required
          label="Book Name"
          id="outlined-required"
          placeholder="Book Name"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />
        <br></br>
        <br></br>
        <TextField
          required
          id="outlined-required"
          label="Book Category"
          placeholder="Book Category"
          value={Category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <br></br>
        <br></br>
        <TextField
          required
          id="outlined-required"
          placeholder="Book Author"
          label="Book Author"
          value={Author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <br></br>
        <br></br>
        <TextField
          required
          id="outlined-required"
          placeholder="Book Price"
          label="Book Pricer"
          value={Price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br></br>
        <br></br>
        <Button type="submit" variant="outlined">
          Update Book
        </Button>
      </form>
    </div>
  );
};

export default Update;
