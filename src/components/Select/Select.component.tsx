import React, { useState } from 'react';
import { OptionsProps, SelectProps, SelectTypeEnum } from './Select.types';
import "react-datepicker/dist/react-datepicker.css";
import Select, { components, ControlProps, DropdownIndicatorProps, InputProps, OptionProps } from 'react-select';
import { Input} from 'components/Input';
import { IconsEnum, SvgIcon } from 'components/SvgIcon';
import { Text, TextVariantEnum } from 'components/Text';
import { customDefaultStyle, SelectStyle } from './Select.styles';

export const SelectComponent: React.FC<SelectProps> = ({
  value,
  variant,
  onChange,
  options,
  type,
  className,
}) => {
  const [isShowDropdown, setIsShowDropdown] = useState(false);
  const handleRightClick = () => {
    setIsShowDropdown(!isShowDropdown);
  }

  const onClickSelect = () => {
    setIsShowDropdown(!isShowDropdown);
  }

  const SelectOptionsStyleMap = {
    [SelectTypeEnum.default]: customDefaultStyle,
  }

  const OptionTypes = (props: OptionProps<OptionsProps, false>, type: SelectTypeEnum) => {
    switch (type) {
      case SelectTypeEnum.default:
        return (
          <>
            <Text variant={TextVariantEnum.body_lg}>{props.data.label}</Text>
          </>
        )
    }
  }

  const CustomOption = (props: OptionProps<OptionsProps, false>) => {
    return (
      <components.Option {...props} >
        {OptionTypes(props, type)}
      </components.Option>
    );
  };

  const CustomControl = (props: ControlProps<OptionsProps, false>) => {
    return (
      <Input
        value=''
        hidden={true}
        variant={variant}
        onChange={() => { }}
        {...props} ></Input>
    )
  }

  const CustomDropdownIndicator = (props: DropdownIndicatorProps<OptionsProps, false>) => {
    return (
      <components.DropdownIndicator {...props}>
        <SvgIcon src={IconsEnum.arrowB} color={isShowDropdown ? 'primary' : 'grey'} rotate={isShowDropdown ? '180' : '0'} />
      </components.DropdownIndicator>
    )
  }

  const CustomInput = (props: InputProps<OptionsProps, false>) => {
    return (
      <components.Input innerRef={props.innerRef} {...props} />
    )
  }

  return (
    <div style={{width: 'fit-content'}} className={className} onBlur={handleRightClick} onClick={onClickSelect}>
      <Select
        defaultValue={value}
        menuIsOpen={isShowDropdown}
        placeholder='Выберите...'
        isSearchable={true}
        onChange={onChange}
        options={options}
        styles={{ ...SelectStyle, ...SelectOptionsStyleMap[type] }}
        onMenuOpen={handleRightClick}
        onMenuClose={handleRightClick}

        components={{
          Option: CustomOption,
          Control: CustomControl,
          DropdownIndicator: CustomDropdownIndicator,
          Input: CustomInput,
          IndicatorSeparator: undefined,
        }}
      />
    </div>
  );
};

SelectComponent.displayName = 'Select';