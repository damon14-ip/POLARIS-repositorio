CREATE DATABASE dbPolaris2025;
USE dbPolaris2025;

CREATE TABLE empleado (
    idEmpleado INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    passwordHash VARCHAR(255) NOT NULL,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL
);

CREATE TABLE categoria (
    idCategoria INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL
);

CREATE TABLE producto (
    idProducto INT PRIMARY KEY AUTO_INCREMENT,
    idCategoria INT NOT NULL,
    disponible BOOLEAN NOT NULL,
    nombre VARCHAR(150) NOT NULL,
    precioBase DECIMAL(10,2) NOT NULL,
    descripcion TEXT,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL,
    FOREIGN KEY (idCategoria) REFERENCES categoria(idCategoria)
);

CREATE TABLE acompanamiento (
    idAcompanamiento INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL
);

CREATE TABLE productoAcompanamiento (
    idProdAcomp INT PRIMARY KEY AUTO_INCREMENT,
    idProducto INT NOT NULL,
    idAcompanamiento INT NOT NULL,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL,
    FOREIGN KEY (idProducto) REFERENCES producto(idProducto),
    FOREIGN KEY (idAcompanamiento) REFERENCES acompanamiento(idAcompanamiento)
);

CREATE TABLE pedido (
    idPedido CHAR(36) PRIMARY KEY, -- UUID
    idEmpleado INT NOT NULL,
    fechaHoraCreacion DATETIME NOT NULL,
    nombreCliente VARCHAR(100) NOT NULL,
    estado VARCHAR(50) NOT NULL,
    totalPagar DECIMAL(10,2) NOT NULL,
    tipoPedido BOOLEAN NOT NULL,
    metodoPago BOOLEAN NOT NULL,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL,
    FOREIGN KEY (idEmpleado) REFERENCES empleado(idEmpleado)
);

CREATE TABLE pedidoItem (
    idItem INT PRIMARY KEY AUTO_INCREMENT,
    idProducto INT NOT NULL,
    idPedido CHAR(36) NOT NULL,
    cantidad INT NOT NULL,
    precioUnitarioFinal DECIMAL(10,2) NOT NULL,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL,
    FOREIGN KEY (idProducto) REFERENCES producto(idProducto),
    FOREIGN KEY (idPedido) REFERENCES pedido(idPedido)
);
