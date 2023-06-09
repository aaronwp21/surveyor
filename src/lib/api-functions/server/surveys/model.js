import mongoose from 'mongoose';
const { Schema } = mongoose;

export const surveySchema = new Schema({
  owner: {
    type: String,
    required: true,
    unique: true,
  },
  surveys: {
    title: {
      type: String,
      required: true,
    },
    questions: {
      type: Array,
      required: true,
    },
  },
});

const Survey =
  mongoose?.models?.Survey || mongoose.model('Survey', surveySchema);
export default Survey;
