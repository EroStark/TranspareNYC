import React from 'react'
import axios from 'axios'
import currencyFormatter from 'currency-formatter'
 


class ProjectList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: []
    }
  }

  componentDidMount() {
    const { category, agency } = this.props;
    let path = `$where=award_lead_city_agency='${agency}' AND funding_category='${category}'&$LIMIT=50`
    axios
      .get('https://data.cityofnewyork.us/resource/9haj-uwpr.json?' + path)
      .then(response => {
        this.setState({projects: response.data})
      })
      .catch(error => {
        console.log("error:", error)
      })
  }

  componentWillReceiveProps(nextProps) {
    const { category, agency } = nextProps;
    let path = `$where=award_lead_city_agency='${agency}' AND funding_category='${category}'&$LIMIT=50`
    axios
      .get('https://data.cityofnewyork.us/resource/9haj-uwpr.json?' + path)
      .then(response => {
        this.setState({projects: response.data})
      })
      .catch(error => {
        console.log("error:", error)
      })
  }

  render() {
    const { projects } = this.state
    let total = projects.reduce((total, currElem) => {
        return currElem.payment_value 
          ? total + Number(currElem.payment_value) 
          : total + 0
        }, 0
      );
    return (
      <div>
        <h1>Select an agency: {this.props.agency}</h1>
        <h4>Total Funds Awarded: {currencyFormatter.format(total, { code: 'USD' })}</h4>
        <div className="project-container">
          {projects.map((project, idx) => 
            <div key={idx} id="project">
              <p>Project Name: {project.project_name}</p>
              <p>Payment Value: {currencyFormatter.format(Number(project.payment_value), { code: 'USD' })}</p>
              <p>{project.funding_source}</p>
              <p>Description: {project.project_description}</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default ProjectList;