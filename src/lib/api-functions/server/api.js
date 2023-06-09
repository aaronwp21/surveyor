import axios from "axios";

const {
  API_KEY='http://localhost:3000'
} = process.env;

export const SURVEYS_ENDPOINT = `${API_KEY}/api/v1/surveys/`;

export const addSurvey = async (data) => {
  const response = await axios({
    method: "POST",
    url: SURVEYS_ENDPOINT,
    data
  });
  return response.data
}