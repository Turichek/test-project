import React, { useState } from 'react';
import classNames from 'classnames';
import { Options, SelectProps } from './Select.types';
import styles from './Select.module.scss';
import "react-datepicker/dist/react-datepicker.css";
import Select, { components, OptionProps, StylesConfig } from 'react-select';
import { Input } from 'components/Input';
import { IconsEnum, SvgIcon } from 'components/SvgIcon';
import { Text, TextVariantEnum } from 'components/Text';

export const SelectComponent: React.FC<SelectProps> = ({
  value,
  variant,
  onChange,
  options,
  type,
  className,
}) => {
  const SelectClass = classNames(
    styles.select,
    className
  );
  const customDefaultStyle: StylesConfig<Options> = {
    option: (styles, { isFocused, isSelected }) => ({
      ...styles,
      backgroundColor: isSelected ? 'var(--primary)' : isFocused ? '#f5f6f7' : undefined,
      color: isSelected ? 'var(--white)' : 'var(--dark-grey)',
      ':active': {
        backgroundColor: 'var(--light-grey)',
      }
    })
  }
  const [isShowDropdown, setIsShowDropdown] = useState(false);

  const handleRightClick = () => {
    setIsShowDropdown(!isShowDropdown);
  }
  const handleOnBlurInput = () => {
    setIsShowDropdown(false);
  }

  const Option = (props: OptionProps<Options, false>) => {
    return (
      <components.Option {...props} >
        <Text className={styles.text} variant={TextVariantEnum.body_lg}>{props.children}</Text>
      </components.Option>
    );
  };

  return (
    <div className={SelectClass}>
      <Input
        readonly={true}
        value={value?.label}
        variant={variant}
        onChange={() => { }}
        onClick={handleRightClick}
        onBlur={handleOnBlurInput}
        rightSide={<SvgIcon onClick={handleRightClick} src={IconsEnum.arrowB} color={isShowDropdown ? 'primary' : 'grey'} rotate={isShowDropdown ? '180' : '0'} />}
      />
      <Select
        value={value}
        menuIsOpen={isShowDropdown}
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