import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ]);
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" />
      <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs" />
    </div>
  );
}
 
export default Home;

// Use an anonymous function to invoke functions with parameters

// (callback function) .map cycles through arrays

// key property should be used when creating lists in React to distinugish them from each other

// props allow for the passing of data from a parent component to a child component

// (callback function) .filter returns a new array depending on the boolean values of each item