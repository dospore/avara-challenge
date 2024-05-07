import { createContext, useContext } from "react";
import type { Children } from "../types/react";

type State = {};

const ExampleContext = createContext<State | null>(null);

const ExampleProvider = ({ children }: Children) => {
  return <ExampleContext.Provider value={{}}>{children}</ExampleContext.Provider>;
};

const useExample = (): State => {
  const context = useContext(ExampleContext);
  if (context === null) {
    throw Error("Cannot consume context outside of ExampleProvider");
  }
  return context;
};

export { useExample, ExampleContext };
export default ExampleProvider;
