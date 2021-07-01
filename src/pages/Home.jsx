import React from 'react';
import { Sidebar } from '../components';
import { Resume } from '../components';

const Home = () => {
    return (
        <div className="container">
            <div className="columns is-gapless">
                <div className="column">
                    <Resume />
                </div>
                <div className="column is-one-quarter">
                    <Sidebar />
                </div>
            </div>
        </div>
    )
}

export default Home;
