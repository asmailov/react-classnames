import React from 'react';
import classnames from 'classnames';
import { ClassValue } from './model';

interface IChildProps {
    className: string;
}

type RenderNode<PropsT = {}> = (props: PropsT) => React.ReactNode;

interface IProps {
    className: ClassValue;
    children: RenderNode<IChildProps>;
}

const ClassName: React.SFC<IProps> = ({ children, className: inputClassName }) => {
    const className = classnames(inputClassName);
    const props: IChildProps = {
        className,
    };

    return <>{children(props)}</>;
};

export default ClassName;
export { ClassName };
