const initialBill= []

const billReducer=(state= initialBill , action)=>{
      switch(action.type){
        case 'BILL_POST': {
           return  [{...action.payload } , ...state]
        }
         case 'BILL_GET' : {
           return [...action.payload]
         }
         case 'DELETE_BILL' : {
           return state.filter((ele)=>{
             return ele._id !== action.payload
           })
         }
        default : { 
            return state
        }
      }
}

export default billReducer