import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const schema = new Schema(
  {
    name: { type: String },
    githubName: { type: String },
    password: { type: String },
    recipes: { type: Object },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model('User', schema);
