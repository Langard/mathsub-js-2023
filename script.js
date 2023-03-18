// alert ('Hello!')

// confirm ('вы учите JS?')

//  prompt("как вы учите JS?", "perfectly")



// const skill = document.getElementById('skill')
// const isLove = document.getElementById('isLove')
// console.log(span)
// console.log(span.innerText)

// const skillText = prompt("какой язык вы учите?", "пока не в курсе")
// const isLoveValue = confirm("Вы любите изучаемый язык?")

// console.log(isLoveValue)
// skill.innerText = skillText

// isLove.innerText = isLoveValue

//STRING
// const str1 = 'Greeting'
// const str2 = "Text"
// const str3 = `Revers`

// console.log(str1)
// console.log(str2)
// console.log(str3)

//NUMBER
// + - * / **
//const num1 = "342" + 12
// const num2 = 79**3
//alert(num2)
// const rem = 8 * "a"
// NaN not a number
// const inf = 18/0
//console.log(num1)
// alert(inf)
//от -(2**53 -1) до (2**53 -1)

//BIGINT
// const bigint = 2493849892938565655767645667n
// console.log(bigint)

//BOOLEAN
// true / false
// > < >= <= >== <== == ===
// const bool = "a" > "AAA"

// console.log(bool)


//NULL
// let empty = null
// console.log(empty, typeof empty)

//UNDEFINED
// let box = undefined  

// console.log(box, typeof box)

//SYMBOLL
// const uniq = Symbol('id')
// const uniq2 = Symbol('id')
// console.log(uniq == uniq2)

//OBJECT

// const obj = {
//   name: "Sasha",
//   age: 19,
//   isHappy: true,
// }
// console.log(obj.name)
// console.log(obj['name'])

//obj.job = "Google"

// console.log(obj)

// const array = ["Аня", 18, false]
// array[3] = "facebook"
// console.log(array)
// console.log(array[0])

//const variant = "options1"

//console.log(5 == "5") //сравнение по значению, 
//console.log("5" == "5") //значения приводятся к одному типу = строка
//console.log(5 === "5")//просто сравнивает
// console.log("abc" > 15)
// console.log("abc" < 15)
// console.log(null == 0)// false
// console.log(null <= 0)// true
// console.log(null >= 0)// true

// console.log(undefined == 0)// false

// console.log(undefined == null)// true
// console.log(undefined === null)// false

// typeof "15" //'string'
// typeof +"15"//'number' "+" переводит строку в число
//  15 +"" // '15' +"" переводит число в строку
// Boolean(15) //true
// Boolean(0) //false отсутствие значения
// Boolean("") //false пустая строка
// Boolean(" ") //true

// !true //false оператор отрицания
// !false //true

// const go = confirm("Будем ли мы бегать?")
// if (go) {
//   alert("Побежали")
// } else {
//   alert("Стоим")
// }

// const userName = prompt("Кто ты?", "Аноним")
// if (userName === "admin") {
//   alert("Привет, Босс!")
// } else {
//   alert(`Привет ${userName}`)
// }

// const userName = prompt("Кто ты?", "anonim")
// if (userName === "admin") {
//   alert("Привет, Босс!")
// } else if (userName === "anonim") {
//   alert("Я тебя не знаю")
// }
// else {
//   alert(`Привет, ${userName}`)
// }

//работаем со значением userName = null 
// const userName = prompt("Кто ты?", "anonim")
// if (userName === "admin") {
//   alert("Привет, Босс!")
// } else if (userName === "anonim") {
//   alert("Я тебя не знаю")
// }
// else if (userName === null) {
//   alert("Вас не существует...")
// }
// else {
//   alert(`Привет, ${userName}`)
// }

//Записываем короче
// const userName = prompt("Кто ты?", "anonim")
// if (userName === "admin") {
//   alert("Привет, Босс!")
// } else if (userName === "anonim") {
//   alert("Я тебя не знаю")
// }
// else if (!userName) {
//   alert("Вас не существует...")
// }
// else {
//   alert(`Привет, ${userName}`)
// }

//применяем значение ИЛИ
// const userName = prompt("Кто ты?", "anonim")
// if (userName === "admin") {
//   alert("Привет, Босс!")
// } else if (userName === "anonim" ||  !userName) {
//   alert("Я тебя не знаю")
// }

// else {
//   alert(`Привет, ${userName}`)
// }

//while - это пока

// const counts = prompt("До скольки вы хотите досчитать?", 20)
// let i = 0
// while (i <= counts) {
//   console.log(i)
//   // i = i + 1
//   // i += 1
//   i++
//   ++i
// }


// const counts = prompt("До скольки вы хотите досчитать?", 20)
// let i = 0
// while (i <= counts) {
//   console.log(i++)
//   // i = i + 1
//   // i += 1
//   //i++
//   //++i
// }

// const counts = prompt("До скольки вы хотите досчитать?", 10)
// let i = 10
// do {
//   console.log(i++)
// }
// while (i <= counts) 

// console.log(i)
 

// let arr = [4, 5, 6] //массив
// //arr[3] = 7
// arr.push(8)
// console.log(arr)
// for (let i = 1; i <= 50; ++i) {
//   console.log(i)
// }

// const arr = []

// for (let i = 1; i <=50; ++i) {
//   arr.push(i)
// }
// console.log(arr)
// arr[12] = "qwerty"
// console.log(arr)

// for( elem of arr) {
//   console.log(elem)
// }

// const newArr = []
// for( elem of arr) {
//   const marker = elem % 3
//   if (!marker) {
//     newArr.push(elem)
//   }
// }
// console.log(newArr)


// const obj = {
//   name: "Sasha",
//   age: 25,
//   city: "Irkutsk"
// }
// for ( key in obj) {
//   console.log(key)
//   console.log(obj[key])
// }

// const obj = {
//   name: "Sasha",
//   age: 25,
//   city: "Irkutsk"
// }
// for ( key in obj) {
//   console.log(key, obj[key])
// }

// FUNCTION

// 1. DECLARATION
// function scream() {
//   alert("AAAAAAAAAAA")
//   return "I am OK"  //возврат функции
// }
//scream() //вызов фунции
function scream(a, b) {
  // const result = a * b
  // return result
  return a * b // более короткая запись
}
//console.log(scream(18, 10))


// 2. EXPRESSION
// const wowScrean = function() {
//   alert("WOOOOW")
// }
//wowScrean()  //вызов фунции

// 3. ARROW // стрелочная функция
// const arrow = () => {
//   alert("Arrow is in the sky")
// }
//arrow()  //вызов фунции



//ИГРА 

// Нажав на кнопку Начать игра запускается, генерируется задача, 
// пользователь может ввести ответ. Должна появиться кн. Проверить.
// Нажав кн.Проверить мы сравниваем ввод пользователя с ответом
// Вывести результат и правильное значение, сменить кн. на Начать заново


const getRandomNumInRange = (min, max) => {
  const randomNum = (Math.random() * (max - min) + min ).toFixed(0)
  return randomNum
}

//создаем задачу
// const getTask = () => {
//   const randomNum1 = getRandomNumInRange(0, 100)
//   const randomNum2 = getRandomNumInRange(0, 100)
  
//   let symbol 
//   if (Math.random() > 0.5) {
//     symbol = "+"
//   }
//   else {
//     symbol = "-"
//   }
//   const task = `${randomNum1} ${symbol} ${randomNum2}`
//   return task
// }
//  console.log(getTask())
//  console.log(getTask())
//  console.log(getTask())
//  console.log(getTask())

//получаем случайные числа
// const randomNum1 = getRandomNumInRange(0, 100)
// const randomNum2 = getRandomNumInRange(0, 100)

//Рефакторим задачу, которую уже написали и проверили
const getTask = () => {
  // const randomNum1 = getRandomNumInRange(0, 100)
  // const randomNum2 = getRandomNumInRange(0, 100)
  
  // let symbol 
  // if (Math.random() > 0.5) {
  //   symbol = "+"
  // }
  // else {
  //   symbol = "-"
  // }     Заменяем let другим способом ниже

  const symbol = (Math.random() > 0.5) ? "+" : "-"
  const task = `${getRandomNumInRange(0, 100)} ${symbol} ${getRandomNumInRange(0, 100)}`
  gameState.rightAnswer = eval(task)
  return task
}








//это было написано раньше, а то, что выше-сейчас
// const randomValue1 = (Math.random() * 100 ).toFixed(0)
// const randomValue2 = (Math.random() * 100 ).toFixed(0)

//const isPlus = Math.random() > 0.5

//console.log(randomValue1)

const gameElements = document.getElementById("my_game").children
// console.log(gameElements)
const title = gameElements[0]
const userTask = gameElements[1]
const userAnswer = gameElements[2]
const btnGame = gameElements[3]

//состояния нашей game
const gameState = {
  taskInProcess: false,
  rightAnswer: null,
}

btnGame.onclick = () => {
  // console.log("click")
  if (!gameState.taskInProcess){
     title.innerText = "Игра началась!"
     userAnswer.value = null
      //генерируем задачу и ответ
      //const task = getTask()
      //показываю задачу пользователю
      userTask.innerText = getTask()
      userAnswer.hidden = false //сделали input видимым
      btnGame.innerText = "Проверить!" //меняем текст кнопки
      gameState.taskInProcess = true
      //меняю кнопку
      //меняю состояние
  } else {
    //сравнить ответ пользователя с правильным
    const IsRight = gameState.rightAnswer == userAnswer.value
    //вывести результат
    userTask.innerText = userTask.innerText + " = " + gameState.rightAnswer
    //вывести поздравление
    title.innerText = (IsRight) ? "Вы победили!" : "Вы проиграли"
    //поменять кнопку и состояние=========== 56 минута --- Я УСТАЛА
    btnGame.innerText = "Начать заново" //меняем текст кнопки
    gameState.taskInProcess = false
  }
}

// console.dir(document)
// const chooseEl = document.querySelectorAll("#my_game p")
// console.log(chooseEl[0])

// console.dir(document)
// const choosedEl = document.querySelectorAll(".choosed_block-container > div")

// for (let i = 0; i < chooseEl.length; i++) {
//   chooseEl[i].addEventListener("click", () => {
//       //console.log("click")
//       //выбрать элемент, выделить его с помощью класса
//       //chooseEl[i].className = "choosed_element"    вариант 1
//       //хотим запустить счетчик
//   })
// }


// const choosedEl = document.querySelectorAll(".choosed_block-container > div")
// const counterEl = document.querySelector(".choosed_block span")

// for (let i = 0; i < choosedEl.length; i++) {
//   choosedEl[i].addEventListener("click", (e) => {
//       //console.log("click")
//       //выбрать элемент, выделить его с помощью класса
//       //chooseEl[i].className = "choosed_element"    вариант 1
//         // console.log(e)
//         // e.target.className = "choosed_element"
//       //хотим запустить счетчик
//       // counterEl.innerText = +counterEl.innerText + 1
//       if (e.target.className === "") {
//         e.target.className = "choosed_element"
//         counterEl.innerText = +counterEl.innerText + 1
//       } else {
//         e.target.className = ""
//         counterEl.innerText = counterEl.innerText - 1
//       }
//   })
// }
 

// console.dir(document)
const choosedEl = document.querySelectorAll(".choosed_block-container > div")
const counterEl = document.querySelector(".choosed_block span")

// const choosedState = {
//   countElements: 0,
// }
// const changeCount = (value) => {
//   choosedState.countElements += value
//   counterEl.innerText = choosedState.countElements
// }

const choosedState = {
  countElements: 0,
  setCountValue(value) {
    this.countElements += value
    counterEl.innerText = this.countElements
  }
}


  

// for (let i = 0; i < choosedEl.length; i++) {
//   choosedEl[i].addEventListener("click", (e) => {
//            //chooseEl[i].className = "choosed_element"    
    
//            if (e.target.className === "") {
//             e.target.className = "choosed_element"
//             choosedState.setCountValue(1)
//           } else {
//             e.target.className = ""
//             choosedState.setCountValue(-1)
//           }
//       })
 
// }

const eventFunc = (e) => {
    //chooseEl[i].className = "choosed_element"    
    
    if (e.target.className === "") {
      e.target.className = "choosed_element"
      choosedState.setCountValue(1)
    } else {
      e.target.className = ""
      choosedState.setCountValue(-1)
    }
} 

for (let i = 0; i < choosedEl.length; i++) {
  choosedEl[i].addEventListener("click", eventFunc)       
}

// setTimeout(() => {
//   alert("Время вышло!")
// }, 2000)

// const timeIsOver = () => {
//   alert("Время вышло!")
// }
// setTimeout(timeIsOver, 2000)

//setInterval(timeIsOver, 3000) //alert срабатывает каждые 3 сек

// const alarm = setInterval(timeIsOver, 3000)


// const alarm = setInterval(() => {
//   let wantToSleep = confirm("Хотите ли вы спать?")
//   if (wantToSleep) {
//     console.log("tic")
//   } else {
//     clearInterval(alarm)
//   }
// }, 3000)

// clearInterval(alarm)

// console.log("1")
// setTimeout(()=>{
//   console.log("2")
// }, 0)
// console.log("3")









const postsBlock = document.querySelector(".posts_block-container")
const showPostsBTN = document.querySelector(".posts_block")

// fetch ("https://jsonplaceholder.typicode.com/posts")
// //   .then( (res) => {
// //     return res.json()
// // }) первый вариант

//   .then( res => res.json()) //короткий вариант стрелочной функции
//   .then( data => {
//     for (el of data) {
//       addPost(el.title, el.body)
//     }
//     // addPost(data[7].title, data[7].body)    
//   })
//   // .catch((err) => {
//   //   // console.log(err)
//   //   console.log(err.message)
//   // }) первый вариант

//   .catch(err => console.log(err.message))  //короткий вариант стрелочной функции

  function addPost(title, body) {
      const postsTitle = document.createElement("h3")
      const postsBady = document.createElement("span")
      const postItem = document.createElement("p")

      postsTitle.innerText = title
      postsBady.innerText = body

      postItem.append(postsTitle, postsBady)
      postsBlock.append(postItem)     
  }

  function getPosts() {
    fetch ("https://jsonplaceholder.typicode.com/posts")

  .then( res => res.json()) 
  .then( data => {
    for (el of data) {
      addPost(el.title, el.body)
    }
  })
  .catch(err => console.log(err.message))  
  }

  // function createPost(title, body, userId) {
  //   fetch ("https://jsonplaceholder.typicode.com/posts", {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       // title: title,
  //       // body: body,
  //       // userId: userId,
  //       title,
  //       body,
  //       userId,
  //     }),
  //     headers: {
  //       'Content-type': 'application/json; charset=UTF-8',
  //     },
  //   })
        
  //     .then( res => {
  //       console.log(res)
  //     }) 
  //     .catch(err => console.log(err.message))  
  // }
  
  // createPost("title", "body", 5)

showPostsBTN.onclick = getPosts





















