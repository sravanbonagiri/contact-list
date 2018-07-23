const NewContact = (props) => {
  let formFields = {}
 
  return(
    <div className="create-div">
      <input ref={input => formFields.type = input} placeholder='Type'/>
      <input ref={input => formFields.name = input} placeholder='Name' />
      <input ref={input => formFields.title = input} placeholder='Title'/>
      <input ref={input => formFields.phone = input} placeholder='Phone' />
      <input ref={input => formFields.ext = input} placeholder='Ext.'/>
      <input ref={input => formFields.fax = input} placeholder='Fax'/>
      <input ref={input => formFields.email = input} placeholder='Email' />
      <button className="btn btn-primary" onClick={ () => props.handleFormSubmit(formFields.type.value, formFields.name.value,formFields.title.value, formFields.phone.value,formFields.ext.value,formFields.fax.value,formFields.email.value)}>Submit</button>
    </div>
    )
}