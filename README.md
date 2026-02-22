# 🧩 Zavisoft Frontend Implementation Task

🚀 Live Demo: [[https://savisoft.vercel.app/](https://savisoft.vercel.app/)]  
📂 GitHub Repository: [[https://github.com/istiakhasan/ZaviSoft](https://github.com/istiakhasan/ZaviSoft)]

---

## 📌 Project Overview

This project is a frontend implementation based on the provided Figma design for Zavisoft’s Frontend Task.

The goal was to accurately translate the design into a fully responsive, functional web application while maintaining:

- Pixel-perfect UI
- Clean architecture
- Proper state management
- Organized data fetching
- Loading, error, and empty states handling

---

## 🛠️ Tech Stack

| Category | Technology Used |
|-----------|-----------------|
| Framework | Next.js (App Router) |
| Language | JavaScript |
| Styling | Tailwind CSS |
| UI Library | Material UI (MUI) |
| State Management | Redux Toolkit |
| Data Fetching | RTK Query |
| Deployment | Vercel (or your platform) |

---

## 🌐 API Integration

Used the Platzi Fake Store API:

- Products  
  https://fakeapi.platzi.com/en/rest/products/

- Categories  
  https://fakeapi.platzi.com/en/rest/categories/

### Implemented Features

✅ Product Listing (Landing Page)  
✅ Product Details Page (Dynamic Routing)  
✅ Categories List Integration  
✅ Loading States  
✅ Error States  
✅ Empty States  

---

## 📁 Folder Structure
src/
│
├── app/ # Next.js App Router pages
│ ├── page.js # Landing page
│ ├── product/[id]/ # Product Details page
│
├── components/ # Reusable UI components
│ ├── ProductCard
│ ├── ProductDetails
│ ├── CategorySection
│ ├── Loader
│ └── Layout components
│
├── redux/ # Redux Toolkit + RTK Query setup
│ ├── api/ # API services
│ ├── store.js
│ └── slices
│
├── helpers/ # Utility/helper functions
│
├── lib/ # Configurations / reusable logic
│
├── assets/ # Images and static assets
│



---

## 🏠 Pages Implemented

### 1️⃣ Landing Page

- Product list fetched using RTK Query
- Categories fetched from API
- Responsive grid layout
- Loading skeleton UI
- Error handling UI
- Empty state UI

---

### 2️⃣ Product Details Page

- Dynamic routing using product ID
- Detailed product information
- Category display
- Responsive layout
- API-based rendering

---

## 🎯 State Management Strategy

- Global state managed using **Redux Toolkit**
- API layer handled with **RTK Query**
- Clean separation between UI components and API logic
- Scalable architecture for future features

---

## 🎨 UI & Design Fidelity

- Followed Figma design carefully
- Maintained spacing, typography, and colors
- Tailwind used for layout and responsiveness
- MUI used for enhanced UI components
- Fully responsive across:
  - Desktop
  - Tablet
  - Mobile

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/istiakhasan/ZaviSoft
cd ZaviSoft


2️⃣ Install Dependencies
npm install
3️⃣ Run Development Server
npm run dev

Visit:

http://localhost:3000
🏗️ Production Build
npm run build
npm start