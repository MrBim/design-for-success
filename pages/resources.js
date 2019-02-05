import Layout from '../components/MyLayout.js';
import Entry from '../components/Entries.js'
import {loadFirebase} from '../lib/db.js';

export default class Entries extends React.Component {
    static async getInitialProps() {  
        let firebase = await loadFirebase()
        let result = await new Promise((resolve, reject) => {
            firebase.firestore().collection('resources')
            .get()
            .then((snapshot) => {
                let data = []
                snapshot.forEach((doc) => {
                    data.push(
                         Object.assign({
                            id: doc.id
                        }, doc.data())
                    ) 
                })
                resolve(data)
            })
            .catch(error => {
                reject([])
            });
        })
        return {dbContent: result}
    }

    render(){
        const resources = this.props.dbContent ;
        console.log("const resources: ", resources)
        return (
            <Layout>
                <h1>Resources for Success</h1>
                {/* <Entries db={resources}/> */}
                {resources.map(resource => 
                    // <li key={resource.id}>
                    //     <h3 className="title">{resource.name}</h3>
                    //     <h4>{resource.type}</h4>
                    //     <p>{resource.description}</p>
                    //     <a>{resource.link}</a>
                    // </li>

                    <Entry db={resource} ></Entry>
                )}
            </Layout>
        )
    }
}