import { DOM } from './dom-element';
import { COLORS, WORDS, DEFEAT, VICTORY } from './settings';

function showGame() {
  let speed = 1500;
  let countWords = 9;
  let sound = 1;
  let isVictory = false;
  let timerId;

  /**
   * Добавляет разметку в родительский элемент.
   *
   * @param {object} parentElement Родительский элемент.
   * @param {string} childElement Разметка дочернего элемента.
   */
  function addMarkup(parentElement, childElement) {
    parentElement.innerHTML = childElement;
  }

  function addScreen(parentElement) {
    const newScreen = document.createElement('div');
    newScreen.className = 'screen';
    parentElement.append(newScreen);

    const screenFirst = document.querySelector('.screen');
    screenFirst.classList.add('up');
    screenFirst.innerHTML = '';

    return newScreen;
  }

  function removeScreen() {
    const screenFirst = document.querySelector('.screen');
    screenFirst.remove();
  }

  /**
   * Возвращает рандомное число из заданного диапазона.
   *
   * @param {number} min минимальное значение.
   * @param {number} max максимальное значение.
   * @return {string} разметка экрана с результатами игры.
   */
  function getRandomNumber(min, max, exception = -1) {
    const randomNumber = Math.round(Math.random() * (max - min) + min);
    if (randomNumber !== exception) {
      return randomNumber;
    }
    getRandomNumber(min, max, exception);
  }

  function changeActiveButton(parentElement, param) {
    parentElement.addEventListener('click', (event) => {
      if (event.target.classList.contains('button')) {
        if (param === 'speed') speed = Number(event.target.dataset[param]);
        if (param === 'sound') sound = Number(event.target.dataset[param]);

        const buttons = parentElement.querySelectorAll('.button');

        buttons.forEach((button) => {
          button.classList.remove('button--active');
        });

        event.target.classList.add('button--active');
      }
    });
  }

  function showWord() {
    if (countWords === 0) {
      finishGame();
    } else {
      const gameBoardItemsList = document.querySelectorAll('.game__board-item');
      gameBoardItemsList.forEach((item) => {
        item.textContent = '';
      });

      const activeItem = document.getElementById(
        `item-${getRandomNumber(1, 6)}`
      );
      const indexWord = getRandomNumber(0, WORDS.length);
      const indexColor = getRandomNumber(0, WORDS.length, indexWord);
      activeItem.textContent = WORDS[indexWord];
      activeItem.style.color = COLORS[indexColor];

      const newWordAudio = new Audio();
      newWordAudio.src = './files/new.mp3';
      sound && newWordAudio.play();

      countWords--;
    }
  }

  function finishGame() {
    clearInterval(timerId);
    removeScreen();
    const screen = addScreen(DOM.containerGame);
    addMarkup(screen, createFinishScreen());
    addFunctionaliatyFinishScreen();
  }

  /**
   * Формирует и возвращает разметку стартового экрана.
   *
   * @return {string} разметка стартового экрана.
   */
  function createStartScreen() {
    const markup = `
    <div class="game__inner game__inner--start">
      <div class="game__img game__slider-list">
        <div class="game__slide game__slide--active">
          <img src="./img/svg/start-01.svg" alt="Котик с красным клубком" />
        </div>
        <div class="game__slide">
          <img src="./img/svg/start-02.svg" alt="Котик с голубым клубком" />
        </div>
        <div class="game__slide">
          <img src="./img/svg/start-03.svg" alt="Котик с зеленым клубком" />
        </div>
        <div class="game__slide">
          <img src="./img/svg/start-04.svg" alt="Котик с фиолетовым клубком" />
        </div>
      </div>
      <div class="game__descr">
        <h2 class="game__title">Назови цвет</h2>
        <p class="game__text">
            Пришла пора тренировки внимания! Не читай, что написано, просто называй цвета.
        </p>
        <button class="game__button button button--light" id="settings-btn">Пройти испытание</button>
      </div>
    </div>
    `;

    return markup;
  }

  /**
   * Формирует и возвращает разметку экрана с настройками.
   *
   * @return {string} разметка экрана с настройками.
   */
  function createSettingsScreen() {
    const markup = `
            <div class="game__inner">
              <div class="game__descr">
                <h2 class="game__title">Настройки</h2>
                <div class="game__text">
                  До начала испытания всего один шаг. Выбери подходящие настройки.
                  <h3 class="game__subtitle">Скорость смены слов:</h3>
                  <div class="game__buttons-list" id="buttons-list-speed">
                    <button class="game__button--setting button" data-speed="2000"><span class="icon icon--bike"></span>Медленно</button>
                    <button class="game__button--setting button button--active" data-speed="1500"><span class="icon icon--car"></span>Средне</button>
                    <button class="game__button--setting button" data-speed="800"><span class="icon icon--rocket"></span>Быстро</button>
                  </div>
                  <h3 class="game__subtitle">Количество слов:</h3>
                  <div class="game__range">
                    <div class="slider__value">
                      <span id="slider__value">9</span>
                    </div>
                    <div class="field">
                      <div class="value left">4</div>
                      <input id="slider__input" type="range" min="4" max="14" value="9" steps="1">
                      <div class="value right">14</div>
                    </div>
                  </div>
                  <div class="game__sound-inner">
                    <h3 class="game__subtitle">Звук:</h3>
                    <div class="game__buttons-list" id="buttons-list-sound">
                      <button class="game__button--setting button button--active" data-sound="1"><span class="icon icon--sound-on"></span>Включен</button>
                      <button class="game__button--setting button" data-sound="0"><span class="icon icon--sound-off"></span>Выключен</button>
                    </div>
                  </div>
                  <button class="game__button button button--light" id="start-btn">Начать</button>
                </div>
              </div>
              <div class="game__img">
                <img src="./img/svg/settings.svg" alt="Котик с ноут буком" />
              </div>
            </div>
    `;

    return markup;
  }

  function createGameScreen() {
    const markup = `
            <div class="game__inner">
              <div class="game__board" id="board">
                <div class="game__board-item" id="item-1"></div>
                <div class="game__board-item" id="item-2"></div>
                <div class="game__board-item" id="item-3"></div>
                <div class="game__board-item" id="item-4"></div>
                <div class="game__board-item" id="item-5"></div>
                <div class="game__board-item" id="item-6"></div>
              </div>
            </div>
    `;

    return markup;
  }

  function createFinishScreen() {
    const markup = `
    <div class="game__inner game__inner--finish">
      <div class="game__img">
        <img src="./img/svg/finish.svg" alt="Котик смотрит на знак вопроса" />
      </div>
      <div class="game__descr">
        <h2 class="game__title">Оцени себя.<br> У тебя все получилось?</h2>
        <div class="game__buttons-list game__buttons-list--grade" id="buttons-list-grade">
          <button class="game__button--grade button button--green" id="button-yes"><span class="icon icon--smile"></span>Да</button>
          <button class="game__button--grade button button--red" id="button-no"><span class="icon icon--sad"></span>Нет</button>
        </div>
      </div>
    </div>
    `;

    return markup;
  }

  function createResScreen() {
    const { src, text } = isVictory
      ? VICTORY[getRandomNumber(0, VICTORY.length - 1)]
      : DEFEAT[getRandomNumber(0, DEFEAT.length - 1)];
    const markup = `
    <div class="game__inner game__inner--finish">
      <div class="game__descr">
        <h2 class="game__title">${text}</h2>
        <button class="game__button button button--light" id="new-game-btn">Играть снова</button>
      </div>
      <div class="game__img">
        <img src=${src} alt="Котик" />
      </div>
    </div>
    `;

    return markup;
  }

  /**
   * Добавляет обработчики событий для первого экрана, когда он сформирован.
   *
   */
  function addFunctionaliatyStartScreen() {
    if (document.getElementById('settings-btn')) {
      const settingsBtn = document.getElementById('settings-btn');

      settingsBtn.addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelectorAll('.screen').length > 1 && removeScreen();
        const screen = addScreen(DOM.containerGame);
        addMarkup(screen, createSettingsScreen());
        addFunctionaliatySettingsScreen();
      });
    }
  }

  /**
   * Добавляет обработчики событий для первого экрана, когда он сформирован.
   *
   */
  function addFunctionaliatySettingsScreen() {
    if (document.getElementById('buttons-list-speed')) {
      const buttonsListSpeed = document.getElementById('buttons-list-speed');
      changeActiveButton(buttonsListSpeed, 'speed');
    }

    if (document.querySelector('.game__range')) {
      const slideValue = document.getElementById('slider__value');
      const sliderInput = document.getElementById('slider__input');

      sliderInput.oninput = () => {
        countWords = sliderInput.value;
        slideValue.textContent = countWords;
        slideValue.style.left = `${countWords * 10 - 40}%`;
      };
    }

    if (document.getElementById('buttons-list-sound')) {
      const buttonsListSound = document.getElementById('buttons-list-sound');
      changeActiveButton(buttonsListSound, 'sound');
    }

    if (document.getElementById('start-btn')) {
      const startBtn = document.getElementById('start-btn');

      startBtn.addEventListener('click', (event) => {
        event.preventDefault();
        removeScreen();
        const screen = addScreen(DOM.containerGame);
        addMarkup(screen, createGameScreen());
        addFunctionaliatyGameScreen();
      });
    }
  }

  function addFunctionaliatyGameScreen() {
    if (document.getElementById('board')) {
      timerId = setInterval(showWord, speed);
    }
  }

  function addFunctionaliatyFinishScreen() {
    const finishAudio = new Audio();
    finishAudio.src = './files/stop.mp3';
    sound && finishAudio.play();

    if (document.getElementById('buttons-list-grade')) {
      const yesBtn = document.getElementById('button-yes');
      const noBtn = document.getElementById('button-no');

      function showResult() {
        removeScreen();
        const screen = addScreen(DOM.containerGame);
        addMarkup(screen, createResScreen());
        addFunctionaliatyResScreen();
      }

      yesBtn.addEventListener('click', (event) => {
        event.preventDefault();
        isVictory = true;
        showResult();
      });

      noBtn.addEventListener('click', (event) => {
        event.preventDefault();
        isVictory = false;
        showResult();
      });
    }
  }

  function addFunctionaliatyResScreen() {
    const resAudio = new Audio();
    resAudio.src = isVictory ? './files/victory.mp3' : './files/defeat.mp3';
    sound && resAudio.play();

    if (document.getElementById('new-game-btn')) {
      const newGameBtn = document.getElementById('new-game-btn');
      newGameBtn.addEventListener('click', (event) => {
        event.preventDefault();
        removeScreen();
        const screen = addScreen(DOM.containerGame);
        addMarkup(screen, createStartScreen());
        addFunctionaliatyStartScreen();
        speed = 1500;
        countWords = 9;
        sound = 1;
        // removeScreen();
      });
    }
  }

  addMarkup(DOM.screen, createStartScreen());
  addFunctionaliatyStartScreen();
}

export default showGame;
