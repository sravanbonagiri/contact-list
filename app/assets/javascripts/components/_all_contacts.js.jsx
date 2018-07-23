const AllContacts = (props) => {
var contacts = props.contacts.map((contact, index) => {
    return(
      <tr key={index}>
        <td>{contact.type}</td>
        <td>{contact.name}</td>
        <td>{contact.title}</td>
        <td>{contact.phone}</td>
        <td>{contact.ext}</td>
        <td>{contact.fax}</td>
        <td>{contact.email}</td>
        <td><button onClick={ () => props.handleDelete(contact) }>Delete</button></td>
      </tr>
    )
  })

return(
  <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th className="col-md-2">
              Type
            </th>
            <th className="col-md-2">
              Name
            </th>
            <th className="col-md-2">
              Title
            </th>
            <th className="col-md-2">
              Phone
            </th>
            <th className="col-md-2">
              Ext.
            </th>
            <th className="col-md-2">
              Fax
            </th>
            <th className="col-md-2">
              Email
            </th>
            <th className="col-md-2">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {contacts}
        </tbody>
      </table>
    )
}