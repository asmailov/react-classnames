# react-classnames

Utility React component for using great <a href="https://github.com/JedWatson/classnames">classnames</a> package.

## Installation

**npm**
`npm install react-classnames --save`

**yarn**
`yarn add react-classnames`

## Examples
```jsx
import { ClassNamed } from 'react-classnames';

const element = (
  <ClassNamed className={['foo', { bar: true, test: false }]}>
    {(mergedClassName) => (
      <div className={mergedClassName}>Foo Bar</div>
    )}
  </ClassNamed>
);
```
This produces:
```html
<div class="foo bar">Foo Bar</div>
```

### Useful when creating core components which alow custom styles.

If we create **PrimaryButton** component
```jsx
import * as React from 'react';
import ClassNamed, { IClassNamed } from 'react-classnames';

interface IProps extends IClassNamed {
    onClick?(): void;
}

const PrimaryButton: React.SFC<IProps> = ({ className, onClick, children }) => (
  <ClassNamed className={['primary-button', className]}>
    {(mergedClassName) => (
      <button className={mergedClassName} onClick={onClick}>
        {children}
      </button>
    )}
  </ClassNamed>
);

export { PrimaryButton, IProps as IPrimaryButtonProps };
```
We can use it like this:
```jsx
<PrimaryButton className="hello-world-button">
  Hello world
</PrimaryButton>
```
Which results in this HTML:
```html
<button class="primary-button hello-world-button">Hello world</button>
```
