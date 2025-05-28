🛍️ Wompi-Onboarding

Aplicación web de e-commerce donde un cliente puede comprar un producto usando tarjeta de crédito a través de la pasarela de pago Wompi (sandbox). El flujo completo incluye visualización del producto, captura de datos de entrega y pago, confirmación de transacción y actualización del stock.

📌 Tabla de Contenidos
Características

Tecnologías

Demo

Arquitectura

Modelo de Datos

Instalación Local

Uso

Documentación de la API

Pruebas

Seguridad

Consideraciones

Checklist de Entrega

Licencia

✅ Características
✅ SPA mobile-first (iPhone SE compatible)

✅ Flujo completo de pago por tarjeta

✅ Persistencia del estado entre páginas y recargas

✅ Actualización automática del stock

✅ Validación y detección de tarjetas VISA / MasterCard

✅ Arquitectura Hexagonal

✅ Railway Oriented Programming (ROP)

✅ API REST robusta y documentada

✅ Pruebas unitarias con cobertura >80%

✅ Deploy en AWS

🧰 Tecnologías
Frontend
 Vue 3 / React (indica cuál usaste)

 Vuex / Redux

 TailwindCSS / CSS Modules / Styled Components

 Vite / Webpack

 Jest / Vitest

Backend
 NestJS / Grappe / Sinatra

 TypeORM / Prisma

 PostgreSQL / DynamoDB

 Jest para testing

 Swagger para documentación

Infraestructura
 AWS S3 / CloudFront (frontend)

 AWS EC2 / Lambda / ECS (backend)

 AWS RDS (PostgreSQL)

 HTTPS + headers de seguridad

🌐 Demo
🔗 App: https://miapp.cloudfront.net

🔗 API: https://api.miapp.com

🔗 Repositorio: https://github.com/usuario/miapp

🧠 Arquitectura
Backend (Hexagonal)
bash
Copiar
Editar
src/
├── application/      # Casos de uso (ROP)
├── domain/           # Entidades y lógica de dominio
├── infrastructure/
│   ├── controllers/
│   ├── database/
│   └── wompi/
└── main.ts
Frontend (SPA)
css
Copiar
Editar
src/
├── components/
├── views/
├── store/
├── services/
└── App.vue / App.jsx
🗃️ Modelo de Datos
mermaid
Copiar
Editar
erDiagram
    Product ||--o{ Transaction : has
    Customer ||--o{ Transaction : makes
    Transaction ||--|| Delivery : generates

    Product {
        UUID id PK
        string name
        float price
        int stock
    }

    Customer {
        UUID id PK
        string full_name
        string email
        string phone
    }

    Transaction {
        UUID id PK
        enum status
        UUID customer_id FK
        UUID product_id FK
        float total_amount
        datetime created_at
    }

    Delivery {
        UUID id PK
        string address
        string city
        string postal_code
        UUID transaction_id FK
    }
⚙️ Instalación Local
Requisitos
Node.js >= 18

PostgreSQL / Docker

Yarn o npm

Backend
bash
Copiar
Editar
cd backend
cp .env.example .env
npm install
npm run start:dev
Frontend
bash
Copiar
Editar
cd frontend
npm install
npm run dev
📲 Uso
El usuario ingresa a la página y ve el producto disponible.

Presiona el botón “Pagar con tarjeta de crédito”.

Ingresa datos de tarjeta y entrega.

Revisa resumen del pago (precio + tarifa base + envío).

Confirma el pago → Wompi responde.

El backend actualiza estado de la transacción y stock.

El frontend muestra el estado final del pago.

📑 Documentación de la API
Swagger disponible en:
🔗 https://api.miapp.com/docs

Método	Ruta	Descripción
GET	/products	Ver productos y stock disponibles
POST	/transactions	Crear transacción (estado: PENDING)
POST	/wompi/webhook	Recibir callback desde Wompi
PATCH	/transactions/:id	Actualizar estado de transacción
POST	/deliveries	Guardar información de entrega

🧪 Pruebas
Frontend
Framework: Jest / Vitest

Cobertura: 85%

Comando:

bash
Copiar
Editar
npm run test:coverage
Backend
Framework: Jest

Cobertura: 90%

Comando:

bash
Copiar
Editar
npm run test:cov
Archivos de cobertura incluidos en /coverage

🔐 Seguridad
Uso de HTTPS en producción

Headers de seguridad con Helmet (o NGINX)

Validación de datos y sanitización

Datos de tarjetas solo simulados (sandbox)

Sin exposición de llaves privadas en frontend

🧪 Datos de prueba para Wompi Sandbox
Campo	Valor
Número de tarjeta	4242 4242 4242 4242
Nombre	Juan Pérez
Expiración	12/28
CVV	123
Cédula	1234567890

📋 Consideraciones
Este proyecto fue desarrollado en el marco de una prueba técnica.

No se deben compartir ni reutilizar llaves de API públicas.

El nombre del repositorio no contiene “Wompi” como se especifica en la prueba.

✅ Checklist de Entrega
 Flujo completo de compra y pago

 Frontend responsive y mobile-first

 Backend desacoplado (Hexagonal)

 Pruebas unitarias con cobertura >80%

 Deploy en AWS

 Seguridad aplicada

 Documentación Swagger

 Código limpio y mantenible

📄 Licencia
MIT License
© 2025 - [Tu nombre o usuario de GitHub]

¿Te gustaría que rellene este README exacto con tus tecnologías reales, enlaces, comandos y estructura final? Solo dime:

¿Vue o React?

¿Nest.js, Grappe o Sinatra?

¿Tu URL de demo?

¿Repo público en GitHub?

¿Base de datos real que usaste?

¿Cómo estructuraste tus carpetas?

Y te lo dejo listo para copiar/pegar.







Dijiste:
TODO ESO PEGO EN EL ARCHIVO READMY


ChatGPT dijo:
¡Sí! 🔥 Todo lo que te mostré es el contenido completo y profesional que debes pegar en tu README.md para tu prueba técnica. Sin embargo, hay varios lugares donde debes reemplazar o completar con tu información real, como:

🔁 Campos que debes actualizar:
Nombre del proyecto: Cambia el título principal.

URLs de producción:

App frontend (https://miapp.cloudfront.net)

API backend (https://api.miapp.com)

Tecnologías que usaste: Marca solo las que realmente usaste ([x]).

Frameworks: Elige entre Vue / React, NestJS / Grappe / Sinatra.

Comandos reales de instalación y test: Ajusta si usas Yarn, pnpm, etc.

Diagrama ERD: Puedes usar el que puse o reemplazarlo por uno generado con dbdiagram.io o Draw.io.

Modelo de carpetas: Cambia si usaste otra estructura.

Rutas y endpoints: Asegúrate de que coincidan exactamente con los de tu backend.

Nombre del autor / licencia: Cambia a tu nombre o username GitHub.

Checklist de entrega: Mantén solo lo que cumpliste.


