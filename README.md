# 🍊 Batloung Fruits — Distribution Management System

> # 🍎 Batloung Fruits Distribution Management System

> **Fresh produce distributed from trusted South African suppliers to street vendors in Maseru, Lesotho.**

---

## 👥 Group Members

| No. | Full Name | Student Number |
|---:|---|---|
| 1 | Thapelo Moeno | 901020404 |
| 2 | Liteboho Matiase | 901020413 |
| 3 | Karabo Anna Noka | 901020421 |
| 4 | Tsokoliso Makompo | 901021267 |
| 5 | Relebohile Makoa | 901020405 |
| 6 | Kekeletso Rakheane | 901020411 |
| 7 | Mamakakamela Tabitha Makhaba | 901020407 |

---

## 🚀 Quick Start (How to Run)

### Prerequisites

- **Node.js** v18 or higher ([Download Node.js](https://nodejs.org))
- **MySQL** 8.0 or higher running locally
- MySQL Workbench or another MySQL client (optional)

---

### ⚡ One-Click Setup (Windows)

1. Make sure the MySQL service is running using MySQL Installer or Windows Services.
2. Double-click **`SETUP-DATABASE.bat`** to create the database, tables and seed data.
3. Double-click **`START-APP.bat`** to launch the backend and frontend and open the application in your browser.

---

### Manual Setup

#### Step 1 — Set Up the Database

Open MySQL Workbench or another MySQL client and run these files in order:

```text
database/schema.sql       ← Creates the database and all tables
database/seed.sql         ← Inserts the main sample data
database/seed_extra.sql   ← Inserts additional sample data
```

Then configure the backend environment variables using `backend/.env.example`.

Create your own `backend/.env` file and enter your local MySQL credentials and a secure JWT secret.

Install the backend dependencies and run the seed script:

```bash
cd backend
npm install
npm run seed
```

#### Step 2 — Start the Backend API

```bash
cd backend
npm start
```

The backend API runs at:

`http://localhost:5000`

For development mode with automatic reload:

```bash
npm run dev
```

#### Step 3 — Start the Frontend

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

The frontend runs at:

`http://localhost:5173`

Open your browser and visit:

**http://localhost:5173**

---

## 🔐 Login Credentials

The following are the sample demonstration accounts:

| Role | Email | Password |
|---|---|---|
| Administrator | admin@batloung.co.ls | admin123 |
| Sales Representative | sales@batloung.co.ls | sales123 |

**Note:** These are demonstration credentials. Change default passwords before deploying the application in a real environment.

---

## 📊 What's in the System

| Feature | Description |
|---|---|
| 🍎 Fruits | 12 seeded varieties, including apples, bananas, oranges, mangoes and grapes |
| 🚛 Suppliers | 12 supplier companies across all 9 South African provinces |
| 🏪 Vendors | 16 street vendors registered across Maseru, Lesotho |
| 📦 Products | 36 product configurations (12 fruits × 3 box sizes) |
| 🛒 Orders | 42 sample orders |
| 🛍️ Purchases | 46 sample purchases |
| 💰 Currency | Maloti (M / LSL) |

**Box sizes:** Small, Medium and Large.

**Important assignment requirement:** The assignment specifies five initial fruits: apples, bananas, oranges, mangoes and grapes. Ensure the final database seed data reflects this requirement before submission.

---

## 🏗️ Project Structure

```text
batloung-fruits-restyled/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── middleware/
│   │   └── auth.js
│   ├── routes/
│   │   └── API route files
│   ├── server.js
│   ├── seed.js
│   └── .env.example
│
├── database/
│   ├── schema.sql
│   ├── seed.sql
│   └── seed_extra.sql
│
├── frontend/
│   ├── public/
│   │   └── images/
│   └── src/
│       ├── api/
│       ├── components/
│       ├── context/
│       ├── pages/
│       └── styles/
│           └── app.css
│
├── SETUP-DATABASE.bat
├── START-APP.bat
└── README.md
```

---

## 🌐 API Endpoints

The application uses a REST API developed with Node.js and Express.js.

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/login` | User login and JWT token generation |
| GET | `/api/fruits` | List fruits with search and active filters |
| GET | `/api/products` | List products with stock quantities |
| GET | `/api/suppliers` | List suppliers with province filtering |
| GET | `/api/vendors` | List registered street vendors |
| GET | `/api/stock` | View current stock from the movement ledger |
| POST | `/api/stock` | Record incoming stock purchases |
| POST | `/api/stock/adjust` | Perform manual stock adjustments |
| GET | `/api/orders` | List orders with status filtering |
| POST | `/api/orders` | Create a new order |
| PUT | `/api/orders/:id/status` | Update order status and process stock changes |
| GET | `/api/reports/dashboard` | Retrieve dashboard summary statistics |
| GET | `/api/reports/sales-by-fruit` | View revenue by fruit |
| GET | `/api/reports/sales-by-vendor` | View revenue by vendor |
| GET | `/api/reports/purchases-by-province` | View purchase costs by South African province |
| GET | `/api/reports/available-stock` | View the available stock report |

---

## ⚙️ Environment Variables

Create a `.env` file inside the backend directory using `.env.example` as a guide.

Example configuration:

```env
PORT=5000
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=batloung_fruits
JWT_SECRET=your_long_random_secret
JWT_EXPIRES_IN=8h
CLIENT_ORIGIN=http://localhost:5173
```

**Security note:** Do not upload your real `.env` file or private credentials to GitHub or include them in the final submission ZIP. Only include `.env.example` with placeholder values.

---

## 🧪 Testing

The following operations should be tested before final submission:

1. Log in using the Administrator account.
2. Log in using the Sales Representative account.
3. Register and manage suppliers.
4. Register and manage street vendors.
5. View and manage fruits and products.
6. Record incoming stock and confirm that available stock increases.
7. Create an order for a registered vendor.
8. Verify that the system prevents orders exceeding available stock.
9. Complete an order and confirm that stock decreases.
10. Cancel an order and confirm that stock is not deducted.
11. View the dashboard and available reports.

Only report tests as successful after performing and verifying them.

---

## 💼 Business Rules

- Orders must belong to registered street vendors.
- Every order must contain at least one item.
- Order quantities must be greater than zero.
- Orders cannot exceed available stock.
- Completing an order deducts the ordered quantity from stock.
- Cancelling an order does not deduct stock.
- Products are associated with fruits and box sizes.
- The system supports Small, Medium and Large box sizes.
- Product prices and order totals are calculated and validated by the server.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React.js | Frontend user interface |
| Vite | Frontend development and build tool |
| React Router | Page navigation |
| Recharts | Dashboard charts and reports |
| Node.js | Backend runtime |
| Express.js | REST API development |
| MySQL | Relational database |
| mysql2 | MySQL database connection |
| JWT | User authentication |
| bcrypt | Password hashing |
| Axios | Frontend API communication |

---

## 🔒 User Roles and Access Control

The system supports two user roles:

**Administrator**
- Manage fruits and products.
- Manage suppliers.
- Manage box sizes.
- Manage stock and purchases.
- Register and manage street vendors.
- Manage customer orders.
- Access dashboard and reports.

**Sales Representative**
- View available products.
- Register street vendors.
- Create and view orders.
- Update order statuses according to assigned permissions.

---

## 📍 Business Location

**Company:** Batloung Fruits Distribution

**Operating Location:** Maseru, Lesotho

**Supplier Locations:** Nine provinces of South Africa.

---

## 📝 Conclusion

The Batloung Fruits Distribution Management System is designed to improve the management of fruit distribution operations between South African suppliers and street vendors in Maseru, Lesotho.

The system provides a centralised platform for managing fruits, suppliers, products, stock, vendors, orders and business reports.

It aims to improve stock accuracy, supplier traceability, order processing and the overall efficiency of the distribution process.

---

**Batloung Fruits — Freshness You Can Trust.**

*Maseru, Lesotho.*