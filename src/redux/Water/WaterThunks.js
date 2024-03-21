import { createAsyncThunk } from '@reduxjs/toolkit';
import { format } from 'date-fns';
import {
  requestEditWaterData,
  requestMonthWaterData,
  requestAddWaterData,
  requestDayWaterData,
  requestDeleteWaterData,
} from '../../services/waterServices.js';

export const apiAddWaterPortion = createAsyncThunk(
  'water/addWaterPortion',
  async (credentials, thunkAPI) => {
    try {
      const response = await requestAddWaterData(credentials);
      thunkAPI.dispatch(
        apiGetMonthWaterPortions({
          month: format(new Date(), 'LL'),
          year: format(new Date(), 'yyyy'),
        })
      );
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const apiDeleteWaterPortion = createAsyncThunk(
  'water/deleteWaterPortion',
  async (portionId, thunkAPI) => {
    try {
      await requestDeleteWaterData(portionId);
      thunkAPI.dispatch(
        apiGetMonthWaterPortions({
          month: format(new Date(), 'LL'),
          year: format(new Date(), 'yyyy'),
        })
      );
      return portionId;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const apiGetTodayWaterPortions = createAsyncThunk(
  'water/apiGetTodayWaterPortions',
  async (_, thunkAPI) => {
    try {
      const response = await requestDayWaterData();
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const apiGetMonthWaterPortions = createAsyncThunk(
  'water/apiGetMonthWaterPortions',
  async ({ month, year }, thunkAPI) => {
    try {
      const data = await requestMonthWaterData(month, year);

      thunkAPI.dispatch(apiGetTodayWaterPortions());

      return Object.keys(data).length !== 0
        ? data
        : {
            waterVolumePercentage: '0%',
            waterVolumes: [],
          };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const apiEditWaterPortion = createAsyncThunk(
  'water/apiEditWaterPortion',
  async ({ portionId, credentials }, thunkAPI) => {
    try {
      const response = await requestEditWaterData(portionId, credentials);
      thunkAPI.dispatch(
        apiGetMonthWaterPortions({
          month: format(new Date(), 'LL'),
          year: format(new Date(), 'yyyy'),
        })
      );

      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const waterThunk = createAsyncThunk();
