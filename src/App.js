import React from 'react';
import ProjectsList from './components/ProjectsList';
import Header from './components/Header'
import About from './components/About'

const App = () => {
    return (
        <div>
            <Header />
            <ProjectsList />
            <About />
        </div>
    )
}


export default App;