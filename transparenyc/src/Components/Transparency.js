import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import axios from 'axios';
import '../App';

class Transparency extends React.Component {
    constructor() {
        super()
        this.state = {
            agencies: []
        }
    }
    renderSomething =()=>{
        return(
            <div>Hey</div>
        )
    }


    componentDidMount() {
        axios
            .get('https://data.cityofnewyork.us/resource/9haj-uwpr.json?$select=funding_category&$' +
                'group=funding_category')
            .then(response => {
                console.log(response.data)
                let agenciesArr = []
                response
                    .data
                    .forEach(elem => {
                        return agenciesArr.push(elem.funding_category)
                    })
                console.log("agencies Arr", agenciesArr)
                this.setState({agencies: agenciesArr})
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        console.log("state:", this.state)
        const {agencies} = this.state
        return (
            <div className="App">
                {agencies.map((elem) => {
                    return <div className="link">
                        <Link to={`/category/${elem}`}>
                            {elem}
                        </Link>
                        <div>$10,000,000</div>
                    </div>
                })}

                {/* <Route exact path='/transparency' render={ this.renderUserList } /> */}
                <Route path='/category' component={this.renderSomething}/>
                {/* <Route path='/doe' render={this.renderDoeInfo}/> */}
            </div>
        );
    }
}
export default Transparency
