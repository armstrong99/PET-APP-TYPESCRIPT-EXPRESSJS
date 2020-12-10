import { Schema, model, Document } from "mongoose";

export const DOCUMENT_NAME = "Channel";

export const COLLECTION_NAME = "channels";

export const enum ChannelCode {
  DOG = "DOG",
  CAT = "CAT",
  GOAT = "GOAT",
  FISH = "FISH",
}

export default interface Channel extends Document {
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
  status?: boolean;
}

const schema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
    enum: [
      ChannelCode.DOG,
      ChannelCode.GOAT,
      ChannelCode.FISH,
      ChannelCode.CAT,
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
});

export const ChannelModel = model<Channel>(
  DOCUMENT_NAME,
  schema,
  COLLECTION_NAME
);
