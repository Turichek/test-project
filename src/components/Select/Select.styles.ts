import { StylesConfig } from "react-select"
import { OptionsProps } from "./Select.types"

const StyleForAllOptions = {
  width: '322px',
  padding: '8px 16px',
  margin: "4px 4px",
  borderRadius: '4px',
}

export const customDefaultStyle: StylesConfig<OptionsProps> = {
  option: (styles, { isFocused, isSelected }) => ({
    ...styles,
    ...StyleForAllOptions,
    width: '322px',
    padding: '8px 16px',
    margin: "4px 4px",
    borderRadius: '4px',
    backgroundColor: isSelected ? 'var(--primary)' : isFocused ? '#f5f6f7' : undefined,
    color: isSelected ? 'var(--white)' : 'var(--dark-grey)',
    ':active': {
      backgroundColor: 'var(--light-grey)',
    }
  })
}

export const customWithCheckBoxStyle: StylesConfig<OptionsProps> = {
  option: (styles) => ({
    ...styles,
    ...StyleForAllOptions,
    display: 'flex',
    backgroundColor: undefined,
    color: 'var(--dark-grey)',
    ':active': {
      backgroundColor: undefined,
    }
  })
}

export const customFilterStyle: StylesConfig<OptionsProps> = {
  option: (styles, { isFocused, isSelected }) => ({
    ...styles,
    ...StyleForAllOptions,
    backgroundColor: isSelected ? 'var(--primary)' : isFocused ? '#f5f6f7' : undefined,
    color: isSelected ? 'var(--white)' : 'var(--dark-grey)',
    ':active': {
      backgroundColor: 'var(--light-grey)',
    }
  })
}

export const SelectStyle: StylesConfig<OptionsProps> = {
  dropdownIndicator: (styles) => ({
    ...styles,
    padding: 0,
  }),
  input: (styles) => ({
    ...styles,
    top: 0,
    position: 'absolute',
    padding: 0,
    width: '100%',
    height: '100%',
    margin: 0,
    display: 'inline-block',
    gridTemplateColumns: '',
    fontSize: '16px',
    lineHeight: '24px',
    '>input': {
      height: "100%",
      padding: '0px 16px !important',
    },
    '::after': {
      display: 'none'
    }
  }),
  placeholder: (styles) => ({
    ...styles,
    padding: '0px 16px !important',
  }),
  singleValue: (styles) => ({
    ...styles,
    padding: '0px 16px !important',
  }),
  valueContainer: (styles) => ({
    ...styles,
    position: 'relative',
    padding: 0,
    display: 'flex',
    alignItems: 'center',
  }),
  menuList: (styles) => ({
    ...styles,
    padding: 0,
  }),
  menu: (styles) => ({
    ...styles,
    maxWidth: '330px',
  }),
}