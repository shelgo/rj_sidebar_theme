import React from 'react';
import bn from 'utils/bemnames';

import Typography from './Typography';

const bem = bn.create('page');

const Page = ({
  title,
  breadcrumbs,
  tag: Tag,
  className,
  children,
  ...restProps
}) => {
  const classes = bem.b('px-3', className);

  return (
    <Tag className={classes} {...restProps}>
      <div className={bem.e('header')}>
        {title && typeof title === 'string' ? (
          <Typography type="h1" className={bem.e('title')}>
            {title}
          </Typography>
        ) : (
            title
          )}
      </div>
      {children}
    </Tag>
  );
};


Page.defaultProps = {
  tag: 'div',
  title: '',
};

export default Page;
