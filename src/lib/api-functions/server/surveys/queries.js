import db from '@/lib/api-functions/server/db';
import Survey from '@/lib/api-functions/server/surveys/model';

export const fetchSurveys = async (query = {}) => {
  return await Survey.find(query).exec();
};

export const fetchSurvey = async (id) => {
  return await Survey.findById(id).exec();
};

export const fetchUserSurveys = async (id) => {
  const results = await Survey.find({ owner: id }).exec();

  return results;
};

export const add = async (data) => {
  const newSurvey = new Survey(data);
  const result = await newSurvey.save();
  return result;
};

export const update = async (id, updates) => {
  return await Survey.updateOne({ _id: id }, updates);
};

export const updateAnswersArray = async (id, updates) => {
  return await Survey.updateOne({ _id: id }, { $push: { answers: updates } });
};

export const remove = async (id) => {
  return await Survey.deleteOne({ _id: id });
};
