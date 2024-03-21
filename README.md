# Coding IDE

This project is a coding Integrated Development Environment (IDE) designed to empower users to efficiently manage their code snippets. Users can register their usernames, save their code snippets, and benefit from caching for swift responses. Additionally, this project utilizes local storage for seamless dummy authentication, allowing users to stay logged in until they choose to log out. Upon logging in with a registered username, users can access their previous snippets, while new users can swiftly register an account to utilize the IDE for new code snippets. ANd also

## Demo

Experience the live demo: [https://coding-ide-submission.netlify.app/](https://coding-ide-submission.netlify.app/)


## Prerequisites

* Before running this project, ensure you have acquired various APIs and tokens, and place them in the `.env` folder.

## Requirements

* Backend API: This serves as your backend API for database interactions.
```
VITE_API_URL [Your backend API]
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


## IMPORTANT

During code execution, you might encounter errors such as "Compilation error/Internal server error." Please note that this behavior is intentional and is left as part of our production process. If you face this error, simply run the code again or wait a few seconds after clicking the run button. The code will execute successfully on the second attempt, allowing you to save your code without any hindrance.