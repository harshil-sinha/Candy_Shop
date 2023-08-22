import {useContext} from "react";
import OrderContext from "../../Store/order-context";
import CandyItems from "./CandyItem";

const CandyList=()=>{

    const CandyCtx=useContext(OrderContext)

    const AddOneHandler=(id)=>{
        CandyCtx.AddbyOne(id)
    }

    const AddTwoHandler=(id)=>{
        CandyCtx.AddbyTwo(id)
    }

    const AddThreeHandler=(id)=>{
        CandyCtx.AddbyThree(id)
    }

    const Candylist=<ul>{CandyCtx.candy.map(Candy=>
            <CandyItems 
                               key={Candy.id}
                               name={Candy.name}
                               description={Candy.description}
                               price= {Candy.price} 
                               onAddOne={AddOneHandler.bind(null,Candy.id)} 
                               onAddTwo={AddTwoHandler.bind(null,Candy.id)} 
                               onAddThree={AddThreeHandler.bind(null,Candy.id)} 
                            />
                           
                    )} 
    </ul>

    return (
        <>
            {Candylist}
        </>
    )
}

export default CandyList