import React from 'react';
import { Helmet } from 'react-helmet-async';
export default function Home (){

    return (
        <div>
        <Helmet>
        <title>Home</title>
        <meta name='description' content='Home page' />
        </Helmet>
        <h1>Home Page</h1>
        </div>
        )
}