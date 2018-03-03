import React from 'react'
import axios from 'axios'

import ProjectList from './ProjectList'

class Categories extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      organizations: []
    }
  }

  componentDidRecieveProps() {
    let { organizations } = this.state;
    let path = `$where=funding_category='${this.props.match.params.category}'&$group=award_lead_city_agency&$select=award_lead_city_agency`;
     axios.get("https://data.cityofnewyork.us/resource/9haj-uwpr.json?" + path)
     .then(response => {
       console.log(response.data)
       response.data.forEach(agency => { organizations.push(agency.award_lead_city_agency) });
       this.setState({
         organizations: organizations
       })
     })
  }
  
  componentWillReceiveProps() {
    let { organizations } = this.state;
    let path = `$where=funding_category='${this.props.match.params.category}'&$group=award_lead_city_agency&$select=award_lead_city_agency`;
     axios.get("https://data.cityofnewyork.us/resource/9haj-uwpr.json?" + path)
     .then(response => {
       console.log(response.data)
       response.data.forEach(agency => { organizations.push(agency.award_lead_city_agency) });
       this.setState({
         organizations: organizations
       })
     })
  }

  render(){
    const { organizations } = this.state
    return(
      <div>
      <h1>{this.props.match.params.category}</h1>
      {organizations.map(org =>(
        <p>
          {org}
        </p>
        // <ProjectList name={org.award_lead_city_agency}/>
      ))}
      </div>
    )
  }
}

export default Categories;
