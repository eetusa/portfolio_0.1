import React from 'react';
import data from "../assets/data/blogs/example_blog.json"

const Blog = () => {
    return (
        <div>{data[0].title}</div>
    );
}

export default Blog;