import React from 'react';

//new state: resultsFound - initial state of search; keywordSubmitted - renders on the page after the search.
class Search extends React.Component{
    constructor(){
        super();
        this.state={
            keywordQueryInput:'',
            resultsFound: false,
            results: [],
            keywordSubmitted: ''
        };
    }

//collects user's input and updates this.state;
    handleInput = event => {
        this.setState({
            keywordQueryInput: event.target.value
        })
    }

//uses keywordQueryInput value to fetch query from Federal Stimulus Data API
//stores response in this.results...for now.
    handleSubmit = event => {
        const { keywordQueryInput,results } = this.state;
            fetch("https://data.cityofnewyork.us/resource/9haj-uwpr.json?$q=" + keywordQueryInput + '&$limit=10')
            .then(response => response.json())
            .then(obj=>{
                console.log(obj);
                this.setState({
                    resultsFound: true,
                    results: obj,
                    keywordSubmitted: keywordQueryInput,
                    keywordQueryInput: ''
                })
                console.log(results);
                console.log(this.state.keywordSubmitted);
            })
            .catch((error)=> {
                    console.log(error);
                });
        };
    
    render(){
        const { results, resultsFound, keywordSubmitted, keywordQueryInput }= this.state;
        const resultsLength = results.length;
        const message = (resultsFound === false) ? '' : `Results for '${keywordSubmitted}', ${resultsLength} projects.`;

        return(
            <div>
                <h1>Search By Keyword</h1>
                <h4>To search by keyword, please type in a word, and click the "Submit" button.</h4>
                <input type='text' placeholder='Please type in your keyword here' value={keywordQueryInput} onInput={this.handleInput} />
                <button onClick={this.handleSubmit}>Submit</button>
                <h3>{message}</h3>
                <ol>
                    {results.map(list=>{
                        return <li key={list.payment_id}><p><b>Organization</b>: {list.payment_recipient}<br/> 
                                 <b>Category</b>: {list.funding_category}<br/>
                                 <b>Funding Amount</b>: ${list.payment_value}<br/>
                                 <b>Project Name</b>: {list.project_name}<br/>
                                 <b>Project Description</b>: {list.project_description}   
                              </p></li>
                            })}
                </ol>
                </div>
            
        )
    }
}

export default Search;