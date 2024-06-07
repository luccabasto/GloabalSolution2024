import mongoose, { Document, Model, ObjectId } from 'mongoose';

// Interface para o documento de usuário
interface IUser extends Document {
  _id: ObjectId;
  username: string;
  email: string;
  password: string;
  img?: string;
  isAdmin: boolean;
}

// Interface para o documento de post
interface IPost extends Document {
  title: string;
  desc: string;
  img?: string;
  userId: string;
  slug: string;
}

// Schema de usuário
const userSchema = new mongoose.Schema<IUser>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      maxlength: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      maxlength: 50,
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// Schema de post
const postSchema = new mongoose.Schema<IPost>(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    userId: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

// Exportando os modelos e as interfaces
export const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User", userSchema);
export const Post: Model<IPost> = mongoose.models.Post || mongoose.model<IPost>("Post", postSchema);
export type { IUser, IPost };
