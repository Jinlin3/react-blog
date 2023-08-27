import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ]);

  const [name, setName] = useState('mario');

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  }

  useEffect(() => {
    console.log('use effect ran');
    console.log(name);
  }, [name]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      <button onClick={() => setName('Luigi')}>Change Name</button>
      <p>{ name }</p>
    </div>
  );
}
 
export default Home;

// Use an anonymous function to invoke functions with parameters

// (callback function) .map cycles through arrays

// key property should be used when creating lists in React to distinugish them from each other

// props allow for the passing of data from a parent component to a child component

// (callback function) .filter returns a new array depending on the boolean values of each item

// (hook) useState re-renders the DOM when the state changes

// (hook) useEffect allows for a function to run every render of the DOM
// second argument for useEffect => dependency array
// put values you want useEffect to watch for change in the dependency array
// an empty dependency array allows useEffect to only run the function once