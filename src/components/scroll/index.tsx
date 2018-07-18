import * as React from 'react';

class Scroll extends React.Component<any, any> {
    public render() {
        return (
            <div style={{ overflowY: 'scroll', border: '5px solid black', height: '500px'}}>
                {this.props.children}
            </div>
        );
    }
}

export default Scroll;