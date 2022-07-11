const initialUser =[]

 const userReducer=(state = initialUser , action)=>{
     switch(action.type){
        case "USER_GET" : {
            return {...action.payload}
        }
        default : {
            return  state
        }
     }
 }

 export default userReducer