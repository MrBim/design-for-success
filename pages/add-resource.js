import Layout from '../components/MyLayout.js';
import {loadFirebase} from '../lib/db.js';

export default class AddResource extends React.Component {
    state = {
        name: 'name',
        type: 'type',
        description: 'Description',
        link: 'Link'
    };

    handleNameChange =(e) => {
        this.setState({name: e.target.value});
    }

    handleTypeChange =(e) => {
        this.setState({type: e.target.value});
    }

    handleDescriptionChange =(e) => {
        this.setState({description: e.target.value});
    }

    handleLinkChange =(e) => {
        this.setState({link: e.target.value});
    }
    
    submitEntry = (e) => {
        e.preventDefault()
        console.log("name: " + this.state.name);
        console.log("type: " + this.state.type);
        console.log("description: " + this.state.description);
        console.log("link: " + this.state.link);
        
        let firebase = loadFirebase()

        firebase.firestore().collection('resources')
            .set({
                name: this.state.name,
                type: this.state.type,
                description: this.state.description,
                link: this.state.link
              });
        console.log("click!")
            
        
        
    
    }

    render(){
        return(
             <Layout>
                <h1>Add Resources</h1>
                <form>
                    <label>name</label>
                    <input type="text" name="password" placeholder="Name" value={this.state.name} onChange={this.handleNameChange}/>
                    <label>type</label>
                    <input type="text" name="type" placeholder="Type" value={this.state.type} onChange={this.handleTypeChange}/>
                    <label>description</label>
                    <input type="text" name="description" placeholder="Description" value={this.state.description} onChange={this.handleDescriptionChange}/>
                    <label>link</label>
                    <input type="text" name="link" placeholder="Link" value={this.state.link} onChange={this.handleLinkChange}/>
                    

                   <button onClick={e => this.submitEntry(e)}>Submit</button>
                </form>
            </Layout>
        )
    }   
}