import mongoose, { Schema, Document } from 'mongoose';

export interface ITeamMember extends Document {
  name: string;
  position: string;
  bio: string;
  photo: string;
  displayOrder: number;
}

const TeamMemberSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    displayOrder: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<ITeamMember>('TeamMember', TeamMemberSchema);
