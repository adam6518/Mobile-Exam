const INITIAL_STATE = {
    todoInput : '',
    todoData : []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TODO_INPUT':
            return {...state, todoInput : action.payload}
        case 'FILL_TODO':
            return{...state, todoData: action.payload}
        case 'DELETE_TODO':
            return INITIAL_STATE
        default:
            return state
    }
}