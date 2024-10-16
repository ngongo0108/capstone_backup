import React, { createContext, useContext, useEffect, useRef } from "react";
import { io, Socket } from "socket.io-client";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/stores";

interface SocketContextType {
  socket: Socket | null;
}
const SocketContext = createContext<SocketContextType>({ socket: null });

export const useSocket = () => useContext(SocketContext);

interface SocketProviderProps {
  children: React.ReactNode;
}

export const SocketProvider = ({ children }: SocketProviderProps) => {
  const socketRef = useRef<Socket | null>(null);
  const id = useSelector((state: RootState) => state.auth.user._id);

  console.log("id : ------------------------", id);

  useEffect(() => {
    if (id) {
      socketRef.current = io("http://localhost:8000", {
        query: {
          userId: id,
        },
      });
    }
    return () => {
      socketRef.current?.disconnect();
    };
  }, [id]);

  return (
    <SocketContext.Provider value={{ socket: socketRef.current }}>
      {children}
    </SocketContext.Provider>
  );
};
