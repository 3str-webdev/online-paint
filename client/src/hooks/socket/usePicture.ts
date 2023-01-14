import { io } from "socket.io-client";
import { useEffect, useState } from "react";

const socket = io("http://localhost:7000");

export const usePicture = () => {
  const [picture, setPicture] = useState<IClientLine[]>([]);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected");
    });

    socket.on("update", (data: IClientLine[]) => {
      setPicture(data);
    });
  }, []);

  return picture;
};
