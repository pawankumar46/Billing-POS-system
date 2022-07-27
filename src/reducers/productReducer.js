const initialProduct=[]

const productReducer=(state= initialProduct ,action)=>{
     switch(action.type){
         case 'ADD_PRODUCT': {
             return  [{...action.payload}, ...state]
         }
         case 'GET_PRODUCT' : {
             return  [...action.payload]
         }
         case 'DELETE_PRODUCT' : {
             return state.filter((ele)=>{
                return ele._id !== action.payload._id
             })
         }
         case 'EDIT_PRODUCTS': {
            return state.map((ele)=>{
                if(ele._id===action.payload._id){
                    return {...ele, ...action.payload}
                } else {
                    return {...ele}
                }
            })
         }
        default : {
            return state
        }
     }
}

export default productReducer