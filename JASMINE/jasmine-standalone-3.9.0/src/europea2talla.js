function europea2talla(europea) {
    var europea;
    var talla;

    europea = europea.toUpperCase();

    switch (europea) {
      case "XS":
        talla = "pequeña";
        break;
      case "S":
        talla = "pequeña";
        break;
      case "M":
        talla = "mediana";
        break;
      case "L":
        talla = "grande";
        break;
      case "XL":
        talla = "grande";
        break;
      case "XXL":
        talla = "grande";
        break;
      default:
        break;
    }
    return talla;
  }