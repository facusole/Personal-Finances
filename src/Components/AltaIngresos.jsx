import {useState} from 'react';

const AltaIngresos = ({addData}) => {

    const [element, setElement] = useState({
        reason:'',
        amount:'',
        date:''
    })

    const handleElement = (props) => {
        const aux = {...element}
        if(props.target.name === 'date'){
            aux[props.target.name] = props.target.value.split('-').reverse().join('-')
        } else {
            aux[props.target.name] = props.target.value
        }
        setElement(aux)
    }

    const handleSubmit = (props) => {

        props.preventDefault()

        addData(element)
        setElement({
            reason:'',
            amount:'',
            date:''
        })
    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <input type="text" name="reason" value={element.reason} placeholder='Reason' onChange={handleElement} required/>
                <input type="number" name="amount" value={element.amount} placeholder='Amount' onChange={handleElement} required/>
                <input type="date" name="date" value={element.date.split('-').reverse().join('-')} onChange={handleElement} required/>
                <button type="submit">Submit</button>
            </form>

        </div>

    )
}

export default AltaIngresos;