"use client"
import Navbar from '@/components/Navbar'
import React, { useState } from 'react'
import { Client, Databases, ID, Query } from 'appwrite';

export default function Page({ params }) {
    const [blog, setBlog] = useState()
    const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("65f3e9025a6240769d44")

const databases = new Databases(client);

let promise = databases.listDocuments(
    '65f3f043d2133bf60c97',
    '65f3f0a55b7685c36db1',
    [
        Query.equal('slug',params.slug)
    ]
);

promise.then(function (response) {
    console.log(response);
    setBlog(response.documents[0])
}, function (error) {
    console.log(error);
});
  return (<div>
    
</div>)

}
