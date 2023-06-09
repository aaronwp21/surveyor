import axios from "axios";

const {
  host='http://localhost:3000'
} = process.env;

console.log(host)

export const SURVEYS_ENDPOINT = `${host}/api/v1/surveys/`;

export const addSurvey = async (data) => {
  const response = await axios({
    method: "POST",
    url: SURVEYS_ENDPOINT,
    data
  });
  return response.data
}