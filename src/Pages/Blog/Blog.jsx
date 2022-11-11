import React from "react";
import useTitle from "../../Hooks/useTitle";

const Blog = () => {
  useTitle('Blog')
  return (
    <section className="bg-gray-800 pt-14 pb-40">
      <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <h2 className="text-2xl text-white font-semibold sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 mb-8 dark:text-gray-400">
          These are the important question and answer
        </p>
        <div className="space-y-4">
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none text-white">
              Difference between SQL and NoSQL
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              SQL databases are vertically scalable, while NoSQL databases are
              horizontally scalable. SQL databases are table-based, while NoSQL
              databases are document, key-value, graph, or wide-column stores.
              SQL databases are better for multi-row transactions, while NoSQL
              is better for unstructured data like documents or JSON.{" "}
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none text-white">
              What is JWT, and how does it work?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              JSON Web Token (JWT) is an open standard (RFC 7519) that defines a
              compact and self-contained way for securely transmitting
              information between parties as a JSON object. This information can
              be verified and trusted because it is digitally signed.{" "}
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none text-white">
              What is the difference between javascript and NodeJS?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400 ">
              JavaScript is a simple programming language that can be used with
              any browser that has the JavaScript Engine installed. Node. js, on
              the other hand, is an interpreter or execution environment for the
              JavaScript programming language.{" "}
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none text-white ">
              How does NodeJS handle multiple requests at the same time?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400 ">
              NodeJS receives multiple client requests and places them into
              EventQueue. NodeJS is built with the concept of event-driven
              architecture. NodeJS has its own EventLoop which is an infinite
              loop that receives requests and processes them.{" "}
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Blog;
