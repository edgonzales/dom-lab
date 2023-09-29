
/*
Task 1.0
Select and cache the <main> element in a variable named mainEl.
*/

const mainEl = document.querySelector('main');
localStorage['myKey'] = JSON.stringify(mainEl);
console.log(localStorage);

/*
Task 1.1
Set the background color of mainEl using the --main-bg CSS custom property.

Hint: Assign a string that uses the CSS var() function like this:
'var(--main-bg)'
*/
mainEl.style.background = ('var(--main-bg)');

/*
Task 1.2
Set the content of mainEl to <h1>SEI Rocks!</h1>.
*/
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';