const headerStyles = {
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 20px",
        backgroundColor: "#0A192F", // Fondo negro azulado
        color: "#FFFFFF", // Texto blanco
        borderBottom: "2px solid #233554", // Borde sutil gris azulado
      },
      logo: {
        width: "50px",
        height: "50px",
        marginRight: "10px",
      },
      navList: {
        listStyle: "none",
        display: "flex",
        gap: "15px",
      },
      navItem: {
        textDecoration: "none",
        color: "#64FFDA", // Color celeste para los links
        transition: "color 0.3s",
      },
      navItemHover: {
        color: "#46A29F", // Celeste más oscuro al pasar el mouse
      },
      link: {
        color: "white",
        textDecoration: "none",
        cursor: "pointer"
      },
  };

  export default headerStyles;
