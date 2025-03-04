# Angular Blog App with SSR (Server-Side Rendering)

## Project Description
The **Angular Blog App** is a sample blogging platform that includes user registration and login. It uses Angular (with SSR) and an Express server for server-side rendering. It allows creating and editing blog posts, searching through posts, managing user accounts, and integrates JWT authentication mechanisms.

## Features
- **Post Management**: Creating, editing, and deleting blog posts (images, descriptions, titles).
- **Search**: A simple search function to filter blog posts.
- **Authentication & Authorization**: Login and signup, handling JWT tokens, with logic in `AuthService`.
- **Account Management**: Form for updating user data (name, email, password).
- **Navigation**: A navigation bar that shows different links depending on the user’s login state.
- **SSR (Server-Side Rendering)**: The file `server.ts` works with `CommonEngine` to render Angular pages server-side.

## Showcase
Some key views (brief overview):
1. **Login Page** – a form for user login.  
2. **Registration Page** – creating a new user account.  
3. **Main Blog View** – a list of all added posts with details.  
4. **Add Post** – a form for providing an image URL, title, and content.  
5. **Account Management** – editing user data (name, email, passwords).

> **Note:** You can extend this project with additional features such as pagination, comments, or rating.

---

## Documentation
- **Structure & Architecture**:  
  - Built on Angular (v15+ or newer) with server-side rendering.  
  - Integrates with a Node-based Express server using `CommonEngine`.  
- **Source Code**:  
  - Contains multiple components and services (e.g., `AuthService`, `DataService`, `UserService`).  
- **Angular Commands**:
  - `ng build` – builds the app in production mode.
  - `ng serve` – runs a local development server (without SSR).
- **Styling**:
  - Uses Bootstrap, Angular Material, and Font Awesome for UI elements.

---

## Technologies Used
- **Angular** (v15+ or higher)
- **TypeScript**
- **Bootstrap & Font Awesome** (UI/Styles)
- **Angular Material** (dialogs, form-fields, buttons)
- **Express** (Node.js) with SSR (`CommonEngine`)
- **JWT** (token-based login)
- **npm** for package management

---

## Installation & Dependencies
- **Step 1**: Clone the repository
  - ```bash
    git clone https://github.com/your-username/angular-blog-ssr.git
    cd angular-blog-ssr
    ```
- **Step 2**: Install dependencies
  - ```bash
    npm install
    ```

## Building the Application
- **Build with SSR enabled**:
  - ```bash
    npm run build:ssr
    ```
  - This creates the `dist` folder with both the browser build and server build.

- **Run with SSR**:
  - ```bash
    npm run serve:ssr
    ```
  - By default, the app runs on `http://localhost:4000`.
  - Change the port by setting `PORT` (e.g., in a `.env` file or script).

---

## Usage
- **Open** `http://localhost:4000` in your browser.
- **Login**: Enter your credentials. If you do not have an account, go to the **Registration** page.
- **Manage Posts**: Once logged in, you can add, edit, or delete blog posts.
- **Manage Account**: Update your user data in the account management section.
- **Server-Side Rendering Check**: Disable JavaScript in your browser to see the SSR in action.

---

## API Endpoints
Below are example endpoints (often served at `http://localhost:3001/api`):

- **Authentication**:
  - `POST /user/auth` – login (returns JWT)
  - `POST /user/create` – create new user
  - `DELETE /user/logout/{userId}` – logout (removes token on the server side)

- **User**:
  - `GET /user/details` – fetch current user info
  - `PUT /user/update` – update user data (name, email, password)

- **Blog Posts**:
  - `GET /posts` – list all posts
  - `GET /post/{id}` – fetch a single post by ID
  - `POST /posts` – create a new post
  - `PUT /post/{id}` – edit an existing post
  - `DELETE /post/{id}` – delete a post by ID

> **Note:** Endpoint naming or authentication requirements can differ based on your server setup.

---

## Development
- **Extending Components**:
  - Add features such as comments, ratings, or pagination.
- **Testing** (Jasmine/Karma for Angular):
  - ```bash
    ng test
    ```
- **Additional Config**:
  - Scripts in `package.json` (`build:ssr`, `serve:ssr`, `dev:ssr`) handle different build/serve modes.
  - A *Dockerfile* can be added for containerization and simplified deployment.

---

## Contact
If you have any questions or suggestions, feel free to reach out or open an issue:

- **Email**: `your.email@example.com`
- **GitHub**: [YourRepo](https://github.com/YourRepo)
- **LinkedIn**: [YourLinkedInProfile](https://linkedin.com/in/example)

Thank you for your interest in the **Angular Blog App with SSR**!  
Any contributions or pull requests are highly appreciated.
