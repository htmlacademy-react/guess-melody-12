import {Helmet} from 'react-helmet-async';

type WelcomeScreenProps = {
  errorsCount: number;
}

function WelcomeScreen({errorsCount}: WelcomeScreenProps): JSX.Element {
  return (
    <section className="welcome">
      <Helmet>
        <title>Угадай мелодию. Правила игры</title>
      </Helmet>
      <div className="welcome__logo">
        <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"/>
      </div>
      <button className="welcome__button"><span className="visually-hidden">Начать игру</span></button>
      <h2 className="welcome__rules-title">Правила игры</h2>
      <p className="welcome__text">Правила просты:</p>
      <ul className="welcome__rules-list">
        <li>Нужно ответить на все вопросы.</li>
        <li>Можно допустить {errorsCount} ошибки.</li>
      </ul>
      <p className="welcome__text">Удачи!</p>
    </section>
  );
}

export default WelcomeScreen;
