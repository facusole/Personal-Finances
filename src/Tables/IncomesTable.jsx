import '../css/App.css';
import { Fragment, useState } from 'react';
import Incomes from '../Components/Incomes';
import ReadOnlyRow from '../Components/ReadOnlyRow';
import EditableRow from '../Components/EditableRow';

function IncomesTable() {

  // data es un array de objetos, utilizado luego para poder crear cada fila de la tabla y addData es la funcion para actualizar el estado del componente
  
  const [data, setData] = useState([])

  const addData = (newData) => {
    setData([...data, newData])
  }

  // Este hook es utilizado para editar la row editable. Tiene las mismas propiedades que la row de solo lectura.

  const [editFormData, setEditFormData] = useState({
    id: Math.random()*10000, // El id era necesario para poder targetear valores y eliminarlos 
    reason:'',
    amount:'',
    date:''
  })

  // Funcion para manejar la nueva data que se llena en los inputs de la fila editable

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

  // Por un lado esta funcion le da un ID a la fila editable nueva y por otro crea otro objeto con los valores nuevos de la fila editable

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

  // El submit del form editable. copia el array data, al array data le buscamos el index y preguntamos si el id de cada elemento previamente asignado es igual al de la fila. Si son iguales le asigna un index a los elementos cambiados y actualiza el array data con los nuevos values, por ultimo resetea el ID de la fila editable a null

  const handleEditFormSubmit = (e) => {
    e.preventDefault()

    const editedData = {
      id: editFormData.id,
      reason: editFormData.reason,
      amount: editFormData.amount,
      date: editFormData.date
    }

    const newData = [...data];

    const index = data.findIndex((dataItem) => dataItem.id === editFormData.id );

      newData[index] = editedData;
    
      setData(newData)
      setEditRowId(null)
  }

  // Funcion del boton delete, si los index de dataItem, es decir del parametro asignado y el parametro que se quiere eliminar son iguales, elimina esa fila y actualiza el array data
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
                /> }
              </>
            ))}
          </tbody>
        </table>
      </form>
      <Incomes addData={addData} /> {/* El metodo appData recibe como argumento addData de que cada input del componente Incomes */}
    </div>

  );
}

export default IncomesTable;