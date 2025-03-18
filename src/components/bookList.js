const BookCard = ({ title, author, date }) => {
    return (
      <div style={styles.card}>
        <h3 style={styles.title}>{title}</h3>
        <p><strong>Autor:</strong> {author}</p>
        <p><strong>Fecha:</strong> {date}</p>
      </div>
    );
  };
  const styles = {
    card: {
        color: "#fff",
      width: "250px",
      padding: "15px",
      borderRadius: "10px",
      backgroundColor: "#0A192F",
      border: "1px solid #64FFDA",
      boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
      textAlign: "center",
      margin: "10px",
    },
    title: {
      fontSize: "18px",
      marginBottom: "10px",
    }
  };

  export default BookCard;
