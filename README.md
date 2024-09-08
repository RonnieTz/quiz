# Quiz Game

## Introduction

The Quiz Game is a customizable quiz application built with React and TypeScript. Users can create their own quiz by selecting categories, difficulty levels (easy, medium, hard), and the number of questions. The game presents questions one at a time, and users can navigate through the quiz by selecting answers and clicking the **Next** button. After the quiz is completed, the results are displayed in two tabs: one showing the number of correct answers and the other providing a detailed breakdown of all user responses.

## Features
- Select multiple categories and difficulty levels.
- Customize the number of questions.
- Fetches questions dynamically from an API based on user preferences.
- Displays real-time feedback with next question navigation.
- Review results in two tabs: total correct answers and a breakdown of all selected answers.

## Challenges and Lessons Learned

A key challenge in developing the Quiz Game was integrating an API to dynamically fetch questions based on the user's selected categories, difficulty levels, and number of questions. Ensuring smooth interaction between the API and the app, while handling various user inputs, required careful management of asynchronous data fetching in React with TypeScript. Another challenge was maintaining efficient state management to track user progress and answers, ensuring seamless transitions between questions. This project enhanced my skills in working with APIs, managing complex state in React, and creating a smooth, responsive user experience.

## How to Use

1. Open the app and select your desired categories, difficulty levels (easy, medium, hard), and the number of questions.
2. Click **Start** to begin the quiz.
3. For each question, select an answer and click the **Next** button to proceed.
4. After completing all questions, click **See Results** to view your performance.
5. In the results section, you can view your score in one tab and review all your answers in the second tab.

## Installation and Setup

To run this project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/RonnieTz/quiz.git
    ```

2. Navigate to the project directory:
    ```bash
    cd quiz
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm start
    ```

5. Open your browser and go to `http://localhost:3000` to view the app.

## Technologies Used
- **React**: JavaScript library for building user interfaces.
- **TypeScript**: For static typing and improving code quality.
- **API Integration**: Fetches questions dynamically from an external API.
- **CSS**: For custom styling.



