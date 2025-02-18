import React from "react";
import Timer from "./components/Timer/Timer";

interface RemoteAppProps {
  title: string;
}

const App: React.FC<RemoteAppProps> = ({title}) => {
  return (
    <div>
      <h1>{title}</h1>
      <Timer/>
    </div>
  )
}

export default App;

