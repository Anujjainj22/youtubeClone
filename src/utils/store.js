const { configureStore } = require("@reduxjs/toolkit");
const { default: youtubeSlice } = require("./youtubeSlice");


const store = configureStore(
    {
        reducer:{
            ytSlice: youtubeSlice
        }
    }
)

export default store