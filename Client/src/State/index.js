import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';



const url = "https://rest.coinapi.io/v1/exchanges";
const url2 = "https://rest.coinapi.io/v1/exchanges/icons/32";
const apiKey = "FDAB8705-CEAA-4A23-8A5B-6CC30B8D44D9";

export const fetchFirstData = createAsyncThunk('sliceName/fetchFirstData', async () => {
  const response = await fetch(url,{
    method: "GET",
      headers: {
        "X-CoinAPI-Key": apiKey
      }
  });
  const data = await response.json();
  return data;
});


export const fetchSecondData = createAsyncThunk('sliceName/fetchSecondData', async () => {
    const response = await fetch(url2,{
        method: "GET",
          headers: {
            "X-CoinAPI-Key": apiKey
          }
      });
  const data = await response.json();

  return data;
});



const sliceNameSlice = createSlice({
  name: 'sliceName',
  initialState: {
    firstData: [],
    secondData: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFirstData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchFirstData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.firstData = action.payload;
      })
      .addCase(fetchFirstData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchSecondData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSecondData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.secondData = action.payload;
      })
      .addCase(fetchSecondData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});



export default sliceNameSlice.reducer;