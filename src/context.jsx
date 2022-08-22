import React, { Component } from 'react'
import { InfoData } from './data/InfoData';

const ProjectContext = React.createContext();

 class ProjectProvider extends Component {
    state = {
        projects: [],
        loading: true
    }

    componentDidMount(){
        let projects = this.formatData(InfoData)
        // console.log(projects);

        this.setState({
            projects,
            loading: false
        })
    }

    formatData(data){
        let tempData = data.map(data =>{
            // let id = data.id
            // let images= data.image
            let project = {...data};
            return project
        })
        return tempData;
    }

    getProject = slug =>{
        let tempProject = [...this.state.projects];
        const project= tempProject.find((project) => project.slug === slug);
        return project;
    }

    render() {
        return (
            <ProjectContext.Provider 
            value={{ 
                ...this.state,
                getProject: this.getProject
                }}
                >
                {this.props.children}
            </ProjectContext.Provider>
                
        )
    }
}

const ProjectConsumer = ProjectContext.Consumer;

export { ProjectProvider, ProjectConsumer, ProjectContext }

// HIGH ORDER COMPONENT

export function withProjectConsumer(Component){
    return function ConsumerWrapper(props){
        return <ProjectConsumer>
            { value => <Component {...props} context={value}/>}
        </ProjectConsumer>
    }
}