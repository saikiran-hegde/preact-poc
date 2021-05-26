import { h, Fragment } from 'preact';
import style from './style.css';

const Home = () => {
  // const badge = { value: 3 };
  return (
    <div class={style.home}>
      <h1>Home</h1>
      <p>This is the Home component.</p>
    </div>
  )
};

export default Home;
