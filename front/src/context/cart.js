import React,{createContext,useContext,useReducer} from 'react'


export const CartContext = createContext()
const CartDispatchContext = createContext();


export const useCart =()=>useContext(CartContext);
export const useDispatchCart = ()=>useContext(CartDispatchContext)





const reducer=(state,action)=>{
  switch(action.type){
   case "ADD":
       const found= state.find(x=> x.id ===action.item.id);
       if(!found){
           return [...state,{...action.item,qty:1}]
          
        }else{
            const found= state.find(x=> x.id ===action.item.id);
           const newState = state.filter(x => x.id !== action.item.id);
           return [...newState, {...found,qty:found.qty+1}]
       }


   case "REMOVE":
    //===================================================
    let remItem = state.find(x => x.id ===action.payload.item.id)
    if(remItem && remItem.qty>1){

        const tempState= [...state]
        let pos = tempState.findIndex(x=>x.id===remItem.id);
        let updatedItem = {...remItem,qty:remItem.qty-1}
        let newSt=tempState.filter(x => x.id !== remItem.id)
        
        newSt.splice(pos,0,updatedItem)
        return[...newSt]
     }else{
        let newCartState= state.filter(x => x.id !== action.payload.item.id)
        return [...newCartState]
    }



   
       
      


   
    // padrao
    default: return state;
   

  }
}


export const  CartProvider = ({children})=>{

    const [state,dispatch]= useReducer(reducer,[])
    return(
        <CartDispatchContext.Provider value={dispatch} > 
        <CartContext.Provider value={state} >
            {children}
        </CartContext.Provider>
        
        </CartDispatchContext.Provider>
    )
}