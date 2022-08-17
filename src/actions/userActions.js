import axios from "axios";
import {getBill} from './billAction'
import { getCus} from './customerAction'
import { getProduct } from "./productAction";

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

export const asyncInitialUserDetailsFetch = (setIsLoading) => {
   return (dispatch) => {
       const apiList = ["http://dct-pos-app.herokuapp.com/api/customers", "http://dct-pos-app.herokuapp.com/api/products", "http://dct-pos-app.herokuapp.com/api/bills", "http://dct-pos-app.herokuapp.com/api/users/account"]

       axios.all(apiList.map(api => axios.get(api, {
           headers: {
               "Authorization": "Bearer " + localStorage.getItem("token")
           }
       })))
           .then(responses => {
               setIsLoading && setIsLoading(false)
               const resultArray = responses.map(res => res.data)
               const actions = [ getCus , getProduct, getBill, userInfo]

               actions.forEach((action, index) => {
                   dispatch(action(resultArray[index]))
               })

           })
           .catch((err) => {
               console.log(err)
           })
   }
}