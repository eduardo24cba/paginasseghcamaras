const {configureStore} = RTK

const store = configureStore({
    reducer: {
        camaras: camarasSlice.reducer
    }
})
