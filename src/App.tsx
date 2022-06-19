import React, { useState } from 'react';
import { Avatar, AvatarVariantEnum } from 'components/Avatar';
import { AvatarWithInfo } from 'components/AvatarWithInfo';
import { Checkbox } from 'components/Chechbox';
import { Radio } from 'components/Radio';
import { Toggle } from 'components/Toggle';
import { Text, TextVariantEnum } from 'components/Text';
import styles from './styles/App.module.scss';
import { Input, InputVariantEnum } from 'components/Input';
import { IconsEnum, SvgIcon } from 'components/SvgIcon';
import { Password } from 'components/Password';
import { Datepicker } from 'components/Datepicker';
import { Select, testOption } from 'components/Select';
import { MultiValue, SingleValue } from 'react-select';

function App() {
  const [selected, setSelected] = useState('');
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');
  const [text4, setText4] = useState('');
  const [text5, setText5] = useState('');
  const [text6, setText6] = useState('');
  const [text7, setText7] = useState('');
  const [select1, setSelect1] = useState<SingleValue<testOption>>({value: '', label: ''});
  const [date1, setDate1] = useState<Date | null>(new Date());

  const [rightSide] = useState(<SvgIcon className={styles.svg} onClick={() => { }} src={IconsEnum.eye} color={'grey'} />)

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
        <div className={styles.mb_5}><Input value={text1} onChange={(e) => { setText1(e.target.value) }} variant={InputVariantEnum.lg} /></div>
        <div className={styles.mb_5}><Input value={text2} onChange={(e) => { setText2(e.target.value) }} variant={InputVariantEnum.md} /></div>

        <Text className={styles.mb_10} variant={TextVariantEnum.h3}>Inputs with icon</Text>
        <div className={styles.mb_5}><Input value={text3} onChange={(e) => { setText3(e.target.value) }} variant={InputVariantEnum.lg} rightSide={rightSide} /></div>
        <div className={styles.mb_5}><Input value={text4} onChange={(e) => { setText4(e.target.value) }} variant={InputVariantEnum.md} rightSide={rightSide} /></div>

        <Text className={styles.mb_10} variant={TextVariantEnum.h3}>Inputs with label</Text>
        <div className={styles.mb_5}><Input value={text5} onChange={(e) => { setText5(e.target.value) }} variant={InputVariantEnum.lg} label='Текст' /></div>
        <div className={styles.mb_5}><Input value={text6} onChange={(e) => { setText6(e.target.value) }} variant={InputVariantEnum.md} label='Какой-то' /></div>
      </div>
      <div className={styles.category}>
        <Text className={styles.mb_10} variant={TextVariantEnum.h3}>Select</Text>
        <div className={styles.mb_5}><Select value={select1} onChange={(newValue) => { setSelect1(newValue) }} variant={InputVariantEnum.lg} /></div>
      </div>
      <div className={styles.category}>
        <Text className={styles.mb_10} variant={TextVariantEnum.h3}>Password</Text>
        <div className={styles.mb_5}><Password value={text7} onChange={(e) => { setText7(e.target.value) }} variant={InputVariantEnum.lg} /></div>
        <div className={styles.mb_5}><Password value={text7} onChange={(e) => { setText7(e.target.value) }} variant={InputVariantEnum.md} /></div>
      </div>
      <div className={styles.category}>
        <Text className={styles.mb_10} variant={TextVariantEnum.h3}>Сalendar</Text>
        <div className={styles.mb_5}><Datepicker value={date1} onChange={(date) => { setDate1(date) }} variant={InputVariantEnum.lg} /></div>
      </div>
    </>
  );
}

export default App;
