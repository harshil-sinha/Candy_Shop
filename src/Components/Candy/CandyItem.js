
const CandyItems=(props)=>{


    return(
        <>
        <div className="card">
            <div className="card-body">
                <h5>{props.name}-{props.description}-Rs {props.price}</h5>
            <button onClick={props.onAddOne} className="btn btn-success">Buy One</button>
            <button onClick={props.onAddTwo} className="btn btn-success">Buy Two</button>
            <button onClick={props.onAddThree} className="btn btn-success">Buy Three</button>
            </div>
        </div>
        </>
    )
}

export default CandyItems