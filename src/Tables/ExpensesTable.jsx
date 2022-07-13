import '../css/App.css';
import { useState } from 'react';
import Expenses from '../Components/Expenses';
import ReadOnlyRow from '../Components/ReadOnlyRow';
import EditableRow from '../Components/EditableRow';

// Funciona exactamente igual que la IncomesTable

function ExpensesTable() {

  const [data, setData] = useState([])

  const addData = (newData) => {
    setData([...data, newData])
  }

  const [editFormData, setEditFormData] = useState({
    id: Math.random() * 10000,
    reason: '',
    amount: '',
    date: ''
  })

  const handleEditFormData = (e) => {
    e.preventDefault()

    const fieldName = e.target.getAttribute('name')
    const fieldValue = e.target.value;

    const newFormData = {
      ...editFormData
    }

    newFormData[fieldName] = fieldValue

    setEditFormData(newFormData)
  }

  const [editRowId, setEditRowId] = useState(null)

  const handleEditClick = (e, dataItem) => {
    e.preventDefault()

    setEditRowId(dataItem.id)

    const formValues = {
      id: dataItem.id,
      reason: dataItem.reason,
      amount: dataItem.amount,
      date: dataItem.date
    }

    setEditFormData(formValues)
  }

  const handleEditFormSubmit = (e) => {
    e.preventDefault()

    const editedData = {
      id: editFormData.id,
      reason: editFormData.reason,
      amount: editFormData.amount,
      date: editFormData.date
    }

    const newData = [...data];

    const index = data.findIndex((dataItem) => dataItem.id === editFormData.id);

    newData[index] = editedData;

    setData(newData)
    setEditRowId(null)
  }

  const handleDeleteClick = () => {
    const newData = [...data]

    const index = data.findIndex((dataItem) => dataItem.id === dataItem)

    newData.splice(index, 1);

    setData(newData)
  }


  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Reason</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((dataItem) => (
              <>
                {editRowId === dataItem.id ?
                  <EditableRow 
                  editFormData={editFormData} 
                  handleEditFormData={handleEditFormData} 
                  /> :
                  <ReadOnlyRow 
                  dataItem={dataItem} 
                  handleEditClick={handleEditClick}
                  handleDeleteClick={handleDeleteClick}
                  />}
              </>
            ))}
          </tbody>
        </table>
      </form>
      <Expenses addData={addData} />
    </div >

  );
}

export default ExpensesTable;