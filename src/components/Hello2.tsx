import * as React from 'react';
import "./Hello.css";

export interface IProps {
    name: string;
    enthusiasmLevel?: number;
}
  

class Hello2 extends React.Component<IProps, object> {
    public render() {
        const { name, enthusiasmLevel = 1 } = this.props;

        if (enthusiasmLevel <= 0) {
            throw new Error('You could be a little more enthusiastic. :D');
        }

        return (
            <div className="hello">
                <div className="greeting">
                Hello {name + this.getExclamationMarks(enthusiasmLevel)}
                </div>
            </div>
        );
    }
    private getExclamationMarks(numChars: number) {
        return Array(numChars + 1).join('!');
    }    
}
export default Hello2;


