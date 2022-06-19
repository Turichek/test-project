import React, { Children, useRef, useState } from 'react';
import classNames from 'classnames';
import { SelectProps, testOption } from './Select.types';
import styles from './Select.module.scss';
import "react-datepicker/dist/react-datepicker.css";
import Select, { components, OptionProps } from 'react-select';
import { Input } from 'components/Input';
import { IconsEnum, SvgIcon } from 'components/SvgIcon';
import { Text, TextVariantEnum } from 'components/Text';

export const SelectComponent: React.FC<SelectProps> = ({
  value,
  variant,
  onChange,
  className,
}) => {
  const SelectClass = classNames(
    styles.select,
    className
  );
  const customDefaultStyle = {
    menu: (styles: any) => ({
      ...styles,
      width: '330px',
    }),
    option: (styles: any, { isFocused, isSelected }: any )=>({
      ...styles,
      backgroundColor: isSelected ? 'var(--primary)' : isFocused ? '#f5f6f7' :  undefined,
      color: isSelected ? '#fff' : 'var(--dark-grey)',
      ':active': {
        backgroundColor: 'var(--light-grey)',
      }
    })
  }
  const [isView, setIsView] = useState(false);
  const select = useRef(null)
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  const handleRightClick = () => {
    setIsView(!isView);
  }

  const handleOnBlurInput = () => {
    setIsView(false);
  }

  const Option = (props: OptionProps<testOption, false>) => {
    return (
      <components.Option {...props} >
        <Text className={styles.text} variant={TextVariantEnum.body_lg} >{props.children}</Text>
      </components.Option>
    );
  };

  return (
    <div className={SelectClass}>
      <Input
        value={value?.label}
        variant={variant}
        onChange={() => { }}
        onClick={handleRightClick}
        onBlur={handleOnBlurInput}
        rightSide={<SvgIcon onClick={handleRightClick} src={IconsEnum.arrowB} color={isView ? 'primary' : 'grey'} rotate={isView ? '180' : '0'} />}
      />
      <Select
        ref={select}
        menuIsOpen={isView}
        onInputChange={handleRightClick}
        onChange={onChange}
        options={options}
        styles={customDefaultStyle}
        components={{ Option }}
      />
    </div>
  );
};

SelectComponent.displayName = 'Select';