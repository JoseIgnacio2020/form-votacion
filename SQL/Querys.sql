/**Obtiene el nombre de las regiones*/
SELECT nombre FROM regiones

/**Obtiene el nombre de las comunas asociada a la región seleccionada*/
SELECT comunas.nombre 
FROM comunas INNER JOIN regiones
WHERE regiones.id = comunas.id_region
AND regiones.id = 1;

