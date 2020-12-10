import { Schema, model, Document } from "mongoose";

export const DOCUMENT_NAME = "Channel";

export const COLLECTION_NAME = "channels";

export enum ChannelCode {
  DOG = "DOG",
  CAT = "CAT",
  GOAT = "GOAT",
  FISH = "FISH",
  SNAIL = "SNAIL",
  BIRD = "BIRD",
}

export default interface Channel extends Document {
  code: string;
  createdAt?: Date;
  updatedAt?: Date;
  status?: boolean;
  imgUrl?: string;
}

const schema = new Schema({
  code: {
    type: Schema.Types.String,
    required: true,
    enum: [
      ChannelCode.DOG,
      ChannelCode.GOAT,
      ChannelCode.FISH,
      ChannelCode.CAT,
      ChannelCode.SNAIL,
      ChannelCode.BIRD
    ],
  },
  status: {
    type: Schema.Types.Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  updatedAt: {
    type: Date,
    required: true,
  },
  imgUrl: {
    type: Schema.Types.String,
    required: true
  }
});

export const ChannelModel = model<Channel>(
  DOCUMENT_NAME,
  schema,
  COLLECTION_NAME
);
