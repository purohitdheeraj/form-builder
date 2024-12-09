# Form Builder App 🚀

This repository contains a dynamic **Form Builder** built with **Next.js**, enabling users to create custom forms, preview them, and track form completeness while filling out the form.

---

### Core Requirements

- **Dynamic Form Creation**: Users can select from 5 input types and add questions dynamically:
  - Short Answer
  - Long Answer
  - Single Select
  - Number
  - URL
- **Form Preview**: Display a live preview of the form after creation.
- **Form Completeness**: A progress bar visually represents the percentage of completed fields while filling the form.
- **Success State**: Show a success message upon form submission.

### Bonus Features

- **Smooth Interactions**: 
  - UI animations for a polished user experience.
  - Interactive form completion progress bar.
- **Flexible Components**:
  - **Standalone Question Component**: A reusable `Question` component to support different input types.
  - **SVG Icon Handling**: SVGs are integrated into the codebase using a combination of inline and icon components, ensuring scalability and performance.
- **Parent-Level Scroll**: Proper scroll management for seamless navigation and interaction.
- **Mobile Responsive**: Ensuring the form builder is fully responsive and works seamlessly on mobile devices.

---

## What I Did Differently ✨

- **Parent-Level Scroll**: Implemented scroll management at the parent level for seamless navigation and interaction.
- **SVG as a Component**: Integrated SVGs as components, making them easily maintainable and customizable.
- **Flexible Question Component**: Developed a reusable `Question` component with local state management and two-way communication.

---

## Tech Stack 🛠️

- **Next.js**
- **TypeScript**
- **Tailwind CSS**
- **ShadCN**

---

## Demo 🎥

[Live Demo](https://form-builder-peerlist.vercel.app/)

---


## Local Setup

To run Form Builder locally, follow these steps:

1. Clone this repository: `git clone https://github.com/purohitdheeraj/form-builder.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open your browser and visit localhost: `http://localhost:3000`

## Screenshots

### Home Page
![image](https://github.com/user-attachments/assets/8b815782-1243-4639-aa07-d40acf895d12)

### Post Job 
![image](https://github.com/user-attachments/assets/d4658e6b-d0fc-432b-b296-520371ceab37)

### Multiple Question Types
![image](https://github.com/user-attachments/assets/17e83885-6bf0-41ed-a4fc-2f4e58e65e2d)

### Dynamic Progress Indicator
![image](https://github.com/user-attachments/assets/bb87acd4-23c0-4cb5-8371-0ad3b1db646c)

### Success Message
![image](https://github.com/user-attachments/assets/c5d57b49-5153-4ab0-8586-6f94e308ac81)




