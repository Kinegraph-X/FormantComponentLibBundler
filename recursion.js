const result = [];

function countup(n) {
  if (n < 1) {
    return;
  } else {
    countup(n - 1);
    result.push(n);
  }
}

/*
1er tour : on décrémente de 1 (le push attend, mais ici n vaut 5)
2ème tour : on décrémente de 1 (le push attend, mais ici n vaut 4)
3ème tour : on décrémente de 1 (le push attend, mais ici n vaut 3)
4ème tour : on décrémente de 1 (le push attend, mais ici n vaut 2)
5ème tour : on décrémente de 1 (le push attend, mais ici n vaut 1)
6ème tour : ne fait rien
Et ensuit on execute ce qu'on n'a pas encore fait :  
push(n) quand n vaut 1 (l'avant dernier tour de récursion)
push(n) quand n vaut 2 (l'avant-avant dernier tour de récursion)
etc.
*/

countup(5);
console.log(result);