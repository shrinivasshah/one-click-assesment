import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import client from "../../../api";
import { InstrumentSlice, Record } from "../../../types";
const initialState: InstrumentSlice = {
  instruments: [],
  status: "idle",
  error: null,
};

const instrumentSlice = createSlice({
  name: "instruments",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchInstruments.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchInstruments.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Add any fetched instruments to the array
        state.instruments = state.instruments.concat(action.payload);
      })
      .addCase(fetchInstruments.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export default instrumentSlice.reducer;

export const selectAllAvalanchRecords = (state: InstrumentSlice) =>
  state.instruments[3].records;

export const selectRecordByAddress = (
  state: InstrumentSlice,
  address: string
) => {
  return state.instruments[3].records.find(
    (record: Record) => record.address === address
  );
};

export const memoisedState = createSelector(
  (state: { instrumentSlice: InstrumentSlice }) => state.instrumentSlice,
  (instruments: InstrumentSlice) => instruments.instruments[3]?.records
);

export const fetchInstruments = createAsyncThunk(
  "instruments/fetchInstruments",
  async () => {
    const response = await (await client.get("assets")).data;
    return response.data;
  }
);
