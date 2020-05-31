import React from 'react';
import Strapi from 'strapi-sdk-javascript/build/main';
import ProjectsList from './components/ProjectsList';
import Header from './components/Header'
import About from './components/About'


const strapi_url = 'http://localhost:1337';
const strapi = new Strapi(strapi_url);

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: []
        }
    }
    async componentDidMount() {
        try {
            const projects = await strapi.getEntries('projects')
            this.setState({ projects });
        } catch (err) {
            alert(err);
        }
    }
    render() {
        return (
            <div>
                <Header />
                <ProjectsList projects={this.state.projects} base_url={strapi_url} />
                <About />
            </div>
        )
    }
}
export default App;