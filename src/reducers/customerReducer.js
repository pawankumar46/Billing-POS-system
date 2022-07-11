const initialReducer=[]

const customerReducer=(state= initialReducer , action)=>{
    switch(action.type){

        case 'GET_CUS':{
            return [...action.payload]
        }
        case "POST_CUS" : {
            return [{...action.payload} , ...state]
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