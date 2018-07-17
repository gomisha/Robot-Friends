import * as React from 'react';
import "./Hello3.css";

export interface IProps {
    greeting: string;
  }

const Hello3 = (props: IProps) => {
    const { greeting } = props;
    return ( 
        <div className="f1 tc">
            <h1>hello world (function)</h1>
            <p>{greeting}</p>
        </div>
    );
}

// class Hello3 extends React.Component<IProps, object> {
//     public render() {
//         const { greeting } = this.props;
//         return ( 
//             <div className="f1 tc">
//                 <h1>hello world222</h1>
//                 <p>{greeting}</p>
//             </div>
//         );
//     }
// }

export default Hello3;

