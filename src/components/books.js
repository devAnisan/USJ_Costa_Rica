import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../FireBaseConfig";
import BookCard from "./bookList";

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const querySnapshot = await getDocs(collection(db, "libros"));
      const booksArray = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBooks(booksArray);
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <h2 style={styles.title}>Lista de Libros</h2>
      <div style={styles.grid}>
        {books.length > 0 ? (
          books.map(book => (
            <BookCard
              key={book.id}
              title={book.Title}
              author={book.Author}
              date={book.releaseYear}
            />
          ))
        ) : (
          <p>Cargando libros...</p>
        )}
      </div>
    </div>
  );
};

const styles = {
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "15px",
  }
};

export default BookList;
