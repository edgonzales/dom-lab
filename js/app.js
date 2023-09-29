const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

const mainEl = document.querySelector('main');
localStorage['myMainElKey'] = JSON.stringify(mainEl);
mainEl.style.background = ('var(--main-bg)');
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';
mainEl.classList.add('flex-ctr');
const topMenuEl = document.getElementById('top-menu');
localStorage['myTopMenuElKey'] = JSON.stringify(topMenuEl)
topMenuEl.style.height = '100%';
topMenuEl.style.background = 'var(--top-menu-bg)';
topMenuEl.classList.add('flex-around');

/*
Task 3.1
Iterate over the entire menuLinks array and for each "link" object:
Create an <a> element.
On the new element, add an href attribute with its value set to the 
href property of the "link" object.
Set the new element's content to the value of the text property of 
the "link" object.
Append the new element to the topMenuEl element.
*/
menuLinks.forEach(function(link){
    const aEl = document.createElement('a');
    aEl.setAttribute('href', link.href);
    //console.log(aEl);
    aEl.textContent = link.text;
    topMenuEl.appendChild(aEl);
    console.log(aEl.textContent);
})