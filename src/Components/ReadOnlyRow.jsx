import React from 'react'


function ReadOnlyRow({ dataItem, handleEditClick, handleDeleteClick}){
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