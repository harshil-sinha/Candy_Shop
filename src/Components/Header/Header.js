import React,{useContext} from "react";
import OrderContext from "../../Store/order-context";

const Header=(props)=>{


    const CandyCtx=useContext(OrderContext)

    let number=0;
    for(let i=0;i<CandyCtx.candy.length;i++){
        number=number+ Number(CandyCtx.candy[i].amount)
    }

    

    return(
        <>
            <div className="container">
                <div className="row">
                <button className="btn btn-success" onClick={props.onDisplay}>
                    <span>Cart</span>
                    <span class="badge bg-primary">({number})</span>
                </button>
                </div>
            </div>

        </>
        
    )
}

export default Header
