import * as yup from 'yup';

const addSurveySchema = yup
  .object({
    title: yup.string().required(),
    questions: yup.array().required(),
  })
  .required();

const updateSurveySchema = yup
  .object({
    title: yup.string().optional(),
    questions: yup.array().optional(),
  })
  .required();

export { addSurveySchema, updateSurveySchema };
