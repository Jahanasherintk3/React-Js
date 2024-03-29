import React, { Component } from 'react'
import ContactDetails from './ContactDetails';
import ContactList from './ContactList';
import axios, { Axios } from 'axios';
class ContactApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      sel_Contact:{}
    }
  }
  componentDidMount(){
    Axios.get('https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist')
    .then((response) => {
        this.setState({
            contacts: response.data
        })
    })
    .catch()
  }
  user_Selected_Contact=(contact)=>{
    console.log(contact.name.first)
    this.setState({sel_Contact:contact})
  }
  render() {
    return (
        <div className="container mt-5">
          <div className="row">
            <pre>{JSON.stringify(this.state.contacts)}</pre>
            <pre>{JSON.stringify(this.state.sel_Contact)}</pre>
            <div className="col-md-8">
              {
                this.state.contacts.length>0?<React.Fragment>
                  <ContactList contactData={this.state.contacts}/>
                </React.Fragment>:null
              }
              
            </div>
            <div className="col-md-4">
              <ContactDetails/>
            </div>
          </div>
        </div>
     
    )
  }
}

export default ContactApp