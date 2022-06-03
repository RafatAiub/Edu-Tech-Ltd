import React from 'react';

const Blogs = () => {
    return (
        <div id='blogs' className='fs-5 text-2xl text-justify font-mono'>
            <div className='shadow-xl p-5 rounded m-2'>
                <h3 className='font-bold'>## How will you improve the performance of a React Application?</h3>
                <p>The performance of mission-critical enterprise applications has a direct impact on customer satisfaction, employee productivity, business agility, and profitability.

                    To date, applications written in React are gaining more and more popularity. Developers love building all kinds of React apps because of their ability to handle UI components in browsers. On the other hand, it can cost you dearly. The size of a React application can be quite large for most React applications, which affects performance. The reason for this is that React is an advanced library and does not improve the performance of a website or application on its own. It must be properly configured and optimized in various aspects. Also, if you plan to attract a lot of users to your site, you need to optimize performance in a high-traffic environment to avoid unnecessary hassles.

                    For these reasons, knowing how to use best practices and optimize web applications is essential for both the developer and the product manager. This understanding is useful for ensuring that your React application provides a consistent and better user experience. In this blog, you will find how to speed your react application up and use performance optimization techniques, especially in high traffic scenarios.</p>
            </div>
            <div className='shadow-lg p-5 rounded m-2'>
                <h3 className='font-bold'>## What are the different ways to manage a state in a React application?</h3>
                <p>
                    In React development, keeping track of how your application data changes over time is called state management. By managing the state of your application, you will be able to make dynamic apps that respond to user input. There are many methods of managing state in React, including class-based state management and third-party libraries like Redux. In this tutorial, you’ll manage state on functional components using a method encouraged by the official React documentation: Hooks.

                    Hooks are a broad set of tools that run custom functions when a component’s props change. Since this method of state management doesn’t require you to use classes, developers can use Hooks to write shorter, more readable code that is easy to share and maintain. One of the main differences between Hooks and class-based state management is that there is no single object that holds all of the state. Instead, you can break up state into multiple pieces that you can update independently.

                    Throughout this tutorial, you’ll learn how to set state using the useState and useReducer Hooks. The useState Hook is valuable when setting a value without referencing the current state; the useReducer Hook is useful when you need to reference a previous value or when you have different actions the require complex data manipulations. To explore these different ways of setting state, you’ll create a product page component with a shopping cart that you’ll update by adding purchases from a list of options. By the end of this tutorial, you’ll be comfortable managing state in a functional component using Hooks, and you’ll have a foundation for more advanced Hooks such as useEffect, useMemo, and useContext.

                </p>
            </div>
            <div className='shadow-lg p-5 rounded m-2'>
                <h3 className='font-bold'>## How does prototypical inheritance work?</h3>
                <p>
                    Prototypal inheritance is a language feature that helps in that. In JavaScript, objects have a special hidden property Prototype as named in the specification, that is either null or references another object.

                </p>
            </div>
            <div className='shadow-lg p-5 rounded m-2'>
                <h3 className='font-bold'>## You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h3>
                <p>
                    “Product of array except self” problem, states that you are given an array a [ ]. Print another array p [ ] of the same size such that value at i’th index of array p is equal to the product of all the elements of the original array except element at i’th index in array a.

                </p>
            </div>
            <div className='shadow-lg p-5 rounded m-2'>
                <h3 className='font-bold'>## What is a unit test? Why should write unit tests?</h3>
                <p>
                    Tests can be set to run either a one-time check at a certain time interval or can be run immediately in real-time to review changes. In short, unit tests help developers detect problems immediately, then fix them quickly. With fewer resources spent finding bugs, teams can move on to the next phase of a project.
                    Unit testing is one of the software testing types which includes the initial testing phase where the smallest components or the modules of a software are tested individually. With this method of testing, both testers and developers can isolate each module, identify and fix the system defects at a very early stage of the software development lifecycle (SDLC). Primarily, a unit test verifies different behavioral aspects of the system under test and can be broadly classified into state-based and interaction-based unit testing.
                    A typical unit test consists of three phases which include the first initialization phase where it initializes a small piece of an application it wants to test. The second phase is the addition phase where it adds a stimulus to the system under test and finally, the third phase is the result phase where it observes the resulting application behavior. Evidently, if the observed behavior is consistent with expectations, then the unit test passes else it fails. This indicates there is a problem somewhere in the system under test. These three test phases are named as Arrange, Act and Assert or commonly known as AAA.

                </p>
            </div>

        </div>
    );
};

export default Blogs;