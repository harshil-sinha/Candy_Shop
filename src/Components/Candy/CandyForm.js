import React,{useState,useContext} from "react";
import OrderContext from "../../Store/order-context";

const CandyForm=(props)=>{

    const CandyCtx= useContext(OrderContext)
    const [enteredId,setEnteredId]=useState('')
    const [enteredName,setEnteredName]=useState('')
    const [enteredDescription,setEnteredDescription]=useState('')
    const [enteredPrice,setEnteredPrice]=useState('')
        
    const NameChangeHandler=(event)=>{
        setEnteredName(event.target.value)
    }

    const DescriptionChangeHandler=(event)=>{
        setEnteredDescription(event.target.value)
    }

    const PriceChangeHandler=(event)=>{
        setEnteredPrice(event.target.value)
    }

    const IdChangeHandler=(event)=>{
        setEnteredId(event.target.value)
    }

    const SubmitHandler=(event)=>{

        event.preventDefault()
        const order={
            id: enteredId,
            name: enteredName,
            price: enteredPrice,
            description: enteredDescription
        }
        CandyCtx.AddCandy({...order, amount: 0})
        setEnteredName('')
        setEnteredPrice('')
        setEnteredDescription('')
    }



    return(
     <React.Fragment>
     <div className="container">
     <div className="row w-50">
        <form onSubmit={SubmitHandler} className="form-control">
            <div>
                <label htmlFor="id" className="col-sm-2 col-form-label">Id:</label>
                <input id="id" type="number" value={enteredId} onChange={IdChangeHandler} className="form-control"/>
            </div>
            <div>
                <label htmlFor="name" className="col-sm-2 col-form-label">Candy Name:</label>
                <input id="name" type="text" value={enteredName} onChange={NameChangeHandler} className="form-control"/>
            </div>
            <div>
                <label htmlFor="description" className="col-sm-2 col-form-label">Candy description:</label>
                <input id="description" type="text" value={enteredDescription} onChange={DescriptionChangeHandler} className="form-control"/>
            </div>
            <div>
                <label htmlFor="price" className="col-sm-2 col-form-label">Candy Price (in Rs):</label>
                <input id="price" type="number" value={enteredPrice} onChange={PriceChangeHandler} className="form-control"/>
            </div>
            <button type="submit" className="btn btn-success mt-3">Add Candy</button>
     </form>
     </div>
     </div>
    
     </React.Fragment>
        
    )
}

export default CandyForm