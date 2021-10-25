
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// import authReducer from './Auth/reducer';
import movieReducer from './Movie/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
//   auth: authReducer,
    movies: movieReducer,
});

const persistConfig = {
  key: 'root',
  whitelist: ['auth'],
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunkMiddleware, logger)));
const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof movieReducer>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export { store as default, persistor };