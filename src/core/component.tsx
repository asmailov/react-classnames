import * as React from 'react';
import classnames from 'classnames';
import { ClassValue } from './model';

type RenderNode<PropsT = {}> = (props: PropsT) => React.ReactNode;

interface IClassNamed {
    className?: ClassValue;
}

interface IProps extends IClassNamed {
    children?: RenderNode<string>;
    render?: RenderNode<string>;
}

const ClassNamed: React.SFC<IProps> = ({ children, render, className: inputClassName }) => {
    const className = classnames(inputClassName);

    const nodeRenderer = children || render;
    if (nodeRenderer) {
        return <>{nodeRenderer(className)}</>;
    }

    return null;
};

export default ClassNamed;
export { ClassNamed, IClassNamed };
