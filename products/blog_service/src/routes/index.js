import express from 'express';
import blogPosts from '../fixtures/blog_posts';

const indexRouter = express.Router();

indexRouter.get('/', (req, res) =>
  res.status(200).json(blogPosts)
);

indexRouter.get('/:id', (req, res) => {
  const blogPostId = req.params.id;
  const blogPost = blogPosts.find(blogPost => blogPost.id === Number(blogPostId));

  res.status(200).json(blogPost);
});

export default indexRouter;