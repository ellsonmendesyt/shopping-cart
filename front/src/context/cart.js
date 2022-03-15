import React,{createContext,useContext,useReducer} from 'react'


export const CartContext = createContext()
const CartDispatchContext = createContext();


export const useCart =()=>useContext(CartContext);
export const useDispatchCart = ()=>useContext(CartDispatchContext)

const reducer=(state,action)=>{
  switch(action.type){
      default: throw new Error(`unkown action: ${action.type}`);

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