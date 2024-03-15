import React from 'react';
import Link from 'next/link';

const BlogCard = ({ title, author, metaDesc, readMoreLink ,slug}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-2 text-sm font-bold">Author: {author}</p>
      <p className="text-gray-700 mb-4">{metaDesc}</p>
      <Link href={'/blogpost/'+slug}className="bg-purple-700 text-white py-2 px-4 rounded-md hover:bg-purple-800 cursor-pointer">
        Read More
      </Link>
    </div>
  );
};

export default BlogCard;
