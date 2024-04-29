

## Overview

Summitwatches is a web application that allows users to explore and purchase luxury watches. It offers a range of features, including viewing a catalog of luxury watches, individual product details, user authentication, managing a shopping cart, and placing orders.

## Preview

![mobile preview](mobile-preview.gif)
![desktop preview](desktop-preview.gif)

## Tech Stack

This project is built using the following technologies:

- **Frontend:**

  - React
  - Redux
  - React Router
  - Bootstrap

- **Backend:**
  - NestJS
  - Prisma
  - MySQL

## Features

1. **Homepage:** Users can browse a catalog of luxury watches, view product details, change individual item quantity and add items to their shopping cart.

2. **Product Details:** Clicking on a product allows users to view detailed information about a specific luxury watch, check if it's in stock, add a note to the item before adding it to cart.

3. **User Authentication:** The application includes a login page for user authentication, currently users can login with provided sample account.

4. **Cart Modal:** Users can view the contents of their shopping cart as a modal. The cart modal provides options to remove individual products and clear the entire cart.

5. **Cart Page:** Users can access a dedicated cart page where they can manage their cart more extensively. Features include editing product comments, changing quantities, and removing products. Cart page also displays total cost of cart items.

6. **Order Page:** Logged in users can complete their purchase by filling out a form with their client details, including shipping and payment information. This page also displays order summary.

7. **Redux State Management:** The application employs Redux for managing and syncing the shopping cart and user authentication state across components.

## Getting Started

To run the Luxury Watch Store locally, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/monte-dev/final_project_jewellery_fullstack.git
   ```

2. Install dependencies for both the frontend and backend::

   ```
   cd final_project_jewellery_fullstack/client
   npm install
   cd ../server
   npm install
   ```

3. Configure database in .env file, provide address for mysql db and secret phrase:
   ```
   DATABASE_URL="mysql://username:password@dbaddress"
   JWT_SECRET="secretphrase"
   ```
4. Start the development server for both the frontend and backend:

   ```
   # Frontend
   cd final_project_jewellery_fullstack/client
   npm start

   # Backend
   cd ../server
   npm start
   ```

5. Access the application in your web browser at http://localhost:3000.
