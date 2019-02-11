import { Document } from 'mongoose';

export interface Users extends Document {
  readonly _id: number;
  readonly Name: string;
  readonly Age: number;
}