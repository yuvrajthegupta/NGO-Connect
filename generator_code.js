"use client"
import { Client, Databases, ID } from 'appwrite';
import { useEffect, useState } from 'react';
const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('65f3e9025a6240769d44');
const databases = new Databases(client);

let a=[
    {
      "title": "Learn JavaScript",
      "content": "<p>JavaScript is a programming language that enables you to create dynamically updating content, control multimedia, animate images, and much more. It is the language of the web, used in conjunction with HTML and CSS, to make interactive websites and web applications. Learning JavaScript opens up a world of possibilities in web development.</p>",
      "slug": "learn-javascript",
      "views": 0,
      "author": "",
      "is_published": true
    },
    {
      "title": "Mastering CSS",
      "content": "<p>CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML. It controls the layout, colors, fonts, and other visual aspects of a web page, allowing you to create beautiful and responsive designs. Mastering CSS is essential for web developers looking to create modern and visually appealing websites.</p>",
      "slug": "mastering-css",
      "views": 0,
      "author": "",
      "is_published": true
    },
    {
      "title": "HTML5 Basics",
      "content": "<p>HTML5 is the latest version of HTML (Hypertext Markup Language), the standard markup language for creating web pages and web applications. It introduces new features and improvements, such as native support for video and audio, new semantic elements, and better integration with CSS and JavaScript. Understanding the basics of HTML5 is essential for anyone involved in web development.</p>",
      "slug": "html5-basics",
      "views": 0,
      "author": "",
      "is_published": true
    },
    {
      "title": "Introduction to React",
      "content": "<p>React is a JavaScript library for building user interfaces, developed by Facebook. It allows you to create reusable UI components and build complex UIs with ease. React uses a declarative approach to describe how your UI should look, making it easier to understand and debug your code. This blog post provides an introduction to React and its core concepts.</p>",
      "slug": "introduction-to-react",
      "views": 0,
      "author": "",
      "is_published": true
    },
    {
      "title": "Node.js Fundamentals",
      "content": "<p>Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript code outside of a web browser, opening up the possibility of using JavaScript for server-side programming. Node.js is widely used for building web servers, command-line tools, and desktop applications. This blog post covers the fundamentals of Node.js and how to get started with it.</p>",
      "slug": "node-js-fundamentals",
      "views": 0,
      "author": "",
      "is_published": true
    },
    {
      "title": "Diving into Python",
      "content": "<p>Python is a versatile and powerful programming language that is used in a wide variety of fields, including web development, data science, artificial intelligence, and more. It is known for its readability and simplicity, making it a great choice for beginners and experienced programmers alike. This blog post dives into the basics of Python programming, covering its syntax, data types, control structures, and more.</p>",
      "slug": "diving-into-python",
      "views": 0,
      "author": "",
      "is_published": true
    },
    {
      "title": "The Power of PHP",
      "content": "<p>PHP is a server-side scripting language designed for web development but also used as a general-purpose programming language. It is particularly suited for web development because it can be embedded into HTML pages and runs on a web server, generating dynamic content. PHP is widely used for creating dynamic websites and web applications. This blog post explores the power of PHP and its role in web development.</p>",
      "slug": "the-power-of-php",
      "views": 0,
      "author": "",
      "is_published": true
    },
    {
      "title": "Building APIs with Express.js",
      "content": "<p>Express.js is a web application framework for Node.js, designed for building web applications and APIs. It provides a robust set of features for web and mobile applications, including routing, middleware support, and template engines. This blog post demonstrates how to build APIs with Express.js, covering routing, request handling, middleware usage, and more.</p>",
      "slug": "building-apis-with-express-js",
      "views": 0,
      "author": "",
      "is_published": true
    },
    {
      "title": "Getting Started with MongoDB",
      "content": "<p>MongoDB is a popular open-source NoSQL database that provides high performance, high availability, and easy scalability. It stores data in flexible, JSON-like documents, making it ideal for storing and querying unstructured data. This blog post provides a beginner-friendly introduction to MongoDB, covering installation, basic CRUD operations, and more.</p>",
      "slug": "getting-started-with-mongodb",
      "views": 0,
      "author": "",
      "is_published": true
    },
    {
      "title": "Responsive Web Design",
      "content": "<p>Responsive web design is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes. Responsive web design ensures that users have a good viewing experience no matter what device they are using. This blog post explores the principles of responsive web design and how to create responsive websites using HTML, CSS, and JavaScript.</p>",
      "slug": "responsive-web-design",
      "views": 0,
      "author": "",
      "is_published": true
    }
  ]

for(let index=0;index<a.length;index++){
  const element=a[index]
  const promise = databases.createDocument(
    '65f3f043d2133bf60c97',
    '65f3f0a55b7685c36db1',
    ID.unique(),
    element
    
    );
    promise.then(function (response) {
      console.log(response);
    }, function (error) {
      console.log(error);
    });
}


export default function Home() {
  return (<div>

  </div>
  );
}
