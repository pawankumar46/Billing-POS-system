const initialProduct=[]

const productReducer=(state= initialProduct ,actions)=>{
     switch(actions.type){
         case 'ADD_PRODUCT': {
             return  [{...actions.payload}, ...state]
         }
         case 'GET_PRODUCT' : {
             return  [...actions.payload]
         }
        default : {
            return state
        }
     }
}

export default productReducer