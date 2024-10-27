import { CONTACTDATA, DELETEDATA,UPDATEDATA } from "../ActionTypes";

export const ContactData=(data)=>{
    // console.log(data);
    return{
        type:CONTACTDATA,
        payload:data
    }
}
export const DeleteData=(pos)=>{
    // console.log(pos);
     return{
        type:DELETEDATA,
        payload:pos
     }
}

// export const GetPos=(pos)=>{
//     return{
//         type:GETPOS,
//         payload:pos
//     }
// }
export const UpdateData=(val,pos)=>{
    // console.log(val,pos);
    return{
        type:UPDATEDATA,
        payload:{
            val,pos
        }
    }
}