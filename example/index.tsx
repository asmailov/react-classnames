import React from 'react';
import ReactDOM from 'react-dom';
import { ClassName } from '../src/core/component';

const Index = () => {
    return (
        <ClassName className={['test', 'hello world', { asd: true }]}>
            {({ className }) => (
                <div className={className}>react-classnames</div>
            )}
        </ClassName>
    );
};

ReactDOM.render(<Index />, document.getElementById('app'));
