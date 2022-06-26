import { model, Schema, Model, Document } from 'mongoose';

interface IPostMessageAttrs {
  title: String;
  message: String;
  creator: String;
  tags: [String];
  selectedFile: String;
  likeCount: Number;
  createdAt: Date;
}

interface IPostMessageDoc extends Document {
  title: String;
  message: String;
  creator: String;
  tags: [String];
  selectedFile: String;
  likeCount: Number;
  createdAt: Date;
}

interface IPostMessageModel extends Model<IPostMessageDoc> {
  build(attrs: IPostMessageAttrs): IPostMessageDoc;
}

const postSchema = new Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

postSchema.statics.build = (attrs: IPostMessageAttrs) => new PostMessage(attrs);

export const PostMessage = model<IPostMessageDoc, IPostMessageModel>(
  'PostMessage',
  postSchema
);
