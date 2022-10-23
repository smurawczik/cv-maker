import { CvBlueprintState, CV_SIZES } from "./../cv.blueprint.types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../../app/store";

const initialState: CvBlueprintState = {
  size: CV_SIZES.A5,
  paper: "A5",
  blueprint: [
    {
      type: "split-section",
      left: 25,
      right: 75,
      leftChild: { type: "image", blobURL: "" },
      rightChild: {
        type: "job",
        title: "software developer",
        from: new Date(),
      },
    },
  ],
};

export const cvBlueprintSlice = createSlice({
  name: "cvBlueprint",
  initialState,
  reducers: {
    setPaperType: (state, action: PayloadAction<keyof typeof CV_SIZES>) => {
      state.size = CV_SIZES[action.payload];
      state.paper = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setPaperType } = cvBlueprintSlice.actions;

export const getPaperSize = (state: RootState) => state.cvBlueprint.size;
export const getBlueprintElements = (state: RootState) =>
  state.cvBlueprint.blueprint;
export const getPaper = (state: RootState) => state.cvBlueprint.paper;

export default cvBlueprintSlice.reducer;
