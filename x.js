"use client"
import BlogCard from '@/components/BlogCard';
import Navbar from '@/components/Navbar';
import { Client, Databases, ID, Query } from 'appwrite';
import { useEffect, useState } from 'react';

export default function Home() {
  const client = new Client();
  const [blogs, setblogs] = useState([])

  function extractAndTruncate(htmlString, maxLength = 100) {
    // Remove HTML tags from the string
    const text = htmlString.replace(/<[^>]*>/g, '');

    // Trim the text to the desired length
    let truncatedText = text.substring(0, maxLength);

    // Add "..." if the text was truncated
    if (text.length > maxLength) {
      truncatedText += '...';
    }

    return truncatedText;
  }



  client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65f3e9025a6240769d44');
  const databases = new Databases(client);

  let promise = databases.listDocuments(
    '65f3f043d2133bf60c97',
    '65f3f0a55b7685c36db1',
    [

    ]
  );

  promise.then(function (response) {
    console.log(response);
    setblogs(response.documents)
  }, function (error) {
    console.log(error);
  });
  return (<div>
    <Navbar />
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Latest Campaigns</h1>
      {blogs.length == 0 && "Loading.."}
      {blogs.map((blog, index) => (<BlogCard key={index}{...blog}metaDesc={extractAndTruncate(blog.content)} />))}
      {/* Add more BlogCard components for additional blog posts */}
    </div>
  </div>
  );
}
