import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";

import { useNavigate } from "react-router-dom";
const Books = ({ books, title }) => {
  const handleDelete = (id) => {
    if (window.confirm("Do you Really Wanna DELETE That Book !")) {
      fetch("http://localhost:4000/books/" + id, {
        method: "DELETE",
      }).then(() => {
        console.log("Book Deleted");
        window.location.reload();
      });
    }
  };
  const navigate = useNavigate();

  const handledatatoupdate = (data) => {
    localStorage.setItem("id", data.id);
    localStorage.setItem("Name", data.Name);
    localStorage.setItem("Category", data.Category);
    localStorage.setItem("Price", data.Price);
    localStorage.setItem("Author", data.Author);
    navigate("/updatebook");
  };

  return (
    <div>
      <h1> {title} </h1>
      <Button variant="outlined" href="/createbook">
        New Book
      </Button>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Category</TableCell>
              <TableCell align="center">Author</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Edit</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books.map((book) => (
              <TableRow key={book.id}>
                <TableCell align="center">{book.Name}</TableCell>
                <TableCell align="center">{book.Category}</TableCell>
                <TableCell align="center">{book.Author}</TableCell>
                <TableCell align="center">{book.Price}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="outlined"
                    onClick={() => {
                      handledatatoupdate(book);
                    }}
                  >
                    Edit
                  </Button>
                </TableCell>
                <TableCell align="center">
                  <Button
                    onClick={() => {
                      handleDelete(book.id);
                    }}
                    variant="outlined"
                    color="error"
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Books;
