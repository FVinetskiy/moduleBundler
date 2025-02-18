import React, {Suspense} from "react";

// @ts-ignore
const RemoteApp = React.lazy(() => import("app2/App"));

import './index.scss'
import { News } from "./components/News/News";

const App: React.FC = () => {
  return (
    <div className="wrapperMain">
      <div>
        <h1>Host App</h1>
        <News/>
      </div>
        <Suspense fallback={"загрузка"}>
            <RemoteApp title="Remote App"/>
        </Suspense>
    </div>
  )
}

export default App;