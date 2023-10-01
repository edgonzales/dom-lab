
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

/*
Task 5.3
This feature "deselects" the menu item if it's clicked when it's currently active, 
resulting in the sub-menu sliding up as well.

Next in the event listener, if the clicked <a> link has a class of active:
- Remove the active class from the clicked <a> element.
- Set the showingSubMenu to false.
- Set the CSS top property of subMenuEl to 0.
- return; from the event listener function.
*/


topMenuEl.addEventListener('click', function(event){
    event.preventDefault();
    let anchor = event.target.closest('a');
    //const activeElement = document.activeElement;
    if(anchor !== null) {
        console.log(anchor.textContent.toUpperCase());
    } else if (anchor.contains('active')){
        anchor.classList.remove(".active");
        showingSubMenu = false;
        subMenuEl.style.top = '0';
        return;
    }
})