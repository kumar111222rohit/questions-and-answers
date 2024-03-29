# Questions And Answers App

This Next.js application  provides a dashboard to play around with performing CRUD operation on questions and answers.

## Authors

- [Rohit kumar](https://github.com/kumar111222rohit)

## Environment Settings

To run this project, node version required
` v20.11.0`

## Local Installation

Clone the project

```bash
  git clone  https://github.com/kumar111222rohit/questions-and-answers.git
```

Go to the project directory

```bash
  cd questions-and-answers
```

Install dependencies

```bash
  npm install or npm i
```

Build the app

```bash
  npm run build
```

Start the app

```bash
  npm run dev
  The app should run on http://localhost:3000
```

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

## Features

- Built on Next.js
- Responsive for mobile and desktop
- Accessibility: Built with WCAG support for inclusive user experience.

- Type Safety: Ensured by TypeScript for enhanced code maintainability.

- React Framework: Utilizes React for efficient component-based development.

- Reusable Components: Promotes modularity and code reusability.
- Localization Ready: Supports potential internationalization efforts.
- Client-Side Rendering (CSR): Enables dynamic updates and interactivity.
- Code Splitting: Optimizes bundle size and loading time.
- Linting and Prettier: Enforces consistent code style and formatting.
- React redux for global state managament
- React Context: Provides centralized state management among components.
- Functional Components and Hooks: Leverages modern React features for component composition.
- API Integration: Seamlessly fetches data from the Rick and Morty API.
- Code Modularization: Organizes code into logical modules for better readability.
- Error Handling: Implements robust error handling mechanisms.
- Unit test for components and APIs setup on jest and react testing library

## Component architecture

- Gloabl state management is done via redux store
- Props sharing among components via react context

![component diagram drawio](https://github.com/kumar111222rohit/questions-and-answers/assets/8679506/ceb8a6d0-8935-4e3c-ba0a-bdbe7ed38b2c)

## Screenshots

- Desktop view
  <img width="1726" alt="Screenshot 2024-03-29 at 15 15 42" src="https://github.com/kumar111222rohit/questions-and-answers/assets/8679506/2eb32114-a956-4839-bd30-78ef0bb0401d">


- Mobile View
  
<img width="470" alt="Screenshot 2024-03-29 at 15 16 10" src="https://github.com/kumar111222rohit/questions-and-answers/assets/8679506/70b813f8-faa7-4291-8d5a-10042f410300">

- Mobile View questions modal
- <img width="470" alt="Screenshot 2024-03-29 at 15 16 16" src="https://github.com/kumar111222rohit/questions-and-answers/assets/8679506/02d3ed09-5ea8-4c83-a776-73ae6163fd37">


- Tootlip
  <img width="1728" alt="Screenshot 2024-03-29 at 15 15 59" src="https://github.com/kumar111222rohit/questions-and-answers/assets/8679506/9ff104ed-1316-476c-b31f-928ce2bf7335">


## Areas of improvement in future

- Do the initial API call on server
- Implement intersection observer to handle infinte list of questions
- add domain level translations support
- add some loaders for API calls
- add some skeleton UI while loading
- add more test coverage as needed
- dark/light mode

## 🚀 About Me

Learning, Unlearning and Re-learning everyday.
