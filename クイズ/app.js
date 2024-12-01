const quiz = [
 {
  question: '小山楓梧の誕生日はいつ？',
  answers: [
  '2月1日',
  '2月16日',
  '2月28日',
  '3月5日'
  ],
  correct: '2月28日'
 },{
  question: '小山楓梧のMBTI診断結果はどれ？',
  answers: [
  'ENFJ',
  'ISFJ',
  'ESFP',
  'INTP'
  ],
  correct: 'INTP'
 },{
  question: '小山楓梧の好物は？',
  answers: [
  'カルボナーラ',
  'ペペロンチーノ',
  'イカ墨パスタ',
  'トマトパスタ'
  ],
  correct: 'カルボナーラ'
 },{
  question: '小山楓梧の飼ってみたい動物は？',
  answers: [
  'ウマ',
  'フクロウ',
  'ヘビ',
  'ウサギ'
  ],
  correct: 'フクロウ'
 },{
  question: '小山楓梧の1番好きな曲は？(youtubeで聞いてみてね!)',
  answers: [
  'String Theocracy',
  '世界はそれを愛と呼ぶんだぜ',
  '限りなく灰色へ',
  'Good Style'
  ],
  correct: '限りなく灰色へ'
 },
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
   $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
   buttonIndex++;
  }
}

setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
  window.alert('正解!');
  score++;
 }
 else{
  window.alert('不正解!')
 }

 quizIndex++;

 if(quizIndex < quizLength){
  //問題数がまだあればこっちを実行
  setupQuiz();
 } else {
  //問題数がもうなければこっちを実行
  window.alert('終わり！あなたの正解数は' + score + '/' + quizLength + 'です!');
 }
};




//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}



