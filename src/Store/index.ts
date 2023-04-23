import { combineReducers, applyMiddleware, createStore, compose } from 'redux'
import ThunkMiddleware from 'redux-thunk'
import { accountReducer } from './Account/reducer'

const rootReducer = combineReducers({
    account: accountReducer
})

declare global{
    interface Window{
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore(){
    const middlewares = [ThunkMiddleware];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    return createStore(rootReducer, composeEnhancers(middlewareEnhancer));
}

// khi reducer tương tác với store này sẽ nhận đc 1 state mới từ các actions bên ngoài dispact vào