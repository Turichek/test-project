import React, { FC } from "react";
import classNames from "classnames";
import { Text, TextVariantEnum } from "components/Text";

import { TabsProps } from "./Tabs.types";

import styles from "./Tabs.module.scss";

export const TabsComponent: FC<TabsProps> = ({
  title,
  tools,
  children,
  active,
  alwaysShowLines = false,
  className,
}) => {
  const TabsClass = classNames(styles.tabs_container, className);

  return (
    <div className={TabsClass}>
      <Text className={styles.title} variant={TextVariantEnum.h1}>
        {title}
      </Text>
      <ul className={styles.tabs}>
        {children?.map((child, index) => (
          <li
            key={index}
            className={classNames(styles.tab, {
              [styles.active]: active === index,
            })}
          >
            {child}
            <div
              className={classNames(styles.line, {
                [styles.always]: alwaysShowLines,
              })}
            ></div>
          </li>
        ))}
      </ul>
      <div className={styles.tools}>{tools}</div>
      <div className={classNames(styles.tabs_line)}></div>
    </div>
  );
};

TabsComponent.displayName = "Tabs";
