import React, { useState } from "react";
import { Avatar, AvatarVariantEnum } from "components/Avatar";
import { AvatarWithInfo } from "components/AvatarWithInfo";
import { BadgeColorEnum } from "components/Badge";
import { Button, ButtonVariantEnum } from "components/Button";
import { Checkbox } from "components/Chechbox";
import { Datepicker } from "components/Datepicker";
import { Input, InputVariantEnum } from "components/Input";
import { Modal } from "components/Modal";
import { Password } from "components/Password";
import { ProductCard } from "components/ProductCard";
import { OptionsProps, Select, SelectTypeEnum } from "components/Select";
import { IconsEnum, SvgIcon } from "components/SvgIcon";
import { Text, TextVariantEnum } from "components/Text";
import { Toggle } from "components/Toggle";
import { SingleValue } from "react-select";

import Img from "./assets/images/camera.png";

import styles from "./styles/App.module.scss";

function App() {
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);

  const [isOpenModal, setIsOpenModal] = useState(false);

  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);

  const options1 = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const [select1, setSelect1] = useState<SingleValue<OptionsProps>>(
    options1[0]
  );

  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");
  const [text5, setText5] = useState("");
  const [text6, setText6] = useState("");
  const [text7, setText7] = useState("");
  const [text8, setText8] = useState("");

  const [date1, setDate1] = useState<Date | null>(new Date());
  const [rightSide] = useState(
    <SvgIcon
      className={styles.svg}
      onClick={() => {}}
      size={24}
      src={IconsEnum.eye}
      color={"grey"}
    />
  );

  return (
    <>
      <Button
        variant={ButtonVariantEnum.primary}
        text="Открыть модалку"
        onClick={() => setIsOpenModal(true)}
      />
      <div className={styles.category}>
        <Text className={styles.mb_10} variant={TextVariantEnum.h3}>
          Avatars
        </Text>
        <AvatarWithInfo
          variant={AvatarVariantEnum.lg}
          name="Name"
          surname="Surname"
          position="123"
          email="123"
        ></AvatarWithInfo>
        <AvatarWithInfo
          variant={AvatarVariantEnum.md}
          name="Name"
          surname="Surname"
          email="123"
        ></AvatarWithInfo>
        <AvatarWithInfo
          variant={AvatarVariantEnum.sm}
          name="Name"
          surname="Surname"
          email="123"
        ></AvatarWithInfo>

        <Avatar variant={AvatarVariantEnum.lg} creds="NS"></Avatar>
        <Avatar variant={AvatarVariantEnum.md} creds="NS"></Avatar>
        <Avatar variant={AvatarVariantEnum.sm} creds="NS"></Avatar>
      </div>
      <div className={styles.category}>
        <Text className={styles.mb_10} variant={TextVariantEnum.h3}>
          Checkboxes
        </Text>
        <Checkbox
          checked={checkbox1}
          onClick={() => {
            setCheckbox1(!checkbox1);
          }}
          text="Name Surname"
        />
        <Checkbox
          checked={checkbox2}
          onClick={() => {
            setCheckbox2(!checkbox2);
          }}
        />
      </div>
      <div className={styles.category}>
        <Text className={styles.mb_10} variant={TextVariantEnum.h3}>
          Toggles
        </Text>
        <Toggle
          checked={toggle1}
          onClick={() => {
            setToggle1(!toggle1);
          }}
          text="Name Surname"
        />
        <Toggle
          checked={toggle2}
          onClick={() => {
            setToggle2(!toggle2);
          }}
        />
      </div>
      <div className={styles.category}>
        <Text className={styles.mb_10} variant={TextVariantEnum.h3}>
          Inputs
        </Text>
        <div className={styles.mb_5}>
          <Input
            value={text1}
            onChange={(e) => {
              setText1(e.target.value);
            }}
            variant={InputVariantEnum.lg}
          />
        </div>
        <div className={styles.mb_5}>
          <Input
            value={text2}
            onChange={(e) => {
              setText2(e.target.value);
            }}
            variant={InputVariantEnum.md}
          />
        </div>

        <Text className={styles.mb_10} variant={TextVariantEnum.h3}>
          Inputs with icon
        </Text>
        <div className={styles.mb_5}>
          <Input
            value={text3}
            onChange={(e) => {
              setText3(e.target.value);
            }}
            variant={InputVariantEnum.lg}
            rightSide={rightSide}
          />
        </div>
        <div className={styles.mb_5}>
          <Input
            value={text4}
            onChange={(e) => {
              setText4(e.target.value);
            }}
            variant={InputVariantEnum.md}
            rightSide={rightSide}
          />
        </div>

        <Text className={styles.mb_10} variant={TextVariantEnum.h3}>
          Inputs with label
        </Text>
        <div className={styles.mb_5}>
          <Input
            value={text5}
            onChange={(e) => {
              setText5(e.target.value);
            }}
            variant={InputVariantEnum.lg}
            label="Текст"
          />
        </div>
        <div className={styles.mb_5}>
          <Input
            value={text6}
            onChange={(e) => {
              setText6(e.target.value);
            }}
            variant={InputVariantEnum.md}
            label="Какой-то"
          />
        </div>
      </div>
      <div className={styles.category}>
        <Text className={styles.mb_10} variant={TextVariantEnum.h3}>
          Select
        </Text>
        <div className={styles.mb_5}>
          <Select
            type={SelectTypeEnum.default}
            options={options1}
            value={select1}
            onChange={(newValue) => {
              setSelect1(newValue);
            }}
            variant={InputVariantEnum.lg}
          />
        </div>
      </div>
      <div className={styles.category}>
        <Text className={styles.mb_10} variant={TextVariantEnum.h3}>
          Password
        </Text>
        <div className={styles.mb_5}>
          <Password
            value={text7}
            onChange={(e) => {
              setText7(e.target.value);
            }}
            variant={InputVariantEnum.lg}
          />
        </div>
        <div className={styles.mb_5}>
          <Password
            value={text8}
            onChange={(e) => {
              setText8(e.target.value);
            }}
            variant={InputVariantEnum.md}
          />
        </div>
      </div>
      <div className={styles.category}>
        <Text className={styles.mb_10} variant={TextVariantEnum.h3}>
          Сalendar
        </Text>
        <div className={styles.mb_5}>
          <Datepicker
            value={date1}
            onChange={(date) => {
              setDate1(date);
            }}
            variant={InputVariantEnum.lg}
          />
        </div>
      </div>
      <div className={styles.category}>
        <Text className={styles.mb_10} variant={TextVariantEnum.h3}>
          Cards
        </Text>
        <div className={styles.mb_5}>
          <ProductCard
            title="DS-2CD2821G0 (AC24V/DC12V)"
            subtitle="SAP123877"
            rating={4}
            description="2Мп IP-камера в стандартном корпусе"
            badges={[{ text: "Новый", color: BadgeColorEnum.light_green }]}
            src={Img}
            price={20000}
          />
        </div>
      </div>
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
}

export default App;
