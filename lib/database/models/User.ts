import { model, Schema, Document } from "mongoose";
import ChannelModel from "./Channels";
export const DOCUMENT_NAME = "User";
export const COLLECTION_NAME = "users";

export default interface User extends Document {
  name: string;
  email: string;
  password: string;
  channels?: ChannelModel[];
  createdAt?: Date;
  updatedAt?: Date;
}

const schema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
    trim: true,
    maxlength: 100,
  },
  email: {
    type: Schema.Types.String,
    required: true,
    unique: true,
    trim: true,
    select: false,
  },
  password: {
    type: Schema.Types.String,
    required: true,
    select: false,
  },
  channels: {
    type: [
      {
        type: Schema.Types.ObjectId,
        ref: "Channel",
      },
    ],
    required: true,
    select: false,
  },
  createdAt: {
    type: Date,
    required: true,
    select: false,
  },
  updatedAt: {
    type: Date,
    required: true,
    select: false,
  },
});

export const userModel = model<User>(DOCUMENT_NAME, schema, COLLECTION_NAME);
