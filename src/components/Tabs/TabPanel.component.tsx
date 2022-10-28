import React, { FC } from "react";
import classNames from "classnames";

import { TapPanelProps } from "./Tabs.types";

import styles from "./Tabs.module.scss";

export const TabPanelComponent: FC<TapPanelProps> = ({
  children,
  active,
  index,
  className,
}) => {
  const TabPanelClass = classNames(styles.tabPanel, className);

  return <div className={TabPanelClass}>{active === index && children}</div>;
};

TabPanelComponent.displayName = "TabPanel";
