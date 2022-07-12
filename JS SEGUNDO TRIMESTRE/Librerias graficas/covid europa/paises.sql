-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-01-2022 a las 19:04:47
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `paises`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paises`
--

CREATE TABLE `paises` (
  `nombre_pais` varchar(2) NOT NULL,
  `casos_covid` smallint(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `paises`
--

INSERT INTO `paises` (`nombre_pais`, `casos_covid`) VALUES
('AD', 6000),
('AL', 6000),
('AT', 2000),
('BA', 10000),
('BE', 6000),
('BG', 6000),
('BY', 6000),
('CH', 10000),
('CZ', 6000),
('DE', 400),
('DK', 4000),
('EE', 6000),
('ES', 10000),
('FI', 6000),
('FR', 10000),
('GB', 10000),
('GR', 2000),
('HR', 6000),
('HU', 10000),
('IE', 6000),
('IS', 500),
('IT', 10000),
('LI', 6000),
('LT', 6000),
('LU', 2000),
('LV', 10000),
('MD', 6000),
('ME', 6000),
('MK', 6000),
('NL', 6000),
('NO', 2000),
('PL', 6000),
('PT', 6000),
('RO', 6000),
('RS', 6000),
('RU', 4000),
('SE', 10000),
('SI', 6000),
('SK', 6000),
('TR', 6000),
('UA', 6000);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `paises`
--
ALTER TABLE `paises`
  ADD PRIMARY KEY (`nombre_pais`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
