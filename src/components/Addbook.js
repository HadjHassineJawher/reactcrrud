import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [Name, setName] = useState("");
  const [Category, setC] = useState("");
  const [Author, setA] = useState("");
  const [Price, setPrice] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newbook = {
      Name,
      Category,
      Author,
      Price,
    };

    fetch("http://localhost:4000/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newbook),
    }).then(() => {
      console.log("New Book Added");
      navigate("/");
    });
  };
  return (
    <div>
      <Button variant="outlined" href="/">
        Back
      </Button>

      <br></br>
      <br></br>
      <h1>Add New Book</h1>
      <form onSubmit={handleSubmit}>
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
          onChange={(e) => setC(e.target.value)}
        />
        <br></br>
        <br></br>
        <TextField
          required
          id="outlined-required"
          placeholder="Book Author"
          label="Book Author"
          value={Author}
          onChange={(e) => setA(e.target.value)}
        />
        <br></br>
        <br></br>
        <TextField
          required
          id="outlined-required"
          placeholder="Book Price"
          label="Book Price"
          value={Price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br></br>
        <br></br>
        <Button type="submit" variant="outlined">
          Add the New Book
        </Button>
      </form>
    </div>
  );
};
export default AddBook;
