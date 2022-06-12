import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Button from '../ui-components/Button/Button';
import Checkbox from '../ui-components/Checkbox/Checkbox';
import Icon from '../ui-components/Icon/Icon';
import TextFieldWrappper from '../ui-components/TextField/TextField';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <TextFieldWrappper name="firstName" label="First Name" required />
      <Checkbox name="Terms and conditions" label="Terms and conditions" />
      <Icon icon="create" fontSize="inherit" />
      <Button variant="primary" title="Test" />
    </div>
  );
};

export default Home;
