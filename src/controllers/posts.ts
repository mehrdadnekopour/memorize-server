import { Request, Response } from 'express';
import { PostMessage } from 'models';
import mongoose from 'mongoose';

export const getPosts = async (req: Request, resp: Response) => {
  try {
    const postMessages = await PostMessage.find();
    resp.status(200).send(postMessages);
  } catch (err: any) {
    resp.status(404).send({ message: err.message });
  }
};

export const getPost = async (req: Request, resp: Response) => {
  resp.sendStatus(200);

  // try {

  //   const postMessages = await PostMessage.find({});
  //   resp.status(200).send(postMessages);
  // } catch (err) {
  //   resp.sendStatus(500);
  // }
};

export const createPost = async (req: Request, resp: Response) => {
  try {
    const post = req.body;
    const newPost = new PostMessage(post);

    await newPost.save();

    resp.status(201).json(newPost);
  } catch (err: any) {
    resp.status(409).send({ message: err.message });
  }
};

export const updatePost = async (req: Request, resp: Response) => {
  try {
    const { id: _id } = req.params;
    const post = req.body;

    console.log('updating', _id);
    if (!mongoose.Types.ObjectId.isValid(_id))
      return resp.status(404).send('No post with this ID');

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {
      new: true,
    });

    resp.json(updatedPost);
  } catch (err: any) {
    resp.status(409).send({ message: err.message });
  }
};

export const deletePost = async (req: Request, resp: Response) => {
  try {
    const { id: _id } = req.params;
    console.log('deleting ', _id);

    await PostMessage.findByIdAndRemove(_id);
    resp.json({ removedId: _id });
  } catch (err: any) {
    resp.status(400).send({ message: err.message });
  }
};
