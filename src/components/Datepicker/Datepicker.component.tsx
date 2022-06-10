import React, { useState } from 'react';
import classNames from 'classnames';
import { DatepickerProps } from './Datepicker.types';
import styles from './Datepicker.module.scss';
import { Input } from 'components/Input';
import { IconsEnum } from 'components/SvgIcon';

export const DatepickerComponent: React.FC<DatepickerProps> = ({
  value,
  variant,
  className,
}) => {
  const DatepickerClass = classNames(
    styles.datepicker,
    className
  );
  const [isView, setIsView] = useState(false);
  const rightArgs = {
    color: !isView ? "grey" : "primary"
  }

  const handleRightClick = () => {
    setIsView(!isView);
  }

  return (
    <Input
      type='date'
      value={value && `${value.getFullYear().toString().padStart(2, '0')}-${(value.getMonth() + 1).toString().padStart(2, '0')}-${value.getDate().toString().padStart(2, '0')}`}
      variant={variant}
      className={DatepickerClass}
      rightSide={IconsEnum.calendar}
      rightSideArgs={rightArgs}
      rightSideClick={handleRightClick}
    />
  );
};

DatepickerComponent.displayName = 'Datepicker';