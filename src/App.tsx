import React, { useState } from 'react';
import { Avatar, AvatarVariantEnum } from 'components/Avatar';
import { AvatarWithInfo } from 'components/AvatarWithInfo';
import { Checkbox } from 'components/Chechbox';
import { Radio } from 'components/Radio';
import { Toggle } from 'components/Toggle';
import { Text, TextVariantEnum } from 'components/Text';
import styles from  './styles/App.module.scss';
import { Input, InputVariantEnum } from 'components/Input';

function App() {
  const [selected, setSelected] = useState('');

  const ChangeSelectedRadio = (value: string) => {
    setSelected(value);
  }

  return (
    <>
      <div className={styles.category}>
        <Text className={styles.mb_10} variant={TextVariantEnum.h3}>Avatars</Text>
        <AvatarWithInfo variant={AvatarVariantEnum.lg} name='Vadim' surname='Turichenko' position='123' email='123'></AvatarWithInfo>
        <AvatarWithInfo variant={AvatarVariantEnum.md} name='Vadim' surname='Turichenko' email='123'></AvatarWithInfo>
        <AvatarWithInfo variant={AvatarVariantEnum.sm} name='Vadim' surname='Turichenko' email='123'></AvatarWithInfo>

        <Avatar variant={AvatarVariantEnum.lg} creds='TV'></Avatar>
        <Avatar variant={AvatarVariantEnum.md} creds='TV'></Avatar>
        <Avatar variant={AvatarVariantEnum.sm} creds='TV'></Avatar>
      </div>
      <div className={styles.category}>
        <Text className={styles.mb_10} variant={TextVariantEnum.h3}>Checkboxes</Text>
        <Checkbox checked={false} text="Vadim Turichenko" />
        <Checkbox checked={true} />
      </div>
      <div className={styles.category}>
        <Text className={styles.mb_10} variant={TextVariantEnum.h3}>Radios</Text>
        <Radio value='123' name='123' handelChangeSelected={ChangeSelectedRadio} toChecked={selected} text='asdasf' />
        <Radio value='345' name='123' handelChangeSelected={ChangeSelectedRadio} toChecked={selected} text='fassdv' />
        <Radio value='567' name='123' handelChangeSelected={ChangeSelectedRadio} toChecked={selected} text='asdngvnfgasf' />
      </div>
      <div className={styles.category}>
        <Text className={styles.mb_10} variant={TextVariantEnum.h3}>Toggles</Text>
        <Toggle checked={false} text="Vadim Turichenko" />
        <Toggle checked={true} />
      </div>
      <div className={styles.category}>
        <Text className={styles.mb_10} variant={TextVariantEnum.h3}>Inputs</Text>
        <Input variant={InputVariantEnum.lg} />
        <Input variant={InputVariantEnum.md}/>
      </div>
    </>
  );
}

export default App;
