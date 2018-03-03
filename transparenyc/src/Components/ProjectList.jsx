import React from 'react'
import axios from 'axios'

class ProjectList extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      name: this.props.name,
      projects: []
    }
  }

  componentDidMount(){
    let path = //axios call for everything by an agency
    axios.get(path)
    .then(response =>{
      this.setState({
        projects: response.data
      })
    })
    .catch(error =>{
      this.setState({
        name: 'Xavier',
        projects: [{project_name: 'Hi', payment_value: 20000, funding_source: 'Google'}]
      })
    })
  }

  render(){
    const { name, projects } = this.state
    return(
      <div>
        <h1>{name}</h1>
        {projects.map(project =>(
          <p>project.project_name</p>
          <p>project.payment_value</p>
          <p>project.funding_source</p>
        ))}
      </div>
    )
  }
}

export default ProjectList 
