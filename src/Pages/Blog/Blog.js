import React from 'react';

const Blog = () => {
    return (
        <div className='min-h-screen'>
            <div className='px-[80px] xs:px-4 sm:px-10 my-10 grid grid-cols-2 xs:grid-cols-1 gap-8'>
                <div className='shadow-xl p-8 border'>
                    <h2 className='text-2xl font-semibold pb-2'>Q: Difference between javascript and nodejs?</h2>
                    <p> <b>Answer:</b> NodeJS is a runtime environment for executing JavaScript code.
                        Its a server side environment that runs on the server. Nodejs allows Javascript to be run on the server.
                        <br />
                        Javascript is a scripting language that is used to write code that is executed on the client side. It is mostly known as JS and is used to create web applications. We can said that JavaScript is the updated version of ECMAScript.
                        JavaScript is a high level, dynamic, untyped, and interpreted programming language.</p>
                </div>

                <div className='shadow-xl p-8 border'>
                    <h2 className='text-2xl font-semibold pb-2'>Q: When should you use nodejs and when should you use mongodb?</h2>
                    <p> <b>Answer:</b> We should use nodeJS for API application both relational and non relational databases.
                        It is good for building real time application like messaging, chat, video streaming, and collaboration tools.
                        nodeJS also suitable for microservice application.
                        <br />
                        We should use mongodb for Storing large volumes of data without structure, Using cloud computing and storage and for Rapid development. When we need high accessibility of data with programmed, quick and instant data recovery.</p>
                </div>

                <div className='shadow-xl p-8 border'>
                    <h2 className='text-2xl font-semibold pb-2'>Q: Differences between sql and nosql databases?</h2>
                    <p> <b>Answer:</b> SQL is a relational database management system. mongodb is a non-relational database management system. SQL have fixed schema and mongodb have dynamic schema. SQL is used for storing data in a structured way. mongodb is used for storing data in an unstructured way. SQL database are not suitable for hierarchical data storage. mongodb is suitable for hierarchical data storage. SQL is suitable for complex queries and mongodb is not so good for queries. SQL is vertically scalable and mongodb is horizontally scalable.</p>
                </div>

                <div className='shadow-xl p-8 border'>
                    <h2 className='text-2xl font-semibold pb-2'>Q: What is the purpose of jwt and how does it work?</h2>
                    <p> <b>Answer:</b> JWT is a json web token. It is used to create a token that is sent to the client for authenticate the user. It is used to verify the user.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;