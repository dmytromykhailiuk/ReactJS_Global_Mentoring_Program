import React from 'react';
import classnames from 'classnames';
import classes from './GoUpButton.module.scss';
import { goUp } from '../../helpers';
import { useShowGoUpButton } from '../../hooks';

const GoUpButton: React.FC = () => {
  const showGoUpButton = useShowGoUpButton();

  return (
    <div
      onClick={goUp}
      className={classnames([classes['scroll-btn'], { [classes['scroll-btn--hide']]: !showGoUpButton }])}
    >
      <p>UP</p>
    </div>
  );
};

export default GoUpButton;
