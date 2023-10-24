!function(){"use strict";const t={containerGame:document.getElementById("container-game"),screen:document.querySelector(".screen")},s=["#ff0000","#ff8c00","#ffd700","#228b22","#00bfff","#0000cd","#8a2be2","#000000","#da70d6","#8B4513","#808080"],e=["Красный","Оранжевый","Жёлтый","Зелёный","Голубой","Синий","Фиолетовый","Чёрный","Розовый","Коричневый","Серый"],n=[{src1:"./img/svg/victory-01.svg",src2:"./img/svg/victory-light-01.svg",text:"Мур-рр! Поздравляю с успешным прохождением испытания!"},{src1:"./img/svg/victory-02.svg",src2:"./img/svg/victory-light-02.svg",text:"Мяу-у! Ты молодец!  Лови вкусняшку!"},{src1:"./img/svg/victory-03.svg",src2:"./img/svg/victory-light-03.svg",text:"Поздравляю с мур-победой! Рыбка для тебя!"},{src1:"./img/svg/victory-04.svg",src2:"./img/svg/victory-light-04.svg",text:"Мур-рр! Ты справился с испытанием на ура! Мы с рыбкой тобой довольны!"},{src1:"./img/svg/victory-05.svg",src2:"./img/svg/victory-light-05.svg",text:"Ты настоящий мур-гений! Я в тебе нисколько не сомневался!"},{src1:"./img/svg/victory-06.svg",src2:"./img/svg/victory-light-06.svg",text:"Мур-рр! Ты справился с испытанием на высшем уровне! Держи пять!"},{src1:"./img/svg/victory-07.svg",src2:"./img/svg/victory-light-07.svg",text:"Ты настоящий мур-чемпион в испытаниях на внимание! Сердечко для тебя!"},{src1:"./img/svg/victory-08.svg",src2:"./img/svg/victory-light-08.svg",text:"Поздравляю! Мы с тобой настоящие мур-гении!"},{src1:"./img/svg/victory-09.svg",src2:"./img/svg/victory-light-09.svg",text:"Мяу-у! Ты мур-герой! Булочка, чтобы укрепить силы!"},{src1:"./img/svg/victory-10.svg",src2:"./img/svg/victory-light-10.svg",text:"Поздравляю с отличным результатом в испытании! Сердечно рад!"},{src1:"./img/svg/victory-11.svg",src2:"./img/svg/victory-light-11.svg",text:"Мяу-у! Моё уважение! Ты продемонстрировал отличные навыки!"},{src1:"./img/svg/victory-12.svg",src2:"./img/svg/victory-light-12.svg",text:"Мяу-у! Поздравляю с отличным результатом и желаю побольше интересных задач!"},{src1:"./img/svg/victory-13.svg",src2:"./img/svg/victory-light-13.svg",text:"Поздравляю с успешным прохождением испытания! Приз для тебя!"},{src1:"./img/svg/victory-14.svg",src2:"./img/svg/victory-light-14.svg",text:"Мур-рр! Поздравляю! Большие достижения начинаются с маленького шага!"},{src1:"./img/svg/victory-15.svg",src2:"./img/svg/victory-light-15.svg",text:"Спешу тебя поздравить! Ты настоящий мур-гений!"},{src1:"./img/svg/victory-16.svg",src2:"./img/svg/victory-light-16.svg",text:"Мур-рр! Твоя смекалка и находчивость достойны похвалы! Готов поделиться рыбкой!"},{src1:"./img/svg/victory-17.svg",src2:"./img/svg/victory-light-17.svg",text:"Поздравляю! Ты показал, что мур-ум у тебя острый и готов к новым вызовам."},{src1:"./img/svg/victory-18.svg",src2:"./img/svg/victory-light-18.svg",text:"С мур-победой тебя! Лучший твой подарочек это Я!"},{src1:"./img/svg/victory-19.svg",src2:"./img/svg/victory-light-19.svg",text:"Мяу-у! Поздравляю с победой в испытании! Возьми с полки рыбку!"},{src1:"./img/svg/victory-20.svg",src2:"./img/svg/victory-light-20.svg",text:"Ты показал, что мур-ум у тебя острый и готов к новым вызовам."}],i=[{src1:"./img/svg/defeat-01.svg",src2:"./img/svg/defeat-light-01.svg",text:"Мяу-у... Не беспокойся, неудачи случаются. Больше тренировок и все получится!"},{src1:"./img/svg/defeat-02.svg",src2:"./img/svg/defeat-light-02.svg",text:"Мур-рр... Не получилось с первого раза, не сдавайся! Лучше ещё раз пройди испытание!"},{src1:"./img/svg/defeat-03.svg",src2:"./img/svg/defeat-light-03.svg",text:'Мяу-у... Скажи неудачам: "Я с вами справлюсь!" И пройди испытание еще раз!'},{src1:"./img/svg/defeat-04.svg",src2:"./img/svg/defeat-light-04.svg",text:"Мур-рр... Жаль! Возможно стоит немного отдохнуть и попробовать ещё раз?"},{src1:"./img/svg/defeat-05.svg",src2:"./img/svg/defeat-light-05.svg",text:"Не получилось в этот раз, получится в следующий! Вперед, к цели!"},{src1:"./img/svg/defeat-06.svg",src2:"./img/svg/defeat-light-06.svg",text:"Не расстраивайся! Ты можешь использовать свой опыт, чтобы достичь своих мур-целей."},{src1:"./img/svg/defeat-07.svg",src2:"./img/svg/defeat-light-07.svg",text:"Не сдавайся, мур-герой! Подкрепись и попробуй ещё раз!"},{src1:"./img/svg/defeat-08.svg",src2:"./img/svg/defeat-light-08.svg",text:"Мяу... Неудача - это не конец, а лишь начало пути. Старайся, а то покусаю :)"},{src1:"./img/svg/defeat-09.svg",src2:"./img/svg/defeat-light-09.svg",text:"Мур-рр... Неудача - это возможность показать свою настоящую мур-силу и упорство"},{src1:"./img/svg/defeat-10.svg",src2:"./img/svg/defeat-light-10.svg",text:"Мяу-у... Не переживай! Потренируйся ещё, а я приготовлю для тебя вкусняшку!"}];(function(){let g,c=1500,a=9,v=1,d=!1;function l(t,s){t.innerHTML=s}function o(t){const s=document.createElement("div");s.className="screen",t.append(s);const e=document.querySelector(".screen");return e.classList.add("up"),e.innerHTML="",s}function m(){document.querySelector(".screen").remove()}function r(t,s,e=-1){const n=Math.round(Math.random()*(s-t)+t);return n===e?n+1?n+1:n-1:n}function u(t,s){t.addEventListener("click",(e=>{e.target.classList.contains("button")&&("speed"===s&&(c=Number(e.target.dataset[s])),"sound"===s&&(v=Number(e.target.dataset[s])),t.querySelectorAll(".button").forEach((t=>{t.classList.remove("button--active")})),e.target.classList.add("button--active"))}))}function _(){if(0===a)clearInterval(g),m(),l(o(t.containerGame),'\n    <div class="game__inner game__inner--finish">\n      <div class="game__img">\n        <img src="./img/svg/finish.svg" alt="Котик смотрит на знак вопроса" />\n      </div>\n      <div class="game__descr">\n        <h2 class="game__title">Оцени себя.<br> У тебя все получилось?</h2>\n        <div class="game__img--mobile">\n          <img src="./img/svg/finish.svg" alt="Котик смотрит на знак вопроса" />\n        </div>\n        <div class="game__buttons-list game__buttons-list--grade" id="buttons-list-grade">\n          <button class="game__button--grade button button--green" id="button-yes"><span class="icon icon--smile"></span>Да</button>\n          <button class="game__button--grade button button--red" id="button-no"><span class="icon icon--sad"></span>Нет</button>\n        </div>\n      </div>\n    </div>\n    '),function(){const s=new Audio;if(s.src="./files/stop.mp3",v&&s.play(),document.getElementById("buttons-list-grade")){const e=document.getElementById("button-yes"),g=document.getElementById("button-no");function u(){m(),l(o(t.containerGame),function(){const{src1:t,text:s}=d?n[r(0,n.length-1)]:i[r(0,i.length-1)];return`\n    <div class="game__inner game__inner--finish">\n      <div class="game__descr">\n        <h2 class="game__title">${s}</h2>\n        <div class="game__img--mobile">\n          <img src=${t} alt="Котик" />\n        </div>\n        <button class="game__button button button--light" id="new-game-btn">Играть снова</button>\n      </div>\n      <div class="game__img">\n        <img src=${t} alt="Котик" />\n      </div>\n    </div>\n    `}()),function(){const s=new Audio;s.src=d?"./files/victory.mp3":"./files/defeat.mp3",v&&s.play(),document.getElementById("new-game-btn")&&document.getElementById("new-game-btn").addEventListener("click",(s=>{s.preventDefault(),m(),l(o(t.containerGame),'\n    <div class="game__inner game__inner--start">\n      <div class="game__img game__slider-list">\n        <div class="game__slide game__slide--active">\n          <img src="./img/svg/start-01.svg" alt="Котик с красным клубком" />\n        </div>\n        <div class="game__slide">\n          <img src="./img/svg/start-02.svg" alt="Котик с голубым клубком" />\n        </div>\n        <div class="game__slide">\n          <img src="./img/svg/start-03.svg" alt="Котик с зеленым клубком" />\n        </div>\n        <div class="game__slide">\n          <img src="./img/svg/start-04.svg" alt="Котик с фиолетовым клубком" />\n        </div>\n      </div>\n      <div class="game__descr">\n        <h2 class="game__title">Назови цвет</h2>\n        <div class="game__img--mobile">\n          <img src="./img/svg/start-01.svg" alt="Котик с красным клубком" />\n        </div>\n        <p class="game__text">\n            Пришла пора тренировки внимания! Не читай, что написано, просто называй цвета.\n        </p>\n        <button class="game__button button button--light" id="settings-btn">Пройти испытание</button>\n      </div>\n    </div>\n    '),b(),c=1500,a=9,v=1}))}()}e.addEventListener("click",(t=>{t.preventDefault(),d=!0,u()})),g.addEventListener("click",(t=>{t.preventDefault(),d=!1,u()}))}}();else{document.querySelectorAll(".game__board-item").forEach((t=>{t.textContent=""}));const t=document.getElementById(`item-${r(1,6)}`),n=r(0,e.length),i=r(0,e.length,n);if(t.textContent=e[n],t.style.color=s[i],t.textContent){const t=new Audio;t.src="./files/new.mp3",v&&t.play(),a--}}}function b(){(function(){if(document.querySelector(".game__slider-list")){let t=0;const s=document.querySelectorAll(".game__slide");function e(t){s.forEach((t=>{t.classList.remove("game__slide--active")})),s[t].classList.add("game__slide--active")}function n(){t===s.length-1?(t=0,e(t)):(t++,e(t))}setInterval(n,2e3)}})(),document.getElementById("settings-btn")&&document.getElementById("settings-btn").addEventListener("click",(s=>{s.preventDefault(),document.querySelectorAll(".screen").length>1&&m(),l(o(t.containerGame),'\n            <div class="game__inner game__inner--setting">\n              <div class="game__descr">\n                <h2 class="game__title">Настройки</h2>\n                <div class="game__text">\n                  До начала испытания всего один шаг. Выбери подходящие настройки.\n                  <h3 class="game__subtitle">Скорость смены слов:</h3>\n                  <div class="game__buttons-list" id="buttons-list-speed">\n                    <button class="game__button--setting button" data-speed="2000"><span class="icon icon--bike"></span>Медленно</button>\n                    <button class="game__button--setting button button--active" data-speed="1500"><span class="icon icon--car"></span>Средне</button>\n                    <button class="game__button--setting button" data-speed="800"><span class="icon icon--rocket"></span>Быстро</button>\n                  </div>\n                  <h3 class="game__subtitle">Количество слов:</h3>\n                  <div class="game__range">\n                    <div class="slider__value">\n                      <span id="slider__value">9</span>\n                    </div>\n                    <div class="field">\n                      <div class="value left">4</div>\n                      <input id="slider__input" type="range" min="4" max="14" value="9" steps="1">\n                      <div class="value right">14</div>\n                    </div>\n                  </div>\n                  <div class="game__sound-inner">\n                    <h3 class="game__subtitle">Звук:</h3>\n                    <div class="game__buttons-list" id="buttons-list-sound">\n                      <button class="game__button--setting button button--active" data-sound="1"><span class="icon icon--sound-on"></span>Включен</button>\n                      <button class="game__button--setting button" data-sound="0"><span class="icon icon--sound-off"></span>Выключен</button>\n                    </div>\n                  </div>\n                  <button class="game__button button button--light" id="start-btn">Начать</button>\n                </div>\n              </div>\n              <div class="game__img">\n                <img src="./img/svg/settings.svg" alt="Котик с ноут буком" />\n              </div>\n            </div>\n    '),function(){if(document.getElementById("buttons-list-speed")&&u(document.getElementById("buttons-list-speed"),"speed"),document.querySelector(".game__range")){const t=document.getElementById("slider__value"),s=document.getElementById("slider__input");s.oninput=()=>{a=s.value,t.textContent=a,t.style.left=10*a-40+"%"}}document.getElementById("buttons-list-sound")&&u(document.getElementById("buttons-list-sound"),"sound"),document.getElementById("start-btn")&&document.getElementById("start-btn").addEventListener("click",(s=>{s.preventDefault(),m(),l(o(t.containerGame),'\n            <div class="game__inner">\n              <div class="game__board" id="board">\n                <div class="game__board-item" id="item-1"></div>\n                <div class="game__board-item" id="item-2"></div>\n                <div class="game__board-item" id="item-3"></div>\n                <div class="game__board-item" id="item-4"></div>\n                <div class="game__board-item" id="item-5"></div>\n                <div class="game__board-item" id="item-6"></div>\n              </div>\n            </div>\n    '),document.getElementById("board")&&(g=setInterval(_,c))}))}()}))}l(t.screen,'\n    <div class="game__inner game__inner--start">\n      <div class="game__img game__slider-list">\n        <div class="game__slide game__slide--active">\n          <img src="./img/svg/start-01.svg" alt="Котик с красным клубком" />\n        </div>\n        <div class="game__slide">\n          <img src="./img/svg/start-02.svg" alt="Котик с голубым клубком" />\n        </div>\n        <div class="game__slide">\n          <img src="./img/svg/start-03.svg" alt="Котик с зеленым клубком" />\n        </div>\n        <div class="game__slide">\n          <img src="./img/svg/start-04.svg" alt="Котик с фиолетовым клубком" />\n        </div>\n      </div>\n      <div class="game__descr">\n        <h2 class="game__title">Назови цвет</h2>\n        <div class="game__img--mobile">\n          <img src="./img/svg/start-01.svg" alt="Котик с красным клубком" />\n        </div>\n        <p class="game__text">\n            Пришла пора тренировки внимания! Не читай, что написано, просто называй цвета.\n        </p>\n        <button class="game__button button button--light" id="settings-btn">Пройти испытание</button>\n      </div>\n    </div>\n    '),b()})(),function(){const t=document.querySelector(".mobile-nav-btn"),s=document.querySelector(".mobile-nav"),e=document.querySelector(".nav-icon"),n=document.querySelector(".overlay");t.addEventListener("click",(()=>{s.classList.toggle("mobile-nav--open"),e.classList.toggle("nav-icon--active"),n.classList.toggle("overlay--active"),document.body.classList.toggle("no-scroll")}))}()}();