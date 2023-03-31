import React from 'react';
import './Questionnaire.css';

const Questionnaire = () => {
    return (
        <div className='container questionnaire-container'>
            <h1>Questionnaire</h1>
            <div>
                <h3>1. What is the difference between props and state?</h3>
                <h4>Ans: Props and state are both used for managing data in React, but they have some significant differences:

                    Props are used for passing data from a parent component to a child component, while state is used for managing data within a component itself.

                    Props are read-only and cannot be modified by the child component, while state can be updated using the setState() method.
                </h4>
            </div>
            <div>
                <h3>2. How does useState work?</h3>
                <h4>Ans: useState with an initial state value, which returns an array containing the current state value and a function to update it. You can use the state value to display data and the update function to modify the state. When the state is updated, React re-renders the component with the new state value.</h4>
            </div>
            <div>
                <h3>3. What is the purpose of useEffect other than fetching data?</h3>
                <h4>Ans: React's useEffect hook can be used for a number of things besides data fetching. It can be used to update the document title, add event listeners, create animations, clean up effects, manage cookies, and more. It allows you to manage and update component state in response to a wide range of events.</h4>
            </div>
            <div>
                <h3>4. How Does React work?</h3>
                <h4>Ans: React works by using a virtual DOM to efficiently render components based on changes in their state or props. It updates the actual DOM selectively, making the user interface performant. React also uses a component-based architecture, where each component represents a small piece of the user interface.</h4>
            </div>
        </div>
    );
};

export default Questionnaire;