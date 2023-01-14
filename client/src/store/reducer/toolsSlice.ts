import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ITool = {
  name: "move",
};

const toolsSlice = createSlice({
  name: "tools",
  initialState,
  reducers: {
    setTool(state, action: PayloadAction<ITool>) {
      state = action.payload;
      return state;
    },
  },
});

export default toolsSlice.reducer;
export const toolsActions = toolsSlice.actions;
