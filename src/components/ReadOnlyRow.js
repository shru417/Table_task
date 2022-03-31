import React from 'react'

const ReadOnlyRow = ({contact, handleEditClick}) => {
    return (
        <tr>
          <td>{contact.id}</td>
          <td>{contact.name}</td>
          <td>{contact.email}</td>
          <td>{contact.gender}</td>
          <td>{contact.dob}</td>
          <td>{contact.country}</td>
          <td>{contact.city}</td>
          <td><button type="button" onClick={(event)=> handleEditClick(event, contact)}>Edit</button></td>
        </tr>
        
    )
}

export default ReadOnlyRow