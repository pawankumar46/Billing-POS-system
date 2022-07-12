const initialReducer=[]

const customerReducer=(state= initialReducer , action)=>{
    switch(action.type){

        case 'GET_CUS':{
            return [...action.payload]
        }
        case "POST_CUS" : {
            return [{...action.payload} , ...state]
        }
        case 'EDIT_CUS': {
             return  state.map((ele)=>{
                if(ele._id === action.payload._id){
                    return {...ele ,...action.payload}
                } else {
                   return  {...ele}
                }
             })
        }
        case 'DELETE_CUS' : {
             return state.filter((ele)=>{
                return ele._id !== action.payload
           })
        }
        default : {
            return state
        }
    }

}

export default customerReducer