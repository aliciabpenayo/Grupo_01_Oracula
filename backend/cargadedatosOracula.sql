
/*Cargar las categorías*/
INSERT INTO oraculaDB.categories (nombre) 
VALUES ('Juegos'), ('Literatura'), ('Multimedia'), ('Baratijas');

/*Cargar las subcategorías*/
INSERT INTO oraculaDB.subcategories (nombre, categoryID)
 VALUES ('Juego de mesa', 1), ('Videojuego', 1), ('Libro', 2), ('Audiolibro', 2), ('Ropa' , 3), ('Coleccionable' , 3), ('Accesorio' , 3), ('Pelicula' , 4), ('Soundtrack' , 4);

/*Cargar los atributos */
INSERT INTO oraculaDB.attributes (nombre, unidad, subcategoryID) VALUES ('Cantidad de jugadorxs', null, 1 ),('Edad Recomendada', 'años', 1),('Desarrolladorx', null, 2),('Lanzamiento', 'fecha', 2),('Extensión', 'cantidad de páginas', 3),('Autoría', null, 3), ('Duración', 'minutos', 4), 
('Autoría', null, 4),('Narrado por', null, 4),('Talle', null, 5),('Duración', 'minutos', 8), ('Duración', 'minutos', 9);

/*Cargar los géneros*/
INSERT INTO oraculaDB.genres (nombre)
 VALUES ('Fantasía clásica'), ('Fantasía Medieval'), ('Fantasía Juvenil'), ('Fantasía Urbana'), ('Fantasía Oscura'), ('Inclasificable') ;

