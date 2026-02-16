import mongoose, { Schema, Document } from 'mongoose';

export interface IMedia extends Document {
  fileName: string;
  fileType: string;
  url: string;
  createdAt: Date;
}

const MediaSchema: Schema = new Schema(
  {
    fileName: {
      type: String,
      required: true,
    },
    fileType: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IMedia>('Media', MediaSchema);
