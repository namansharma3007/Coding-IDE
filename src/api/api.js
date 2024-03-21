import axios from "axios";
import { languageId } from "../constants/constants";

const apiURL = import.meta.env.VITE_API_URL;
const headers = {
  'content-type': 'application/json',
  'Content-Type': 'application/json',
  'X-RapidAPI-Key': import.meta.env.VITE_X_RAPID_API_KEY,
  'X-RapidAPI-Host': import.meta.env.VITE_X_RAPID_API_HOST,
};


// judgeCE api running
export const generateCodeToken = async (language, sourceCode, stdin) => {

  const options = {
    method: 'POST',
    url: 'https://judge0-ce.p.rapidapi.com/submissions',
    params: {
      base64_encoded: 'false',
      fields: '*'
    },
    headers: headers,
    data: {
      language_id: languageId[language],
      source_code: sourceCode,
      stdin: stdin
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const tokenSubmission = async (token) => {
  const options = {
    method: 'GET',
    url: `https://judge0-ce.p.rapidapi.com/submissions/${token}`,
    params: {
      base64_encoded: 'false',
      fields: '*'
    },
    headers: headers
  };
  try {
    const response = await axios.request(options);
    if (response.data.status.description === "Processing") {
      await new Promise(resolve => setTimeout(resolve, 1000));
      return tokenSubmission(token);
    } else {
      return response.data;
    }
  } catch (error) {
    console.error(`An error occured while running token, ${error}`);
    return {errorPersonalised:"Compilation Error"}
  }
};




// postgre SQL queries
export const getIndividualDetail = async (username) => {
  try {
    const response = await axios.post(`${apiURL}/getIndividualUser`, { username: username });
    const data = response?.data;
    return data
    return data;
  } catch (error) {
    console.error(`An error occured while fetching data, ${error}`);
  }
}
export const insertUserName = async (username) => {
  try {
    const response = await axios.post(`${apiURL}/insertUsername`, { username: username });
    return response;
  } catch (error) {
    console.error(`An error occured while fetching data, ${error}`);
  }
}

export const getSubmissionDetailsViaUsername = async (username) => {
  try {
    const response = await axios.post(`${apiURL}/fetchSubmissionByUserName`, { username: username });
    return response;
  } catch (error) {
    console.error(`An error occured while fetching data, ${error}`);
  }
}

export const insertSubmissionToken = async (userid, submission_token) => {
  const options = {
    user_id: userid,
    submission_token: submission_token
  }
  try {
    const response = await axios.post(`${apiURL}/insertSubmissionToken`, options);
    return response;
  } catch (error) {
    console.error(`An error occured while fetching data, ${error}`);
  }
}