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
      width: "250px",
      padding: "15px",
      borderRadius: "10px",
      backgroundColor: "#f9f9f9",
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
