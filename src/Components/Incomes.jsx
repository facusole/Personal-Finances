import {useState} from 'react';

const Incomes = ({addData}) => {

    // Este useState es usado para crear un objeto y llenarlo con los datos del input gracias al handleElement

    const [element, setElement] = useState({
        reason:'',
        amount:'',
        date:''
    })

    const handleElement = (props) => {
        const aux = {...element} // Hago una copia del objeto element
        if(props.target.name === 'date'){
            aux[props.target.name] = props.target.value.split('-').reverse().join('-') // Esta formula es para poder cambiar el formato de la fecha, ya que estaba invertido
        } else {
            aux[props.target.name] = props.target.value // Esto targetea el value del input y al final usa el setElement para actualizar el estado del componente
        }
        setElement(aux)
    }


    
    const handleSubmit = (props) => {

        props.preventDefault()

        addData(element)  // addData lo pasamos como parametro desde IncomesTable, es para actualizar el estado del array de objetos data. 
        setElement({ // Elimina y resetea el objeto element a 0, para que se vacien los campos del input
            id: Math.random()*10000,
            reason:'',
            amount:'',
            date:''
        })
    }

    // Es un form normal, con 3 input y un button de tipo submit. AutoComplete off lo que hace es que no me sugiera datos previamente ingresados con un dropdown.

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <input type="text" name="reason" value={element.reason} placeholder='Income reason' onChange={handleElement} autoComplete='off' required/>
                <input type="number" name="amount" value={element.amount} placeholder='Amount' onChange={handleElement} autoComplete='off' required/>
                <input type="date" name="date" value={element.date.split('-').reverse().join('-')} onChange={handleElement} autoComplete='off' required/>
                <button type="submit">Submit</button>
            </form>

        </div>

    )
}

export default Incomes;