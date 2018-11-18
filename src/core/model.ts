import classnames from 'classnames';
import { FunctionArgType } from '../utils/type';

type ClassNames = typeof classnames;
type ClassValue = FunctionArgType<ClassNames>;

export { ClassNames, ClassValue };
