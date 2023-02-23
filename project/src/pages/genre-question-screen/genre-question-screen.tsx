import Logo from '../../components/logo/logo';

function GenreQuestionScreen(): JSX.Element {
  return (
    <section className="game game--genre">
      <header className="game__header">
        <Logo />

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx="390" cy="390" r="370"
            style={{filter: 'url(#blur)', transform: 'rotate(-90deg) scaleY(-1)', transformOrigin: 'center'}}
          />
        </svg>

        <div className="game__mistakes">
          <div className="wrong"/>
          <div className="wrong"/>
          <div className="wrong"/>
        </div>
      </header>

      <section className="game__screen">
        <h2 className="game__title">Выберите треки</h2>
        <form className="game__tracks">
          <div className="track">
            <button className="track__button track__button--play" type="button"></button>
            <div className="track__status">
              <audio></audio>
            </div>
            <div className="game__answer">
              <input className="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-1" />
              <label className="game__check" htmlFor="answer-1">Отметить</label>
            </div>
          </div>

          <div className="track">
            <button className="track__button track__button--play" type="button"></button>
            <div className="track__status">
              <audio></audio>
            </div>
            <div className="game__answer">
              <input className="game__input visually-hidden" type="checkbox" name="answer" value="answer-2" id="answer-2" />
              <label className="game__check" htmlFor="answer-2">Отметить</label>
            </div>
          </div>

          <div className="track">
            <button className="track__button track__button--pause" type="button"></button>
            <div className="track__status">
              <audio></audio>
            </div>
            <div className="game__answer">
              <input className="game__input visually-hidden" type="checkbox" name="answer" value="answer-3" id="answer-3" />
              <label className="game__check" htmlFor="answer-3">Отметить</label>
            </div>
          </div>

          <div className="track">
            <button className="track__button track__button--play" type="button"></button>
            <div className="track__status">
              <audio></audio>
            </div>
            <div className="game__answer">
              <input className="game__input visually-hidden" type="checkbox" name="answer" value="answer-4" id="answer-4" />
              <label className="game__check" htmlFor="answer-4">Отметить</label>
            </div>
          </div>

          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    </section>
  );
}

export default GenreQuestionScreen;
