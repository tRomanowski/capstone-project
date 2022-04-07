import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const schema = new Schema(
  {
    id: { type: Number },
    title: { type: String },
    image: { type: String },
    summary: { type: String },
    sourceUrl: { type: String },
    missedIngredients: { type: Array },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model('Recipe', schema);
