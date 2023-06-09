import mongoose from 'mongoose';
const { Schema } = mongoose;

export const surveySchema = new Schema({
  owner: {
    type: String,
    required: true,
    unique: true,
  },
  surveys: {
    type: Array,
    required: true,
    unique: true
  },
});

const Survey =
  mongoose?.models?.Survey || mongoose.model('Survey', surveySchema);
export default Survey;
