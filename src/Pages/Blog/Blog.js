import { Accordion } from 'flowbite-react';
import React from 'react';
import useTitle from '../../Hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div className='w-2/3 mx-auto my-10 text-left'>
            <Accordion>
                <Accordion.Panel>
                    <Accordion.Title>
                        Difference between SQL and NoSQL
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Here, we break down the most important distinctions and discuss the best SQL and NoSQL database systems available.

                            The five critical differences between SQL vs NoSQL are:
                            <ul>
                                <li>1. SQL databases are relational, NoSQL databases are non-relational.</li>
                                <li>2. SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.</li>
                                <li>3. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</li>
                                <li>4. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</li>
                                <li>5. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</li>
                            </ul>
                        </p>

                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        What is JWT, and how does it work?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            JSON Web Token is an open industry standard used to share information between two entities, usually a client and a server.

                            They contain JSON objects which have the information that needs to be shared. Each JWT is also signed using cryptography to ensure that the JSON contents (also known as JWT claims) cannot be altered by the client or a malicious party
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">
                            JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

                            A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.

                            Once decoded, you will get two JSON strings:

                            The header and the payload.
                            The signature.
                            The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.

                            The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.

                            There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others.

                            The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        What is the difference between javascript and NodeJS?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            JavaScript is a proper high-level programming language used to create web scripts whereas Node.js is a run time environment built on google’s v8 engine.

                            JavaScript is executed in the browser whereas using Node.js gives us the ability to execute JavaScript outside the browser.

                            JavaScript can manipulate DOM or add HTML within whereas Node.js doesn’t have the capability to add HTML.

                            JavaScript is mainly used to create front end web applications or develop client-side whereas Node.js is used on the back end development that is server-side development

                            JavaScript follows the standard of JavaScript when writing programs whereas Node.js is written in C++ while using the v8 engine, it runs JavaScript outside the browser.
                        </p>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            JavaScript requires any running environment as it can execute on any engine such as Firefox’s spider monkey, v8 engine of google chrome, JavaScript core of Safari whereas Node.js runs only on the v8 engine of google chrome.
                        </p>

                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        How does NodeJS handle multiple requests at the same time?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            NodeJS Web Server maintains a limited Thread Pool to provide services to client requests. Multiple clients make multiple requests to the NodeJS server. NodeJS receives these requests and places them into the EventQueue .
                            NodeJS server has an internal component referred to as the EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded. In other words, EventLoop is the listener for the EventQueue.


                        </p>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            So, we have an event queue where the requests are being placed and we have an event loop listening to these requests in the event queue. What happens next?
                            The listener(the event loop) processes the request and if it is able to process the request without needing any blocking IO operations, then the event loop would itself process the request and sends the response back to the client by itself.
                        </p>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            If the current request uses blocking IO operations, the event loop sees whether there are threads available in the thread pool, picks up one thread from the thread pool and assigns the particular request to the picked thread. That thread does the blocking IO operations and sends the response back to the event loop and once the response gets to the event loop, the event loop sends the response back to the client.
                        </p>

                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </div>
    );
};

export default Blog;