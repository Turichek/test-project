import React, { useState } from "react";
import { Modal } from "..";
import { Button, ButtonVariantEnum } from "components/Button";
import { IconsEnum, SvgIcon } from "components/SvgIcon";
import { Text, TextVariantEnum } from "components/Text";

import { Story } from "@storybook/react";

import { ModalProps } from "./Modal.types";

import styles from "../../../styles/App.module.scss";

export default {
  title: "Components/Modal",
  component: Modal,
};

const Template: Story<ModalProps> = (args) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <Button
        variant={ButtonVariantEnum.primary}
        text="Открыть модалку"
        onClick={() => setIsOpenModal(true)}
      />
      <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
        <div className={styles.count_modal}>
          <div className={styles.info}>
            <SvgIcon src={IconsEnum.allerts} size={64} color="orange" />
            <Text variant={TextVariantEnum.h2}>
              Вы хотите увеличить количество?
            </Text>
            <Text variant={TextVariantEnum.body_lg}>
              Позиция уже существует в проекте.
            </Text>
          </div>
          <div className={styles.buttons}>
            <Button
              variant={ButtonVariantEnum.primary}
              size="lg"
              width="full"
              text="Да, увеличить"
            />
            <Button
              variant={ButtonVariantEnum.outlined}
              size="lg"
              width="full"
              text="Отменить"
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export const modal = Template.bind({});
modal.args = {
  isOpen: false,
};
