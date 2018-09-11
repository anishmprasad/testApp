import {
    TEMP,
    TEMPUPDATE
} from "../../actionTypes/Temp";

const initialState = [];

export default function Temp(state = initialState, action) {
    switch (action.type) {
        case TEMP:            
            return state.concat(action.payload)
            // return Object.assign([],state ,action.payload)
            // state.push(...action.payload)
            // let statedata = state.push(action.payload)
            // return statedata
            // return null
            // return state.splice(state.length -1,0,action.payload)
        case TEMPUPDATE:
            let index = state.findIndex(img => img.name === action.meta);
            // Object.values(action.payload)[0]
            // Object.keys(action.payload)[0]
            // return [ Object.assign({} ,{ value :  Object.values(action.payload)[0] }) ]

            // state[index]['value'] = Object.values(action.payload)[0]
            // return state
            // return state.map( (data,index)=>{
            //     console.log(data)
            //     if (data.name === Object.keys(action.payload)[0]){
            //         data.value = Object.values(action.payload)[0]
            //     }
            //     return data
            // })
            return state.map((item, index) => {
                if (item.name == action.meta) {
                    // This isn't the item we care about - keep it as-is
                    item.value = action.payload
                    return item;
                }
                // console.log('TEMPUPDATE',item)

                // Otherwise, this is the one we want - return an updated value
                return item
            });
            // return [ ...state , Object.assign({}, state[index], { value: Object.values(action.payload)[0] }) ] 
        default:
            return state;
    }
}
