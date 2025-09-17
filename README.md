# Mini Dashboard – Zettabyte Technology Inc.

This project was built as part of the **Frontend Developer Test** for Zettabyte Technology Inc.  

Live Link: [https://mini-dashboard-chi.vercel.app/](https://mini-dashboard-chi.vercel.app/)  
GitHub Repo: [https://github.com/jumpetron/mini-dashboard](https://github.com/jumpetron/mini-dashboard)

---

## Tech Stack
- [Next.js 15 (App Router)](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

## Features:

### 1. Dashboard (`/`)
- Static **summary cards** with placeholder stats (Active Users, Open Posts, Revenue).
- Animated **welcome header** using Framer Motion.
- Animated **stat cards** (staggered fade/slide-in).
- Responsive **area chart** (Recharts) wrapped with Framer Motion for smooth entry animation.

### 2. Posts Page (`/posts`)
- Fetches posts from [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts).
- **Reusable Card component** for displaying post previews.
- Click a post → navigates to dynamic route `/posts/[id]`.
- Loading state displayed with `LoadingSpinner`.
- Error state displayed clearly if fetch fails.
- **Staggered card animations** with Framer Motion.

### 3. Single Post Page (`/posts/[id]`)
- Fetches a single post from JSONPlaceholder dynamically by ID.
- Shows **loading**, **error**, and **empty states**.
- Displays post title, body, and post ID.
- Smooth **entry animation** with Framer Motion (opacity, slide, and scale).
- “Go Back” button navigates back to `/posts`.

### 4. Users Page (`/users`)
- Fetches users from JSONPlaceholder.
- Displays users in a responsive table (Name, Email, Company).
- Clicking a table row opens a **Framer Motion animated modal** with full user details:
  - Name, Email, Phone, Company, Website, City.
- Modal can be closed by clicking the overlay or the close button.
- Loading and error states included.

### Reusability
- **Custom hook**: `useFetch` for API fetching with error & loading handling.
- **Reusable Card** component for consistent UI.

### Getting Started

#### 1. Clone the repository
```bash
git clone https://github.com/jumpetron/mini-dashboard.git
cd mini-dashboard
```

#### 2. Install dependencies
```bash
npm install
# or
yarn install
```

#### 3. Run the development server
```bash
npm run dev
# or
yarn dev
```
```bash
Open http://localhost:3000 with your browser.
```
🔑 Deployment

This project is deployed on Vercel.
Live URL: https://mini-dashboard-chi.vercel.app/
