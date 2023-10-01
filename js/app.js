
const showingSubMenu = false;
const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];
  
const mainEl = document.querySelector('main');
const topMenuEl = document.getElementById('top-menu');
const allAnchors = document.querySelectorAll('a');

let subLinksArr = [];
subLinksArr = menuLinks.forEach(function(links){
    if(links.subLinks !== undefined){
       subLinksArr.push(links.subLinks);
       console.log(subLinksArr); // why do I get 3?
    } else {
        console.log('this menu link does not have a sublink');
    }
})

localStorage['myMainElKey'] = JSON.stringify(mainEl);
mainEl.style.background = ('var(--main-bg)');
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';
mainEl.classList.add('flex-ctr');
localStorage['myTopMenuElKey'] = JSON.stringify(topMenuEl)
topMenuEl.style.height = '100%';
topMenuEl.style.background = 'var(--top-menu-bg)';
topMenuEl.classList.add('flex-around');

menuLinks.forEach(function(link){
    const aEl = document.createElement('a');
    aEl.setAttribute('href', link.href);
    aEl.textContent = link.text;
    topMenuEl.appendChild(aEl);
})

const subMenuEl = document.getElementById('sub-menu');

localStorage['mySubMenuElKey'] = JSON.stringify(subMenuEl);
subMenuEl.style.height = '100%'
subMenuEl.style.background = ('var(--sub-menu-bg')
subMenuEl.classList.add('flex-around');
subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0';

const topMenuLinks = document.querySelector('a');
localStorage['myTopMenuLinksElKey'] = JSON.stringify(topMenuLinks);

topMenuEl.addEventListener('click', function(event){
    event.preventDefault();
    const anchor = event.target.closest('a');
    //const activeElement = document.activeElement;
    if(anchor !== null) {
        console.log(anchor.textContent.toUpperCase());
    } else if (anchor.contains('active')){
        anchor.classList.remove('active');
        showingSubMenu = false;
        subMenuEl.style.top = '0';
        return;
    }
    // removes all active classes for all anchors
    allAnchors.forEach(function(a){
        a.classList.remove('active');
    })
    anchor.classList.add('active');
    
    if(anchor.contains('subLinks')){
        showingSubMenu = true;
    } else {
        showingSubMenu = false;
    }
})

/*
Task 5.6
Next, add code in the event listener that sets showingSubMenu to true 
if the clicked <a> 
element's "link" object within menuLinks has a subLinks property (all do, except for the 
    "link" object for ABOUT), otherwise, set it to false.

Hint: Saving the "link" object in a variable will come in handy for passing its subLinks 
array in Task 5.7

Progress Check
Clicking any of the links should make that link "active" and clear the others:
*/
