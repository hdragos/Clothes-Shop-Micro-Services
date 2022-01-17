import React from 'react';
import styled from 'styled-components';
import AsyncLoader from '../async_loader';
import BlogPostListItem from '../blog_post_list_item';

const Wrapper = React.lazy(() => import('shared/Wrapper'));

const BlogPostList = () => {
  const [blogPosts, setBlogPosts] = React.useState([]);

  React.useEffect(() => {
     fetch('http://localhost:8002')
     .then(
        response => {
          console.log('Successfully fetched data from backend');
          console.log(response);
          return response.json();
        })
     .then(fetchedBlogPosts => setBlogPosts(fetchedBlogPosts))
     .catch(error => {
       console.log('Error while fetching data from the backend');
       console.log(error);
      }); 
  }, []);
  
  return (
    <AsyncLoader>
      <Wrapper>
        <BlogPostListLayout>
          {
            blogPosts.map((blogPost) => (
              <BlogPostListItem
                key={blogPost.title}
                blogPost={blogPost}
              />
            ))
          }
        </BlogPostListLayout>
      </Wrapper>
    </AsyncLoader>
  );
};


const BlogPostListLayout = styled.div`
  padding: 30px 0;
`;

export default BlogPostList;
