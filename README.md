🛍️ Fullstack App - Proceso de Compra con Pago (Wompi)

Este repositorio contiene la solución completa para una aplicación fullstack que permite la compra de un producto único mediante tarjeta de crédito usando la pasarela de pagos Wompi.

🔗 Enlaces

🔥 Demo en línea: https://your-deployed-url

📦 Backend GitHub: https://github.com/usuario/backend-repo

🖥️ Frontend GitHub: https://github.com/usuario/frontend-repo

⚙️ Tecnologías Usadas

Frontend

Vue.js 3 + Vite + TypeScript

Vuex

TailwindCSS

Axios

VeeValidate + Yup

Vitest (cobertura > 80%)

Backend

NestJS

PostgreSQL con TypeORM

Arquitectura Hexagonal (Ports & Adapters)

Railway Oriented Programming (ROP)

Jest (cobertura > 80%)

Swagger

DevOps

AWS (RDS, S3, CloudFront)

HTTPS, headers de seguridad

GitHub Actions (CI)

📐 Modelo de Base de Datos

Producto: id, nombre, descripción, precio, stock

Cliente: id, nombre, correo, dirección

Transacción: id, estado, monto, cliente_id, producto_id

Entrega: id, dirección, estado, transaccion_id

Diagrama

Producto ---< Transacción >--- Cliente ---< Entrega

🔄 Flujo de Negocio

Mostrar producto con stock y botón de compra

Formulario de tarjeta + dirección

Resumen de pago (producto + tarifas)

Confirmar pago

Llamar backend → Wompi

Mostrar resultado (éxito o error)

Stock actualizado

📋 Paso a Paso Backend

1. Setup Inicial

Proyecto creado con Nest.js + TypeScript

Integración de PostgreSQL via TypeORM

Arquitectura Hexagonal

2. Módulos

products: listar y consultar stock

clients: crear cliente

transactions: crear y actualizar estado

deliveries: crear al completar pago

3. Rutas API

GET /products: obtener producto

POST /clients: crear cliente

POST /transactions: iniciar transacción

PATCH /transactions/:id: actualizar resultado

4. Conexión con Wompi

Sandbox

Validación de datos sensibles

5. Pruebas

Uso de Jest

Cobertura > 80%

Testeo de casos de uso, lógica de dominio y errores

6. Despliegue

Docker + AWS ECS + RDS PostgreSQL

CI/CD con GitHub Actions

HTTPS + headers de seguridad

📋 Paso a Paso Frontend

1. Setup Inicial

Vite + Vue 3 + TypeScript

TailwindCSS + Vuex + Axios + VeeValidate

2. Estructura

src/
├── assets/
├── components/
├── views/
├── router/
├── store/
├── services/
├── utils/

3. Flujo de Pantallas

Producto: muestra info y botón de compra

Formulario: datos de tarjeta y envío (validados)

Resumen: total con tarifas

Resultado: éxito o error con navegación

4. Persistencia de Datos

Vuex como fuente principal

localStorage para resiliencia

5. Validaciones

Yup: email, tarjeta, CVV, dirección

Detección de logos VISA/MasterCard

6. Conexión al Backend

Axios con servicios

Flujo sincronizado:

Crear cliente → crear transacción → confirmar → actualizar

7. Pruebas

Vitest + vue-test-utils

Pruebas en componentes, formularios, flujo de estados

8. Despliegue

AWS S3 + CloudFront

vite build con .env.production

🧪 Pruebas

Backend: Jest con cobertura > 85%

Frontend: Vitest con cobertura > 85%

Reportes generados en /coverage.

📄 Documentación Técnica

Swagger: https://api-url/swagger

Postman Collection incluida en /docs/postman_collection.json

✅ Checklist



👨‍💻 Autor

Nombre: Moises pinzon Xiques

Email: mpinzon8080gmail.com


GitHub: https://github.com/mpinzonxiqu/wompi-onboarding.git

📝 Notas

Producto precargado en la base de datos.

xampp - Nombre base de Datos: tienda_db