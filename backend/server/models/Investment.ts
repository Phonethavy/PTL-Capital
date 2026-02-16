import mongoose, { Schema, Document } from 'mongoose';

export interface IInvestment extends Document {
  companyName: string;
  description: string;
  image: string;
  status: 'Active' | 'Closed';
  displayOrder: number;
  createdAt: Date;
}

const InvestmentSchema: Schema = new Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['Active', 'Closed'],
      default: 'Active',
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

export default mongoose.model<IInvestment>('Investment', InvestmentSchema);
