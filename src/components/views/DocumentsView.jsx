import React from 'react';
import Header from '../Header';
import SideBar from '../SideBar'
import DocumentTable from '../tables/DocumentsTable'

const DocumentsView = () => {
    return (
        <div className="app">
            <SideBar />
            <div className="main-section">
            <Header />
            <DocumentTable />
            </div>
        </div>
        )
} 

export default DocumentsView;