import React from 'react';
import ReactDOM from 'react-dom';
import { ClassNamed } from '../src/core/component';

const Index = () => {
    return (
        <ClassNamed className={['test', 'hello world', { asd: true }]}>
            {(mergedClassName) => (
                <div className={mergedClassName}>react-classnamed</div>
            )}
        </ClassNamed>
    );
};

ReactDOM.render(<Index />, document.getElementById('app'));
