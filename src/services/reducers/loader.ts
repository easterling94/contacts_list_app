import { createSlice, PayloadAction} from '@reduxjs/toolkit'

interface ILoader {
  counter: number,
  isLoaderShown: boolean,
}

const initialState: ILoader = {
  counter: 2,
  isLoaderShown: false,
};

export const LoaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    showLoader (state) {
      state.isLoaderShown = true;
    },
    changeCounter (state) {
      state.counter -= 1;
    },
    closeLoader (state) {
      state.isLoaderShown = false;
      state.counter = initialState.counter;
    }
  }
})