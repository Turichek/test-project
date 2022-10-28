import React, { FC } from "react";

import { Text, TextVariantEnum } from "../Text";

import { TabProps } from "./Tabs.types";

export const TabComponent: FC<TabProps> = ({
  title,
  titleComponent,
  onClick,
}) => {
  return (
    <div onClick={onClick}>
      {titleComponent ? (
        titleComponent
      ) : (
        <Text variant={TextVariantEnum.sub_sm}>{title}</Text>
      )}
    </div>
  );
};

TabComponent.displayName = "Tab";
