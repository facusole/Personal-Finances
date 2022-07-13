import React from 'react';

function EditableRow({ editFormData, handleEditFormData }) {
    return (
        <tr>
            <td>
                <input 
                type="text" 
                required 
                placeholder='Reason'
                name='reason'
                onChange={handleEditFormData}
                value={editFormData.reason}
                />
            </td>
            <td>
                <input 
                type="number" 
                required 
                placeholder='Amount'
                name='amount'
                onChange={handleEditFormData}
                value={editFormData.amount}
                />
            </td>
            <td>
                <input 
                type="date" 
                required
                name='date'
                onChange={handleEditFormData}
                value={editFormData.date}
                />
            </td>
            <td>
                <button type="submit">Save</button>
            </td>
        </tr>
    )
}

export default EditableRow;