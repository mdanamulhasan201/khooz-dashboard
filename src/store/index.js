// state manage (use redux toolkit) so create this store file 
// state handle root file (store configurations) so crete index.js file
import {configureStore} from '@reduxjs/toolkit';
import rootReducers from './rootReducers'
const store = configureStore({
    reducer: rootReducers,
    middleware: getDefaultMiddleware=>{
        return getDefaultMiddleware({
            serializableCheck: false
        })
    },
    devTools: true
})

export default store