import * as yup from 'yup';

const addSurveySchema = yup
  .object({
    owner: yup.string().required(),
    surveys: yup.array().required(),
  })
  .required();

const updateSurveySchema = yup
  .object({
    owner: yup.string().optional(),
    surveys: yup.array().optional(),
  })
  .required();

export { addSurveySchema, updateSurveySchema };
