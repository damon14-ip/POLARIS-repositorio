REPORTE DE ASEGURAMIENTO DE CALIDAD

Proyecto
Sistema POLARIS Backend Cafetería

Rol
Tester QA

Herramientas utilizadas
Postman
Spring Boot
MySQL
Git y GitHub

Objetivo del testing
Verificar el correcto funcionamiento de los endpoints del backend del sistema POLARIS, asegurando que las operaciones de consulta y registro respondan correctamente.

Alcance de pruebas
Se realizaron pruebas funcionales sobre los módulos de productos, categorías, empleados, pedidos, ítems de pedido y acompañamientos.

Endpoints probados

Metodo | Endpoint | Resultado
GET | /producto | OK
GET | /categorias | OK
GET | /empleados | OK
GET | /pedido | OK
GET | /pedido_item | OK
GET | /acompaniamiento | OK
GET | /producto_acompanamiento | OK
GET | /actuator/health | OK

Resultados
Todos los endpoints respondieron correctamente con estado exitoso.
Las respuestas fueron obtenidas en formato JSON válido.
Los datos retornados coinciden con los registros almacenados en la base de datos.
No se detectaron errores críticos durante la ejecución de las pruebas.

Evidencias
Las pruebas fueron ejecutadas mediante Postman.
La colección exportada se encuentra en la carpeta testing/postman del repositorio.

Conclusión
El backend del sistema POLARIS cumple con los requisitos funcionales evaluados y se encuentra listo para ser consumido por el frontend.

Tester
Alex Lopinta Soel

Fecha
Diciembre 2025