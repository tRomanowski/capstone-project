import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const schema = new Schema(
  {
    id: { type: Number },
    Image: { type: String },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model('Recipe', schema);
