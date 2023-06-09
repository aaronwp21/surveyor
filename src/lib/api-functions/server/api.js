import axios from 'axios';

const { VERCEL_BRANCH_URL = 'http://localhost:3000' } = process.env;

let SURVEYS_ENDPOINT;

console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === 'development') {
  SURVEYS_ENDPOINT = `${VERCEL_BRANCH_URL}/api/v1/surveys/`;
} else {
  SURVEYS_ENDPOINT = `https://${VERCEL_BRANCH_URL}/api/v1/surveys/`;
}

export { SURVEYS_ENDPOINT };

export const addSurvey = async (data) => {
  const response = await axios({
    method: 'POST',
    url: SURVEYS_ENDPOINT,
    data,
  });
  return response.data;
};
