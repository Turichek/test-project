import React, { ReactNode, useState } from "react";
import { Tab, TabPanel, Tabs } from ".";
import { Button, ButtonVariantEnum } from "components/Button";

import { Story } from "@storybook/react";

import { TabsProps } from "./Tabs.types";

import styles from "./Tabs.module.scss";

export default {
  title: "Components/Tabs",
  component: Tabs,
};

const TabsName = [
  {
    title: "Склады",
    tools: (
      <Button
        className={styles.button}
        variant={ButtonVariantEnum.primary}
        text="+ Новый склад"
      />
    ),
  },
  {
    title: "Теги",
    tools: (
      <Button
        className={styles.button}
        variant={ButtonVariantEnum.primary}
        text="+ Новый тег"
      />
    ),
  },
  {
    title: "Валюты",
    tools: (
      <Button
        className={styles.button}
        variant={ButtonVariantEnum.primary}
        text="+ Новую валюту"
      />
    ),
  },
];

const Template: Story<TabsProps> = (args) => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeTools, setActiveTools] = useState<ReactNode>(TabsName[0].tools);

  const handleClickTab = (tools: ReactNode, index: number) => {
    setActiveTab(index);
    setActiveTools(tools);
  };

  return (
    <>
      <Tabs tools={activeTools} title="Настройки системы" active={activeTab}>
        {TabsName.map((item, index) => (
          <Tab
            title={item.title}
            key={index}
            onClick={() => handleClickTab(item.tools, index)}
          />
        ))}
      </Tabs>
      <TabPanel active={activeTab} index={0}>
        <div style={{ padding: "20px 40px" }}>Склады</div>
      </TabPanel>
      <TabPanel active={activeTab} index={1}>
        <div style={{ padding: "20px 40px" }}>Теги</div>
      </TabPanel>
      <TabPanel active={activeTab} index={2}>
        <div style={{ padding: "20px 40px" }}>Валюты</div>
      </TabPanel>
    </>
  );
};

export const tabs = Template.bind({});
tabs.args = {};
