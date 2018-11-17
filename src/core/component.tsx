import React from 'react';
import classnames from 'classnames';
import { ClassValue } from './model';

interface IChildProps {
    className: string;
}

type RenderNode<PropsT = {}> = (props: PropsT) => React.ReactNode;

interface IProps {
    className: ClassValue;
    children?: RenderNode<IChildProps>;
    render?: RenderNode<IChildProps>;
}

const ClassName: React.SFC<IProps> = ({ children, render, className: inputClassName }) => {
    const className = classnames(inputClassName);
    const props: IChildProps = {
        className,
    };

    const nodeRenderer = children || render;
    if (nodeRenderer) {
        return <>{nodeRenderer(props)}</>;
    }

    return null;
};

export default ClassName;
export { ClassName };
