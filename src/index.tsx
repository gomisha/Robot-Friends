import * as React from 'react';
import * as ReactDOM from 'react-dom';
import "tachyons";
import CardList from "./components/CardList";
// import { robots } from "./data/robots";
import registerServiceWorker from './registerServiceWorker';
// import CardList from './components/CardList';

ReactDOM.render(
    <div>
        <CardList/>
    </div>
    ,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
