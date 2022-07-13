import React from 'react';

// Genera fila editable, en la que muestra los valores que se llenaron antes en el value y guarda los nuevos valores con el onChange, el onSubmit se maneja desde el form que engloba toda la table en el IncomesTable para guardar los datos modificados.

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