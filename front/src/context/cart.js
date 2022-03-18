import React,{createContext,useContext,useReducer} from 'react'


export const CartContext = createContext()
const CartDispatchContext = createContext();


export const useCart =()=>useContext(CartContext);
export const useDispatchCart = ()=>useContext(CartDispatchContext)

const state=[]



const reducer=(state,action)=>{
  switch(action.type){
   case "ADD":
       const found= state.find(x=> x.id ===action.item.id);
       if(!found){
           return [...state,{...action.item,qty:1}]
          
        }else{
            const found= state.find(x=> x.id ===action.item.id);
           const newState = state.filter(x => x.id != action.item.id);
           return [...newState, {...found,qty:found.qty+1}]
       }

   case "REMOVE":
      
    let f = state.find(x => x.id ===action.payload.item.id)
  
    if(f && f.qty>1){

        const tempState= [...state]
        let n=tempState.filter(x => x.id !== f.id)
        return [...n,{...action.payload.item,qty:f.qty-1}]
   
       
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