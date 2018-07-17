import * as React from 'react';
import * as ReactDOM from 'react-dom';
import "tachyons";
import CardList from "./components/CardList";
import { robots } from "./data/robots";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
        <CardList robots={robots}/>
    </div>
    ,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
