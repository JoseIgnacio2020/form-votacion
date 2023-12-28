CREATE TABLE regiones (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50)
);

CREATE TABLE comunas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50),
    id_region INT,
    FOREIGN KEY (id_region) REFERENCES regiones(id)
);

CREATE TABLE candidatos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50)
);

CREATE TABLE voto (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
	alias VARCHAR(50) NOT NULL,
	rut VARCHAR(10) NOT NULL,
	email VARCHAR(50) NOT NULL,
	id_region INT  NOT NULL,
    FOREIGN KEY (id_region) REFERENCES regiones(id),
	id_comuna INT  NOT NULL,
    FOREIGN KEY (id_comuna) REFERENCES comunas(id),
	id_candidato INT  NOT NULL,
    FOREIGN KEY (id_candidato) REFERENCES candidatos(id),
	web BOOLEAN,
    tv BOOLEAN,
    redes_sociales BOOLEAN,
    amigo BOOLEAN
);