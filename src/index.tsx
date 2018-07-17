import * as React from 'react';
import * as ReactDOM from 'react-dom';
import "tachyons";
// import App from './App';
// import Hello2 from "./components/Hello2";
// import Hello3 from "./components/Hello3";
// import './index.css';
import Card from "./components/card/Card";
import registerServiceWorker from './registerServiceWorker';
import { robots } from "./robots";


ReactDOM.render(
    <div>
        <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
        <Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
        <Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
    </div>
    ,
//    <Hello3 greeting={'hello' + 'react ninja222'}/>,
//  <Hello2 name="TypeScript" enthusiasmLevel={3} />,
//   <App/>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
