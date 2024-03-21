import axios from "axios";
import { languageId } from "../constants/constants";

/**
 * {
      'content-type': 'application/json',
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': 'ec55bec4c6mshe5e771636d22845p1b600fjsnd40f7154e635',
      'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
    },
 */
const headers = {
  'content-type': 'application/json',
  'Content-Type': 'application/json',
  'X-RapidAPI-Key': 'ec55bec4c6mshe5e771636d22845p1b600fjsnd40f7154e635',
  'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
};

const apiURL = process.env.VITE_API_URL;

async function getLanguages() {

  const options = {
    method: 'GET',
    url: 'https://judge0-ce.p.rapidapi.com/languages',
    headers: {
      'X-RapidAPI-Key': '1bd6833320msh30ef75aacc7aaeep1069e0jsn438194e72c06',
      'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    console.log(response.data.filter(item=>item.name.includes("Python")));
  } catch (error) {
    console.error(error);
  }
}

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