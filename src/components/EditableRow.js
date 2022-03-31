import React from 'react'

const EditableRow = ({editFormData, handleEditFormChange}) => {
    return (
        <tr>
            <td>
                <input type="text" required="required" placeholder="Enter id" name="id" onChange={handleEditFormChange}></input>
            </td>
            <td>
                <input type="text" required="required" placeholder="Enter name" name="name" onChange={handleEditFormChange}></input>
            </td>
            <td>
                <input type="text" required="required" placeholder="Enter email" name="email" onChange={handleEditFormChange}></input>
            </td>
            <td>
                <input type="text" required="required" placeholder="Enter gender" name="gender" onChange={handleEditFormChange}></input>
            </td>
            <td>
                <input type="text" required="required" placeholder="Enter dob" name="dob" onChange={handleEditFormChange}></input>
            </td>
            <td>
                <input type="text" required="required" placeholder="Enter country" name="country" onChange={handleEditFormChange}></input>
            </td>
            <td>
                <input type="text" required="required" placeholder="Enter city" name="city" onChange={handleEditFormChange}></input>
            </td>
        </tr>
    )
}

export default EditableRow