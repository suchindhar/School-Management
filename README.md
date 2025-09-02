🎓 School Management System (Next.js + MySQL)

A simple **School Management System** built with **Next.js 13 (App Router)**, **React Hook Form**, **MySQL**, and **TailwindCSS**.  
This project allows users to **Add, View, Edit, and Delete schools**, along with **image upload support**.  
It is fully **responsive** and works on both **desktop and mobile**.


🚀 Features

✅ Add School with validation (React Hook Form)  
✅ Store school data in MySQL database (`schools` table)  
✅ Upload and store images in `/public/schoolImages`  
✅ View list of all schools with responsive cards  
✅ Edit and Delete school entries  
✅ Mobile-first, responsive UI with TailwindCSS  
✅ Modern UI with hover effects & animations  


📸 Screenshots

🏠 Home Page

<img width="1905" height="855" alt="image" src="https://github.com/user-attachments/assets/4db3cebd-cc4a-4f14-a3de-13ba41e5ab8c" />


➕ Add School
<img width="1878" height="872" alt="image" src="https://github.com/user-attachments/assets/9a5f482c-b90f-46c0-a2f9-5efed168e5cc" />


📚 Show Schools

<img width="1845" height="840" alt="image" src="https://github.com/user-attachments/assets/849b5637-d609-4e0a-86a7-d2aeb5f03e41" />




🛠️ Tech Stack

- **Next.js 13 (App Router)**
- **React Hook Form**
- **TailwindCSS**
- **MySQL (mysql2 driver)**
- **Node.js**




🗄️ Database Setup

Run the following SQL commands in MySQL:

sql
-- Create database
CREATE DATABASE IF NOT EXISTS school_db;

-- Create a dedicated user
CREATE USER 'school_app_user'@'localhost' IDENTIFIED BY 'app_password_123';

-- Grant privileges
GRANT ALL PRIVILEGES ON school_db.* TO 'school_app_user'@'localhost';
FLUSH PRIVILEGES;

-- Use database
USE school_db;

-- Create schools table
CREATE TABLE schools (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name TEXT NOT NULL,
  address TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  contact BIGINT NOT NULL,
  image TEXT,
  email_id TEXT NOT NULL
);



⚙️ Installation & Setup

 1. Clone repo

git clone https://github.com/your-username/school-management.git
cd school-management

2. Install dependencies
npm install


3. Configure environment variables

Create a `.env.local` file in root:

```
DB_HOST=localhost
DB_USER=school_app_user
DB_PASSWORD=app_password_123
DB_NAME=school_db
```
4. Run development server

npm run dev


✨ Future Enhancements

* 🔍 Add search & filter functionality
* 📱 Progressive Web App (PWA) support
* 🗺️ Integrate Google Maps for school location
* 📊 Dashboard with analytics


 👨‍💻 Author

* Suchindhar RM
* GitHub: [Suchindhar](https://github.com/suchindhar)

Do you want me to also **create the screenshot placeholders folder (`/screenshots`) with example Markdown image links** so you can just drop your images in?
```
