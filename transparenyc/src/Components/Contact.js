import React from 'react'
import axios from 'axios'

class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            officials: []
        }
    }

    componentDidMount() {
        const {officials} = this.state;
        let path = `$where=city='NEW YORK'`
        axios
            .get('https://data.ny.gov/resource/n7ms-5kh9.json?' + path)
            .then(response => {
                console.log("response:", response)
                this.setState({officials: response.data})
            })
            .catch(error => {
                console.log("error:", error)
            })
    }

    render() {
        console.log("the STATEEEEEEEE:", this.state)
        const {officials} = this.state
        return (
            <div className="officials-container">
                <div class="officials">
                    <h1>Officials of NYC</h1>
                    {officials.map((official, idx) => <div key={idx} className="official-info">
                        <p>Official Name: {official.public_authority_name}</p>
                        <p>Address: {official.address}</p>
                        <p>Zip Code: {official.zip}</p>
                        {official.website
                            ? <p>Website: <a href={`${official.website}`} target="_blank">{official.website}</a></p>
                            : ""}
                    </div>)}
                </div>
            </div>
        )
    }
}

export default Contact;