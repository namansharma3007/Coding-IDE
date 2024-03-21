# Coding IDE

* **Empowering IDE:** This project offers a meticulously crafted Integrated Development Environment (IDE) tailored to streamline the management of code snippets, fostering efficiency and productivity for users.

* **Seamless User Experience:** Users can effortlessly register their usernames, securely store their code snippets, and enjoy expedited responses facilitated by caching mechanisms, ensuring a smooth and responsive user experience.

* **Enhanced Authentication:** Leveraging local storage, the IDE ensures uninterrupted dummy authentication, allowing users to remain logged in until they actively choose to log out, thus enhancing convenience and accessibility.

* **User Accessibility:** Upon logging in with a registered username, users can readily access their previous snippets, while newcomers can promptly register an account, facilitating easy access to the IDE for creating and managing new code snippets. Additionally, to bolster security measures, right-click functionality has been disabled for assignment purposes.

* **Optimized Fetching:** Caching via Redis has been implemented to expedite the fetching of submissions, further enhancing the efficiency and responsiveness of the IDE.

* **Dummy User Access:** Submissions can be conveniently checked using the dummy user: `dummy123`, ensuring seamless testing and evaluation of the IDE's functionalities.

## Demo

Experience the live demo: [https://coding-ide-submission.netlify.app/](https://coding-ide-submission.netlify.app/)


## Prerequisites

* Before running this project, ensure you have acquired various APIs and tokens, and place them in the `.env` folder.

#### `.env` folder requirements

* Backend API: This serves as your backend API for database interactions.
```
VITE_API_URL
```
* Upstash/Redis Token and URL from [https://upstash.com/](https://upstash.com/)
```
VITE_UPSTASH_REDIS_REST_URL
```
```
VITE_UPSTASH_REDIS_REST_TOKEN
```

* JudgeCE Rapid API Key and Rapid API Host from [https://rapidapi.com/judge0-official/api/judge0-ce](https://rapidapi.com/judge0-official/api/judge0-ce)

```
VITE_X_RAPID_API_KEY
```
```
VITE_X_RAPID_API_HOST
```

## Installation

* Please make sure you have `.env` folder setup with all the required variables before running this code.
* To run Coding IDE locally, follow these steps:

1. Clone the repository:

```
git clone https://github.com/namansharma3007/Coding-IDE.git
```

2. Navigate into the project directory:

```
cd Coding-IDE
```

3. Install dependencies using npm:

```
npm install
```

4. Start the development server:

```
npm run dev
```

Open your browser and visit http://localhost:5173 to view the application.

## IMPORTANT

During code execution, you might encounter errors such as "Compilation error/Internal server error." Please note that this behavior is intentional and is left as part of our production process. If you face this error, simply run the code again or wait a few seconds after clicking the run button. The code will execute successfully on the second attempt, allowing you to save your code without any hindrance.