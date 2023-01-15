import { FC, useEffect } from "react";
import Canvas from "../../components/Canvas";
import { useAppSelector } from "../../hooks/redux/useAppSelector";
import { useConnection } from "../../hooks/socket/useConnection";
import { usePicture } from "../../hooks/socket/usePicture";

import styles from "./IndexPage.module.scss";

const IndexPage: FC = () => {
  const Picture = usePicture();
  return <div className={styles.page}>
    <Canvas data={Picture} />
  </div>;
};

export default IndexPage;
