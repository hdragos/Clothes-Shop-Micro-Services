import React from 'react';
import { useParams } from 'react-router-dom';
import AsyncLoader from '../async_loader';

const CardContainer = React.lazy(() => import('shared/CardContainer'));
const Wrapper = React.lazy(() => import('shared/Wrapper'));
const Header = React.lazy(() => import('shared/Header'));
const Body = React.lazy(() => import('shared/Body'));
const Body2 = React.lazy(() => import('shared/Body2'));

const BlogPostDetails = () => {
  const { blogPostId } = useParams();
  const [blogPost, setBlogPost] = React.useState(null);

  React.useEffect(() => {
     fetch(`http://localhost:8002/${blogPostId}`)
     .then(
        response => {
          console.log('Successfully fetched data from backend');
          console.log(response);
          return response.json();
        })
     .then(fetchedBlogPost => setBlogPost(fetchedBlogPost))
     .catch(error => {
       console.log('Error while fetching data from the backend');
       console.log(error);
      }); 
  }, []);
  return (
    <AsyncLoader>
      <Wrapper>
        {
          blogPost && <CardContainer>
            <Header>{blogPost.title}</Header>
            <Body>{blogPost.subtitle}</Body>
            <Body2 padding>{blogPost.body}</Body2>
            <Body2 padding>{blogPost.body2}</Body2>
          </CardContainer>
        }
      </Wrapper>
    </AsyncLoader>
  );
};

export default BlogPostDetails;
