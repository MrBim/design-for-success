
import {loadFirebase} from '../lib/db.js';

export default class Entries extends React.Component {
   

    render(){
        const resources = this.props.db ;
        console.log("the resources: ", resources)
        return (
            <div>
                <li key={resources.id}>
                    <h3 className="title">{resources.name}</h3>
                    <h4>{resources.type}</h4>
                    <p>{resources.description}</p>
                    <a>{resources.link}</a>
                </li>
            </div>
        )
    }
}
