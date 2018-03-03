import React from 'react';
import '../App.css';

class SelectList extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <select>
                    <option>doe</option>
                    <option>infrastructure 2</option>
                </select>
            </div>
        )
    }
}
export default SelectList
/**the drop down list consists of all the agencies with projects pertaining to the funding category e.g. Infrastructure should have options: DOT, NYCHA, OPS, DEP, DPR */