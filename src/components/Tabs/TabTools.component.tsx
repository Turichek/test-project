import React, { FC } from "react";
import classNames from "classnames";

import { TapPanelProps } from "./Tabs.types";

import styles from "./Tabs.module.scss";

export const TabToolsComponent: FC<TapPanelProps> = ({
  children,
  className,
}) => {
  const TabToolsClass = classNames(styles.tabTools, className);

  return <div className={TabToolsClass}>{children}</div>;
};

TabToolsComponent.displayName = "TabTools";
