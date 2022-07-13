import React from 'react'

// Genera fila de solo lectura, con un id random, recibe 3 parametros, un dataItem que es el dato que se llena del input, y 2 funciones para manejar los botones.

function ReadOnlyRow({ dataItem, handleEditClick, handleDeleteClick}){

    // Cada td es un elemento dentro de la fila tr. 

    return (
        <tr key={Math.random() * 10000}>
            <td>{dataItem.reason}</td>
            <td>${dataItem.amount}</td>
            <td>{dataItem.date}</td>
            <td>
                <button type='button' onClick={(e) => handleEditClick(e, dataItem)} className='button'>Edit</button>
                <button type='button' onClick={() => handleDeleteClick(dataItem.id)} className='button'>Delete</button>
            </td>
        </tr>
    )
}

export default ReadOnlyRow;