import { CONTACTDATA, DELETEDATA, UPDATEDATA } from "../ActionTypes";
let GetData = JSON.parse(localStorage.getItem("Contact")) || []
// console.log(GetData);
let InitialValue = {
    data: GetData
}
let position;
export const ContactReducers = (state = InitialValue, action) => {
    // console.log(action.payload);
    // console.log(state.data);
    switch (action.type) {
        case CONTACTDATA:
            let addCo = [...state.data, action.payload]
            console.log(addCo);
            localStorage.setItem("Contact", JSON.stringify(addCo))
            return { ...state, data: addCo }

        case DELETEDATA:
            console.log(action.payload);
            let FilterData = state.data.filter((val, i) => {
                return i != action.payload
            })
            localStorage.setItem("Contact", JSON.stringify(FilterData))
            return { ...state, data: FilterData }

        // case GETPOS:
        //     position = action.payload

        case UPDATEDATA:
           console.log(action.payload.val,action.payload.pos);
           state.data.map((val,i)=>{
               if (i==action.payload.pos) {
                   state.data[i]=action.payload.val
               }
           })
           localStorage.setItem("Contact",JSON.stringify(state.data))
           console.log(state.data);
           
           
        default:
            return state;
    }
}