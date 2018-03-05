import React from 'react'
import axios from 'axios'

const apiKey = 'iQek1ysuFGHEbqrkqHuzSkPoxjj43boxVzSx2KWY'



class Representatives extends React.Component{
  constructor(){
    super()

    this.state = {
      senators: [],
      representatives: []
    }
  }

  componentDidMount(){
    const { senators, representatives } = this.state
    const senateInstance = axios.create({
      baseURL: 'https://api.propublica.org/congress/v1/members/senate/NY/current.json',
      headers: {'X-API-Key': apiKey}
    })
    const representativeInstance = axios.create({
      baseURL: 'https://api.propublica.org/congress/v1/members/house/NY/current.json',
      headers: {'X-API-Key': apiKey}
    })

    senateInstance.get('https://api.propublica.org/congress/v1/members/senate/NY/current.json')
    .then(response =>{
      this.setState({
        senators: response.data.results
      })
    })
    .catch(error =>{
      console.log('Failure on senators')
    })

    representativeInstance.get('https://api.propublica.org/congress/v1/members/house/NY/current.json')
    .then(response =>{
      this.setState({
        representatives: response.data.results
      })
    })
    .catch(error =>{
      console.log('Failure on representatives')
    })
  }

  render(){
    const { senators, representatives } = this.state

    return(
      <div>
        <h1>New York State Senators and Representatives</h1>
        <h2>Senators</h2>
        {senators.map(senator =>(
          <div>
            <h3>{senator.name}</h3>
            <p>{senator.role}</p>
            <p>{senator.party === 'D' ? 'Democrat' : 'Republican'}</p>
          </div>
        ))}
        <h2>House Representatives</h2>
        {representatives.map(rep =>(
          <div>
            <h3>{rep.name}</h3>
            <p>{rep.role}</p>
            <p>District: {rep.district}</p>
            <p>{rep.party === 'D' ? 'Democrat' : 'Republican'}</p>
          </div>
        ))}
      </div>
    )
  }
}

export default Representatives
