import React from 'react'
import axios from 'axios'

import ProjectList from './ProjectList'

class Categories extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      // agency: this.props.routeParams.agency,
      agency: 'Education',
      organizations: []
    }
  }

  componentDidMount(){
     let path = //will be axios query
     axios.get(path)
     .then(response =>{
       this.setState({
         organizations: response.data
       })
     })
  }

  render(){
    const { agency, organizations } = this.state
    console.log(this.props);
    return(
      <div>
      <h1>{this.props.match.params.category}</h1>
      {organizations.map(org =>(
        <ProjectList name={org.award_lead_city_agency}/>
      ))}
      </div>
    )
  }
}

export default Categories;
