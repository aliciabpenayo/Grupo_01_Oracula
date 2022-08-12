DROP database oraculaDB;
CREATE DATABASE IF NOT EXISTS oraculaDB ;
USE oraculaDB;

DROP TABLE IF EXISTS `Categories`;
CREATE TABLE `Categories` (
  `id` int PRIMARY KEY NOT NULL auto_increment,
  `nombre` varchar(50) NOT NULL
);


DROP TABLE IF EXISTS `Subcategories`;
CREATE TABLE `Subcategories` (
  `id` int PRIMARY KEY NOT NULL auto_increment,
  `nombre` varchar(50) NOT NULL,
  `categoryID` int NOT NULL,
  FOREIGN KEY (`categoryID`) REFERENCES `Categories`(`id`)
);

DROP TABLE IF EXISTS `Products`;
CREATE TABLE `Products`(
`id` INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
`nombre` VARCHAR(50) NOT NULL,
`descripcion` TEXT NOT NULL,
`precio` DECIMAL(10,2) NOT NULL,
`descuento` TINYINT UNSIGNED,
`esNovedad` BIT NOT NULL DEFAULT 0,
`esDestacado` BIT NOT NULL DEFAULT 0,
`esMagicPass` BIT NOT NULL DEFAULT 0,
`createdAt` DATETIME DEFAULT NOW(),
`updatedAt` DATETIME DEFAULT NOW() ON UPDATE NOW(),
`categoryID` INT NOT NULL,
`subcategoryID` INT NOT NULL,
`estaActivo` BIT NOT NULL DEFAULT 1,
FOREIGN KEY(`categoryID`) REFERENCES `Categories`(`id`),
FOREIGN KEY(`subcategoryID`) REFERENCES `Subcategories`(`id`)
);

DROP TABLE IF EXISTS `Attributes`;
CREATE TABLE `Attributes`(
`id` INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
`nombre` VARCHAR(50) NOT NULL,
`unidad` VARCHAR(50),
`subcategoryID` INT NOT NULL,
FOREIGN KEY(`subcategoryID`) REFERENCES Subcategories(`id`)
);

DROP TABLE IF EXISTS `AttributesProducts`;
CREATE TABLE `AttributesProducts`(
`id` INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
`valor` VARCHAR(50) NOT NULL,
`attributeID` INT NOT NULL,
`productID` INT NOT NULL,
FOREIGN KEY(`attributeID`) REFERENCES `Attributes`(`id`),
FOREIGN KEY(`productID`) REFERENCES `Products`(`id`)
);

DROP TABLE IF EXISTS `Stocks`;
CREATE TABLE `Stocks`(
`id` INT AUTO_INCREMENT PRIMARY KEY,
`cantidad` INT NOT NULL,
`updatedAt` DATETIME DEFAULT NOW() ON UPDATE NOW(),
`productID` INT NOT NULL,
FOREIGN KEY(`productID`) REFERENCES Products(`id`)
);

DROP TABLE IF EXISTS `Images`;
CREATE TABLE `Images` (
  `id` int PRIMARY KEY NOT NULL auto_increment,
  `url` varchar(200) NOT NULL,
  `productID` int NOT NULL,
  FOREIGN KEY (`productID`) REFERENCES Products(`id`)
);

DROP TABLE IF EXISTS `Users`;
CREATE TABLE `Users` (
  `id` INT PRIMARY KEY NOT NULL auto_increment,
  `nombre` VARCHAR(50) NOT NULL,
  `apellido` VARCHAR(50) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `direccion` VARCHAR(50) NULL,
  `telefono` VARCHAR(20) NULL,
  `imagen` VARCHAR(45) NOT NULL,
  `password` TEXT NOT NULL,
  `esAdmin` BIT NOT NULL,
  `magicPass` BIT NOT NULL,
  `createdAt` DATE NOT NULL
);

DROP TABLE IF EXISTS `Wishlists`;
CREATE TABLE `Wishlists`(
  `id` int PRIMARY KEY NOT NULL auto_increment,
  `userID` int NOT NULL,
  FOREIGN KEY (`userID`) REFERENCES `Users`(`id`)
);

DROP TABLE IF EXISTS `Purchases`;
CREATE TABLE `Purchases` (
  `id` INT PRIMARY KEY NOT NULL auto_increment,
  `userID` INT NOT NULL,
  `createdAt` DATE NOT NULL,
  `montoTotal` DECIMAL NOT NULL,
  `esCancelado` BIT NOT NULL,
  FOREIGN KEY (`userID`) REFERENCES `Users` (`id`)
 );

DROP TABLE IF EXISTS `PurchasesProducts`;
CREATE TABLE `PurchasesProducts` (
  `id` INT PRIMARY KEY NOT NULL auto_increment,
  `productID` INT NOT NULL,
  `purchasesID` INT NOT NULL,
  `precioFinal` DECIMAL NOT NULL,
  `porcentajeDescuento` INT NOT NULL,
  `cantidad` INT NOT NULL,
  FOREIGN KEY (`productID`) REFERENCES `Products` (`id`),
  FOREIGN KEY (`purchasesID`) REFERENCES `Purchases` (`id`)
);

DROP TABLE IF EXISTS `Favorites`;
CREATE TABLE `Favorites` (
  `id` INT NOT NULL auto_increment,
  `userID` INT NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`userID`) REFERENCES `Users` (`id`)
);

DROP TABLE IF EXISTS `Genres`;
CREATE TABLE `Genres` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL
);

DROP TABLE IF EXISTS `Carts`;
CREATE TABLE `Carts` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `montoTotal` decimal(10,2) NOT NULL,
  `userID` int NOT NULL,
  FOREIGN KEY (`userID`) REFERENCES Users(`id`)
);

DROP TABLE IF EXISTS `ProductsGenres`;
CREATE TABLE `ProductsGenres` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `productID` int NOT NULL,
  `genreID` int NOT NULL,
   FOREIGN KEY (`productID`) REFERENCES Products(`id`),
   FOREIGN KEY (`genreID`) REFERENCES Genres(`id`)
);

DROP TABLE IF EXISTS `CartsProducts`;
CREATE TABLE `CartsProducts` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `productID` int NOT NULL,
  `cartID` int NOT NULL,
   FOREIGN KEY (`productID`) REFERENCES Products(`id`),
   FOREIGN KEY (`cartID`) REFERENCES Carts(`id`)
);

DROP TABLE IF EXISTS `ProductsFavorites`;
CREATE TABLE `ProductsFavorites` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `productID` int NOT NULL,
  `favoriteID` int NOT NULL,
   FOREIGN KEY (`productID`) REFERENCES `Products`(`id`),
   FOREIGN KEY (`favoriteID`) REFERENCES `Favorites`(`id`)
);

DROP TABLE IF EXISTS `ProductsWishlists`;
CREATE TABLE `ProductsWishlists` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `productID` int NOT NULL,
  `wishlistID` int NOT NULL,
   FOREIGN KEY (`productID`) REFERENCES `Products`(`id`),
   FOREIGN KEY (`wishlistID`) REFERENCES `Wishlists`(`id`)
)