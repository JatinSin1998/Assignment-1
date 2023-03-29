import {configureStore, } from "@reduxjs/toolkit"
import {setupListeners} from "@reduxjs/toolkit/dist/query"
import {api} from "./api"
import sliceNameSlice from "./index"


const store = configureStore({
    reducer:{sliceNameSlice},
    middleware: (getDefaultMiddleware)=>
    getDefaultMiddleware().concat(api.middleware),
    
}
);


setupListeners(store.dispatch)

export default store;

// [api.reducerPath]: api.reducer