var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
 for (var x = 0; x < topics.length; x++) {
   console.log(topics[x]);
 }
}

function selectTopic() {
 if (randomTopic === 'HTML') {
   console.log("Let's study HTML!");
 } else if (randomTopic === 'CSS') {
   console.log("Let's study CSS!");
 } else if (randomTopic === 'Git') {
   console.log("Let's study Git!");
 } else if (randomTopic === 'JavaScript') {
   console.log("Let's study JavaScript!");
 } else {
   console.log('Please try again!');
 }
}

console.log('Here are the topics we learned through Prework:');
listTopics();
<<<<<<< HEAD:prework-study-guide/prework-study-guide/assets/script.js
=======

>>>>>>> 91ff5b5e40a932b4ea2186431046e97444175611:assets/script.js
console.log('Which topic should we study first?');
selectTopic();