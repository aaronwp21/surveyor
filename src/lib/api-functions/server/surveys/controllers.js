import { addSurveySchema, updateSurveySchema } from '@/lib/validation/';
import {
  fetchSurvey,
  fetchSurveys,
  fetchUserSurveys,
  add,
  update,
  remove,
} from '@/lib/api-functions/server/surveys/queries';

const getSurveys = async (req, res) => {
  const { id } = req.params;

  try {
    let data = [];
    if (id) {
      data = await fetchSurvey(id);
    } else {
      data = await fetchSurveys();
    }
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

const getUserSurveys = async (req, res) => {
  const {id} = req.params;

  try {
    let data = await fetchUserSurveys(id);
    return res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}

const addSurvey = async (req, res) => {
  let surveyData = { ...req.body };

  console.info(surveyData);

  try {
    surveyData = await addSurveySchema.validate(surveyData);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }

  try {
    const result = await add(surveyData);
    res.status(201).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

const updateSurvey = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: 'No id provided to update' });
  }

  let updates = { ...req.body };

  try {
    updates = await updateSurveySchema.validate(updates);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }

  try {
    const result = await update(id, updates);
    if (result.n === 0) return res.status(404).send({ message: 'Not Found' });
    return res.status(200).send({ message: 'Updated' });
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

const removeSurvey = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: 'No id provided to delete' });
  }

  const query = {
    _id: id,
  };

  try {
    const result = await remove(id);
    if (result.n === 0) return res.status(404).send({ message: 'Not Found' });
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

export { getSurveys, getUserSurveys, addSurvey, updateSurvey, removeSurvey };
