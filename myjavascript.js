const wIW = window.innerWidth;
const wIH = window.innerHeight;

let lab_datetime = document.getElementById("labdatatime");    //Метка времени
let datetime = document.getElementById("datatime");           //строка ввода времени
let lab_distance = document.getElementById("labdistance");    //Метка пробега
let distance = document.getElementById("distance");           //строка ввода пробега
let lab_work = document.getElementById("labwork");            //Метка времени работы
let work = document.getElementById("work");                   //строка ввода времени работы
let lab_summ = document.getElementById("labsumm");            //Метка суммы
let summ = document.getElementById("summ");                   //строка ввода суммы
let lab_comission = document.getElementById("labcommission"); //Метка комиссии
let commission = document.getElementById("commission");       //строка ввода комиссии
let bt_ok = document.getElementById("ok");                    //Кнопка отправить
let bt_reset = document.getElementById("reset");              //Кнопка очистки
let bt_cansel = document.getElementById("cansel");            //Кнопка отмены
let paragraf = document.getElementById("paragraf");           //отступ
let mytarif = document.getElementById("mytarif");             //Тариф по заказу
let myrazhet = document.getElementById("myrazhet");           //Форма расчета
let myautozakaz = document.getElementById("myautozakaz");     //Автоматическое назначение
let myzvezda = document.getElementById("myzvezda");           //Заказ через приложение

let my_Zakaz = {     // объект с данными о заказе
  datetime: my_New_Date_Time(),  // Дата и время завершения заказа
  distance: "1.3",                // Пройденый путь по заказу
  work: "3",                      // Время выполнения заказа
  summ: "100",                    // Сумма полученная за выполнение заказа
  commission: "18",               // Снятая сумма комиссии за выполнение заказа
  mytarif: "0",                   // Тариф выполненого заказа
  myrazhet: "0",                  // Форма расчета за выполненый заказ
  myautozakaz: "1",               // Автоматическое назначение заказа
  myzvezda: "0",                  // Заказ сделан из приложения
};
console.log("my_Zakaz - ", my_Zakaz);

let my_New_Zakaz = {};
for (let key in my_Zakaz) {
  my_New_Zakaz[key] = my_Zakaz[key];
}

write_Zakaz();
out_size();

function write_Zakaz() {
  datetime.value = my_Zakaz.datetime;
  distance.value = my_Zakaz.distance;
  work.value = my_Zakaz.work;
  summ.value = my_Zakaz.summ;
  commission.value = my_Zakaz.commission;
  mytarif.value = my_Zakaz.mytarif;
  myrazhet.value = my_Zakaz.myrazhet;
  myautozakaz.value = my_Zakaz.myautozakaz;
  myzvezda.value = my_Zakaz.myzvezda;
};

function read_Zakaz() {
  my_Zakaz.datetime = datetime.value;
  my_Zakaz.distance = distance.value;
  my_Zakaz.work = work.value;
  my_Zakaz.summ = summ.value;
  my_Zakaz.commission = commission.value;
  my_Zakaz.mytarif = mytarif.value;
  my_Zakaz.myrazhet = myrazhet.value;
  my_Zakaz.myautozakaz = myautozakaz.value;
  my_Zakaz.myzvezda = myzvezda.value;
};

function out_size() {
  lab_datetime.style.fontSize = wIW / 32 + "px";
  datetime.style.fontSize = wIW / 32 + "px";
  datetime.style.width = wIW / 2.7 + "px";
  lab_distance.style.fontSize = wIW / 32 + "px";
  distance.style.fontSize = wIW / 32 + "px";
  distance.style.width = wIW / 2.7 + "px";
  lab_work.style.fontSize = wIW / 32 + "px";
  work.style.fontSize = wIW / 32 + "px";
  work.style.width = wIW / 2.7 + "px";
  lab_summ.style.fontSize = wIW / 32 + "px";
  summ.style.fontSize = wIW / 32 + "px";
  summ.style.width = wIW / 2.7 + "px";
  lab_comission.style.fontSize = wIW / 32 + "px";
  commission.style.fontSize = wIW / 32 + "px";
  commission.style.width = wIW / 2.7 + "px";
  bt_ok.style.fontSize = wIW / 32 + "px";
  bt_ok.style.width = wIW / 6 + "px";
  bt_reset.style.fontSize = wIW / 32 + "px";
  bt_reset.style.width = wIW / 6 + "px";
  bt_cansel.style.fontSize = wIW / 32 + "px";
  bt_cansel.style.width = wIW / 6 + "px";
  paragraf.style.fontSize = wIW / 32 + "px";
  mytarif.style.fontSize = wIW / 32 + "px";
  myrazhet.style.fontSize = wIW / 32 + "px";
  myautozakaz.style.fontSize = wIW / 32 + "px";
  myzvezda.style.fontSize = wIW / 32 + "px";
};

function ok_button() {
  newzakazdiv = document.getElementById("divnewzakaz");
  newzakazdiv.style.visibility = "hidden";
  addzakazdiv = document.getElementById("divaddzakaz");
  addzakazdiv.style.visibility = "visible";
  //Передача данных

  getDatePhp();
};

function cansel_button() {
  newzakazdiv = document.getElementById("divnewzakaz");
  newzakazdiv.style.visibility = "hidden";
  addzakazdiv = document.getElementById("divaddzakaz");
  addzakazdiv.style.visibility = "visible";
};

function reset_button() {
  my_Zakaz.datetime = my_New_Date_Time();
  write_Zakaz();
};

function my_New_Date_Time() { //Функция вывода текущего времени в текстовом формате
  let todey_datatime = new Date();
  let my_Hours = '';
  if (todey_datatime.getHours() < 10) {
    my_Hours = "0" + todey_datatime.getHours();
  } else {
    my_Hours = todey_datatime.getHours();
  }
  let my_Minutes = '';
  if (todey_datatime.getMinutes() < 10) {
    my_Minutes = "0" + todey_datatime.getMinutes();
  } else {
    my_Minutes = todey_datatime.getMinutes();
  }
  let my_Month = 1 + todey_datatime.getMonth();
  if (my_Month < 10) {
    my_Month = "0" + my_Month;
  } else {
    my_Month = "" + my_Month;
  }
  let my_Date = +todey_datatime.getDate();
  if (my_Date < 10) {
    my_Date = "0" + my_Date;
  } else {
    my_Date = "" + my_Date;
  }
  let text_data = todey_datatime.getFullYear() + "-" + my_Month + "-" + my_Date + "T" + my_Hours + ":" + my_Minutes;
  return text_data;
};

function newzakaz() {
  newzakazdiv = document.getElementById("divnewzakaz");
  newzakazdiv.style.visibility = "visible";
  addzakazdiv = document.getElementById("divaddzakaz");
  addzakazdiv.style.visibility = "hidden";
};

function getDatePhp() {
  let url = new URL('http://e923292q.beget.tech/php/data_in.php');
  url.searchParams.set('mytype', 'zakaz'); // добавим параметры
  url.searchParams.set('datetime', datetime.value);
  url.searchParams.set('distance', distance.value);
  url.searchParams.set('work', work.value);
  url.searchParams.set('summ', summ.value);
  url.searchParams.set('commission', commission.value);
  url.searchParams.set('tarif', mytarif.value);
  url.searchParams.set('myrazhet', myrazhet.value);
  url.searchParams.set('myautozakaz', myautozakaz.value);
  url.searchParams.set('myzvezda', myzvezda.value);
  console.log(url);//http://e923292q.beget.tech/php/data_in.php?mytype=zakaz&datetime=2022-02-18T16%3A55&distance=1.7&work=3&summ=110&commission=18&tarif=0&myrazhet=0&myautozakaz=1&myzvezda=1


  let xhr = new XMLHttpRequest();// 1. Создаём новый XMLHttpRequest-объект
  xhr.open('GET', url);// 2. Настраиваем его: GET-запрос по URL /article/.../load
  xhr.send();// 3. Отсылаем запрос
  xhr.onload = function () {// 4. Этот код сработает после того, как мы получим ответ сервера
    if (xhr.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
      console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
    } else { // если всё прошло гладко, выводим результат
      console.log(`Готово, получили ${xhr.response.length} байт`); // response -- это ответ сервера
    }
  };
  xhr.onprogress = function (event) {
    if (event.lengthComputable) {
      console.log(`Получено ${event.loaded} из ${event.total} байт`);
    } else {
      console.log(`Получено ${event.loaded} байт`); // если в ответе нет заголовка Content-Length
    }
  };

  xhr.onerror = function () {
    console.log("Запрос не удался");
  };
};