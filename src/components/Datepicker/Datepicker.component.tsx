import React, { useRef, useState } from 'react';
import classNames from 'classnames';
import { DatepickerProps } from './Datepicker.types';
import styles from './Datepicker.module.scss';
import { Input } from 'components/Input';
import "react-datepicker/dist/react-datepicker.css";
import { IconsEnum, SvgIcon } from 'components/SvgIcon';
import DatePicker, { CalendarContainer } from 'react-datepicker';
import { Text, TextVariantEnum } from 'components/Text';
import enGB from "date-fns/locale/en-GB";

export const DatepickerComponent: React.FC<DatepickerProps> = ({
  value,
  variant,
  onChange,
  className,
}) => {
  const DatepickerClass = classNames(
    styles.datepicker,
    className
  );
  const [isView, setIsView] = useState(false);
  const datepicker = useRef<DatePicker>(null);
  const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];
  const day_names = [
    "Пн",
    "Вт",
    "Ср",
    "Чт",
    "Пт",
    "Сб",
    "Вс",
  ];

  const handleRightClick = () => {
    setIsView(!isView);
    datepicker.current?.setOpen(true);
  }
  
  return (
    <div className={DatepickerClass}>
      <DatePicker
        ref={datepicker}
        selected={value}
        dateFormat='dd/MM/yyyy'
        locale={enGB}
        onChange={onChange}
        onCalendarOpen={() => { setIsView(true); }}
        onCalendarClose={() => { setIsView(false); }}
        renderCustomHeader={({
          date,
          decreaseMonth,
          increaseMonth,
        }) => {
          return (
            <div className={styles.header}>
              <div className={styles.picker}>
                <SvgIcon src={IconsEnum.arrowL} onClick={decreaseMonth} color='dark-grey' />
                <Text variant={TextVariantEnum.h2}>{date && months[date.getMonth()] + " " + date.getFullYear()}</Text>
                <SvgIcon src={IconsEnum.arrowR} onClick={increaseMonth} color='dark-grey' />
              </div>
              <div className={styles.day_names}>
                {
                  day_names.map((day,index)=><Text key={index} variant={TextVariantEnum.h5}>{day}</Text>)
                }
              </div>
            </div>
          )
        }}
        customInput={
          <Input
            value={String(value)}
            onChange={() => { }}
            onClick={() => { }}
            type='text'
            variant={variant}
            rightSide={<SvgIcon className={styles.svg} onClick={handleRightClick} src={IconsEnum.calendar} color={isView ? 'primary' : 'grey'} />}
          />
        }
      />
    </div>
  );
};

DatepickerComponent.displayName = 'Datepicker';