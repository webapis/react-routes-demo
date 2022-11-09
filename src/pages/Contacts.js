import React from 'react';
import { Helmet } from 'react-helmet-async';
export default function Contacts() {

    return (
        <div>
        <Helmet>
        <title>Contacts</title>
        <meta name='description' content='Beginner friendly page for learning React Helmet.' />
        </Helmet>
        <h1>Contacts Page</h1>
        </div>
        )
}