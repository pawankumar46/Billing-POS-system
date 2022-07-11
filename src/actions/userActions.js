import axios from "axios";

const token = localStorage.getItem('token')

export const startGetUser=()=>{
    return(dispatch)=>{
      axios.get(`http://dct-pos-app.herokuapp.com/api/users/account` , {
         headers : {
            'Authorization' : `Bearer ` + token
         }
        })

          .then((res)=>{
            const result = res.data
             dispatch(userInfo(result))
          })
          .catch((err)=>{
            alert(err.message)
          })
           
    }
}

export const userInfo=(data)=>{
     return {
        type : 'USER_GET',
        payload : data
     }
}