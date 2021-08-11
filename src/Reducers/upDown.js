const InitialState = 0;
const chageNumber = (state = InitialState, action) => {
     
      
            switch(action.type){
                  case "Increment" :  return state+1;
                  case "Decrement": return state-1;
                  default :return state;
            }
      
    
}
export default chageNumber;