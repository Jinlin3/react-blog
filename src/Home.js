import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
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

// use this command to run the server: npx json-server --watch data/db.json --port 8000