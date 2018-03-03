import React from 'react';

/*
This.state explanation: keywordQueryInput - initial user input; resultsFound - initially set to false === 0;
results - gather API information; keywordSubmitted: takes keywordQueryInput and renders on page with results;
*/
class Search extends React.Component{
    constructor(){
        super();
        this.state={
            keywordQueryInput:'',
            resultsFound: false,
            results: [],
            keywordSubmitted: '',
            noResultMessage: '',
        };
    }

//handleInput - collects user's input and updates keywordQueryInput;
    handleInput = event => {
        this.setState({
            keywordQueryInput: event.target.value
        })
    }

/*
handleSubmit - uses keywordQueryInput value to fetch query from Federal Stimulus Data API. If response length is > 0, updates
resultsFound to true; appends response into results; keywordQueryInput.value is appended to keywordSubmitted,
and keywordQueryInput is reset back to ''.
*/
    handleSubmit = event => {
        const { keywordQueryInput,results } = this.state;
            fetch("https://data.cityofnewyork.us/resource/9haj-uwpr.json?$q=" + keywordQueryInput + '&$limit=10')
            .then(response => response.json())
            .then(obj=>{
                console.log(obj);
                if(obj.length > 0){
                this.setState({
                    resultsFound: true,
                    results: obj,
                    keywordSubmitted: keywordQueryInput,
                    keywordQueryInput: ''
                })
                console.log(results);
                console.log(this.state.keywordSubmitted);
                } else {
                  this.setState({
                    results: [],
                    resultsFound: false,
                    noResultMessage: "No results founds. Please try again."
                  });
                  console.log(this.state.noResultMessage); 
                } 

            })
            .catch((error)=> {
                    console.log(error);
                });
        };

/*
on the render - two new variables: results.length; one message to render both keyword and number of results (even though
    demo version is limited to 10.
*/    
    render(){
        const { results, resultsFound, keywordSubmitted, keywordQueryInput,noResultMessage }= this.state;
        const resultsLength = results.length;
        const message = (resultsFound === false) ? '' : `Results for '${keywordSubmitted}', ${resultsLength} projects.`;

        return(
            <div>
                <h1>Search By Keyword</h1>
                <h4>To search by keyword, please type in a word, and click the "Submit" button.</h4>
                <input type='text' placeholder='Please type in your keyword here' value={keywordQueryInput} onInput={this.handleInput} />
                <button onClick={this.handleSubmit}>Submit</button>
                <h4>{message}</h4>
                <h4>{noResultMessage}</h4>
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