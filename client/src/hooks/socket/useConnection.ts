import { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:7000");

export const useConnection = () => {
  const [isConnected, setIsConected] = useState<boolean>(false);

  useEffect(() => {
    socket.on("connect", () => {
      setIsConected(true);
    });

    socket.on("disconnect", () => {
      setIsConected(false);
    });
  }, []);

  return isConnected;
};
