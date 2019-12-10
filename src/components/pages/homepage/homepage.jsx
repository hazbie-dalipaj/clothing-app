import React from 'react';
import './homepage.scss';
import Directory from '../../directory/Directory';

const HomePage = ({ history }) => (
    <div className = 'homepage'>
        <Directory history = { history }/>
    </div>
)
export default HomePage;