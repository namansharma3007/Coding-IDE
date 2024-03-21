# Coding IDE

This project is a coding Integrated Development Environment (IDE) meticulously crafted to empower users in efficiently managing their code snippets. Users can seamlessly register their usernames, store their code snippets, and experience expedited responses through caching. Moreover, it leverages local storage to provide uninterrupted dummy authentication, ensuring users remain logged in until they opt to log out. Upon logging in with a registered username, users gain access to their prior snippets, while newcomers can promptly register an account to begin utilizing the IDE for new code snippets. Additionally, right-click functionality has been disabled for assignment purposes to enhance security measures.

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