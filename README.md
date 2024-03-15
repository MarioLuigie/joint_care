# JointCare Font-end

## Introduction

This project is a Next.js application utilizing Tailwind CSS for styling and Shadcn Components for dynamic UI interactions, serving as the front-end interface. It communicates with the backend services through REST API.

You can try it out here: **[https://next-fikasp.vercel.app](https://next-fikasp.vercel.app)**

## Technologies

- **[Node.js](https://nodejs.org/en/docs/)** - JavaScript runtime environment for executing server-side code.
- **[Next.js](https://nextjs.org/docs)** - React framework for building efficient and scalable web applications.
- **[TypeScipt](https://www.typescriptlang.org/docs/)** - Typed superset of JavaScript for building maintainable applications.
- **[Tailwind CSS](https://tailwindcss.com/docs)** - Utility-first CSS framework for building custom designs with ease.
- **[Shadcn/UI](https://ui.shadcn.com/docs)** - Comprehensive components library for building modern user interfaces.


## Structure

- `/public` - Static files
  - `/assets` - Images, fonts etc.
- `/src` - Source files of the application
  - `/app` - Application routing
    - `/(auth)` - Routes for authentication
    - `/(root)` - Routes for core application
    - `/api` - API routes
    - `favicon.ico` - Icon displayed in the browser
    - `globals.css` - Global CSS and Tailwind styles
    - `layout.tsx` - Root application layout
  - `/components` - Reusable UI components
    - `/layout` - Layout-related UI components
    - `/shared` - Components used across multiple parts of the app
    - `/ui` - Components specific to the Shadcn library
  - `/database` - Database-related files for MongoDB
    - `/actions` - Server actions to manage database
    - `/models` - Database schemas
  - `/lib` - Shared library
    - `/constants` - Constant values
    - `/types` - TypeScript type definitions
    - `/utils` - Utility functions
  - `middleware.ts` - Authentication middleware for the Clerk
  - `navigation.ts` - Managing navigation routes and links

- `/` - Configurations files in root directory:
  
  - `.gitignore` - List of files to ignore by git
  - `components.json` - Shadcn components configuration
  - `next.config.js` - Configuration file for Next.js
  - `package.json` - Lists project metadata and dependencies
  - `postcss.config` - PostCSS configuration
  - `README.md` - Documentation of the project
  - `tailwind.config.js` - Tailwind CSS configuration
  - `tsconfig.json` - TypeScript configuration

## Setup

Follow these steps to set up the project locally.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)

**Cloning the repository**

```bash
git clone https://github.com/arwcode/joint_care.git
cd joint_care
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.
