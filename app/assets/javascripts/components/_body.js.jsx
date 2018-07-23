class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.addNewContact = this.addNewContact.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

handleFormSubmit(type, name, title, phone, ext, fax, email){ 
  let body = {type: type, name: name, title: title, phone: phone, ext: ext, fax: fax, email: email}
  console.log(body)
  this.addNewContact(body)
}

addNewContact(contact){
    this.setState({
      contacts: this.state.contacts.concat(contact)
    })
    debugger;
  }

handleDelete(contact) {
  var index = -1;   
  var clength = this.state.contacts.length;
    for( var i = 0; i < clength; i++ ) {
        if( this.state.contacts.name === contact.name ) {
            index = i;
            break;
        }
    }
  var contacts = [...this.state.contacts];
  contacts.splice(index, 1);
  this.setState({contacts});
}

componentDidMount(){
  fetch('/api/v1/contacts.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ contacts: data }) });
  }
render(){
    return(
      <div className="react-bs-table">
        <NewContact handleFormSubmit={this.handleFormSubmit}/>
        <AllContacts contacts={this.state.contacts} handleDelete={this.handleDelete} />
      </div>
    )
  }
}