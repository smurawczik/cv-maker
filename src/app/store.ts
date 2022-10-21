import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import cvBlueprintReducer from "../features/CvBlueprint/redux/cv.blueprint.slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cvBlueprint: cvBlueprintReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
