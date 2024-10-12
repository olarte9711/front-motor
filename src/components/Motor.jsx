import React from 'react';
import Header from './Header';
import SideBar from './SideBar'
import MainContent from './MainContent';

const Motor = () => {
    return (
    <div className="app">
        <SideBar />
        <div className="main-section">
        <Header />
        <MainContent />
        </div>
    </div>
    )
}

export default Motor;