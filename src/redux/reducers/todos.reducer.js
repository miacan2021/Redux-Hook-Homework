import { v4 as uuidv4 } from 'uuid'
import { NEW_TO_DO } from '../action/actions'

const initState = {
    toDoList: [
        { id: uuidv4(), content: "Buy Bread", isDone: false },
        { id: uuidv4(), content: "Buy Milk", isDone: true },
    ]
}

const todosReducer = (state = initState, action) => {

    switch (action.type) {
        case NEW_TO_DO:
            action.payload.id = uuidv4()
            action.payload.isDone = false

            return {
                ...state,
                toDoList: [...state.toDoList, action.payload]
            }
    
        default:
            return state;
    }

}

export default todosReducer