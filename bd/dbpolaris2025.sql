CREATE DATABASE dbpolaris2025;
USE dbpolaris2025;

CREATE TABLE empleado (
    id_empleado INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL
);

CREATE TABLE categoria (
    id_categoria INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL
);

CREATE TABLE producto (
    id_producto INT PRIMARY KEY AUTO_INCREMENT,
    id_categoria INT NOT NULL,
    disponible BOOLEAN NOT NULL,
    nombre VARCHAR(150) NOT NULL,
    precio_base DECIMAL(10,2) NOT NULL,
    descripcion TEXT,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL,
    FOREIGN KEY (id_categoria) REFERENCES categoria(id_categoria)
);

CREATE TABLE acompanamiento (
    id_acompanamiento INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL
);

CREATE TABLE producto_acompanamiento (
	id_prod_acomp INT PRIMARY KEY AUTO_INCREMENT,
	id_producto INT NOT NULL,
	id_acompanamiento INT NOT NULL,
	createdAt DATETIME NOT NULL,
	updatedAt DATETIME NOT NULL,
	FOREIGN KEY (id_producto) REFERENCES producto(id_producto),
	FOREIGN KEY (id_acompanamiento) REFERENCES acompanamiento(id_acompanamiento)
	);

CREATE TABLE pedido (
    id_pedido CHAR(36) PRIMARY KEY, -- usando UUID como en tperson
    id_empleado INT NOT NULL,
    fecha_hora_creacion DATETIME NOT NULL,
    nombre_cliente VARCHAR(100) NOT NULL,
    estado VARCHAR(50) NOT NULL,
    total_pagar DECIMAL(10,2) NOT NULL,
    tipo_pedido BOOLEAN NOT NULL,
    metodo_pago BOOLEAN NOT NULL,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL,
    FOREIGN KEY (id_empleado) REFERENCES empleado(id_empleado)
);

CREATE TABLE pedido_item (
    id_item INT PRIMARY KEY AUTO_INCREMENT,
    id_producto INT NOT NULL,
    id_pedido CHAR(36) NOT NULL,
    cantidad INT NOT NULL,
    precio_unitario_final DECIMAL(10,2) NOT NULL,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL,
    FOREIGN KEY (id_producto) REFERENCES producto(id_producto),
    FOREIGN KEY (id_pedido) REFERENCES pedido(id_pedido)
);


