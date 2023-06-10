import axios from "axios";

let host;

if (process.env.NODE_ENV === 'development') {
  host = 'http://localhost:3000'
} else {
  host = 'https://surveyor-git-staging-aaronwp21.vercel.app/'
}

export const SURVEYS_ENDPOINT = `${host}/api/v1/surveys/`

console.log(SURVEYS_ENDPOINT)

export const addSurvey = async (data) => {
  const response = await axios({
    method: "POST",
    url: SURVEYS_ENDPOINT,
    data
  });
  return response.data
}