import React, { useRef } from "react";
import classNames from "classnames";
import { Text } from "components/Text";
import { TextVariantEnum } from "components/Text";

import { RadioProps } from "./Radio.types";

import styles from "./Radio.module.scss";

export const RadioComponent: React.FC<RadioProps> = ({
  text,
  name,
  checked,
  onChange,
  value,
  className,
}) => {
  const RadioClass = classNames(styles.radio, className);
  const radio = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    onChange(radio.current?.value);
  };

  return (
    <div className={RadioClass}>
      <input
        ref={radio}
        type="radio"
        onChange={() => {}}
        name={name}
        value={value}
        checked={checked}
      />
      <label onClick={handleClick}>
        <span>
          <div className={styles.dot}></div>
        </span>
        {text && <Text variant={TextVariantEnum.body_md}>{text}</Text>}
      </label>
    </div>
  );
};

RadioComponent.displayName = "Radio";
