import React from 'react'
import axios from 'axios'

import ProjectList from './ProjectList'
import SelectList from './SelectList';

class Categories extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      organizations: []
    }
  }

  // componentDidReceiveProps() {
  //   console.log("Im in cwrp1!!")

  //   let { organizations } = this.state;
  //   let path = `$where=funding_category='${this.props.match.params.category}'&$group=award_lead_city_agency&$select=award_lead_city_agency`;
  //    axios.get("https://data.cityofnewyork.us/resource/9haj-uwpr.json?" + path)
  //    .then(response => {
  //      console.log(response.data)
  //      let emptyArr = [];
  //      response.data.forEach(agency => { emptyArr.push(agency.award_lead_city_agency) });
  //      this.setState({
  //        organizations: emptyArr
  //      })
  //    })
  // }

  componentDidMount() {
    console.log("Im in did mount")

      let { organizations } = this.state;
      let path = `$where=funding_category='${this.props.match.params.category}'&$group=award_lead_city_agency&$select=award_lead_city_agency`;
       axios.get("https://data.cityofnewyork.us/resource/9haj-uwpr.json?" + path)
       .then(response => {
         console.log(response.data)
         let emptyArr2 = [];
         response.data.forEach(agency => { emptyArr2.push(agency.award_lead_city_agency) });
         this.setState(() => {
           console.log('setting state!');
           return {organizations: emptyArr2}
       })
    })
  }

  componentWillReceiveProps() {
  console.log("Im in cwrp2!!")

    let { organizations } = this.state;
    let path = `$where=funding_category='${this.props.match.params.category}'&$group=award_lead_city_agency&$select=award_lead_city_agency`;
     axios.get("https://data.cityofnewyork.us/resource/9haj-uwpr.json?" + path)
     .then(response => {
       console.log(response.data)
       let emptyArr2 = [];
       response.data.forEach(agency => { emptyArr2.push(agency.award_lead_city_agency) });
       this.setState(() => {
         console.log('setting state!');
         return {organizations: emptyArr2}
     })
  })
}

  render(){
    console.log('PROPS', this.props);
    console.log("StATTEEEE:", this.state)
    const { organizations } = this.state
    return(
      <div>
         <h1>{this.props.match.params.category}</h1>
     <SelectList values={ organizations }/>
      </div>
    )
  }
}

export default Categories;
