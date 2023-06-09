import mongoose from 'mongoose';
const { Schema } = mongoose;

export const surveySchema = new Schema({
  owner: {
    type: String,
    required: true,
  },
  surveys: {
    type: Array,
    required: true,
  },
  answers: {
    type: Array,
    required: true,
  }
});

const Survey =
  mongoose?.models?.Survey || mongoose.model('Survey', surveySchema);
export default Survey;
