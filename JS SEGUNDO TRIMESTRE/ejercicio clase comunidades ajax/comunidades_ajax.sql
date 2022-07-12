-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-01-2022 a las 12:55:09
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
-- Base de datos: `comunidades_ajax`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comunidades_autonomas`
--

CREATE TABLE `comunidades_autonomas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `comunidades_autonomas`
--

INSERT INTO `comunidades_autonomas` (`id`, `nombre`) VALUES
(1, 'Valencia'),
(2, 'Extremadura'),
(3, 'Aragon');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `provincias`
--

CREATE TABLE `provincias` (
  `id` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `comunidad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `provincias`
--

INSERT INTO `provincias` (`id`, `nombre`, `comunidad`) VALUES
(1, 'Castellon', 1),
(2, 'Valencia', 1),
(3, 'Alicante', 1),
(4, 'Caceres', 2),
(5, 'Badajoz', 2),
(6, 'Huesca', 3),
(7, 'Zaragoza', 3),
(8, 'Teruel', 3);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comunidades_autonomas`
--
ALTER TABLE `comunidades_autonomas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `provincias`
--
ALTER TABLE `provincias`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
