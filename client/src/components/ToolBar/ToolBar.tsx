import { FC } from "react";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";

import OpenWithIcon from "@mui/icons-material/OpenWith";
import BrushIcon from "@mui/icons-material/Brush";

import styles from "./ToolBar.module.scss";
import { useAppDispatch } from "../../hooks/redux/useAppDispatch";
import { toolsActions } from "../../store/reducer/toolsSlice";

interface IProps {}

const ToolBar: FC<IProps> = () => {
  const dispatch = useAppDispatch();

  const setToolHandler = (tool: toolName) => {
    dispatch(toolsActions.setTool({ name: tool } as ITool));
  };

  return (
    <div className={styles.toolBar}>
      <ToggleButtonGroup exclusive>
        <ToggleButton
          value={"move"}
          onClick={() => {
            setToolHandler("move");
          }}
        >
          <OpenWithIcon />
        </ToggleButton>

        <ToggleButton
          value={"paint"}
          onClick={() => {
            setToolHandler("paint");
          }}
        >
          <BrushIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default ToolBar;
