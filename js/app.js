
let showingSubMenu = false;
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

//const topMenuLinks = document.querySelector('a');
//localStorage['myTopMenuLinksElKey'] = JSON.stringify(topMenuLinks);

topMenuEl.addEventListener('click', function(event){
    event.preventDefault();
    const anchor = event.target.closest('a');
    // if(anchor !== null) {
    //     console.log(anchor.textContent)
    //      return anchor.textContent.toUpperCase();
    // } else if (anchor.contains('active')){
    //     anchor.classList.remove('active');
    //     showingSubMenu = false;
    //     subMenuEl.style.top = '0';
    //     return;
    // }

    // converts the HTML collection to an array
    // removes all active classes for all anchors
    [...topMenuEl.children].forEach(function(a){
        a.classList.remove('active');
    })
    anchor.classList.add('active');

    // Task 5.6
    // function expression assigned to a variable activeLink, that 
    // returns true if link.text equal to the clicked anchor's textContent
    const activeLink = menuLinks.find(function(link){
        return link.text === anchor.textContent;
    })

    showingSubMenu =!! activeLink.subLinks

    // Task 5.7 + 5.8
    // if showingSubMenu is true, then build a submenu based on the click and it's menu list's
    /// sublinks 
    if(showingSubMenu){
        buildSubMenu(activeLink.subLinks);
        subMenuEl.style.top = '100%';
    } else {
        subMenuEl.style.top = '0';
        mainEl.innerHTML = '<h1>about</h1>';
    }

    // Function that takes an array of subLinks, then loops through each link, creates
    // a new anchor element, assigns the link's href + text, and then appends the new anchor
    // at the end, thus building the sub menu.  
    function buildSubMenu (subLinks) {
        subMenuEl.innerHTML = '';
        subLinks.forEach(function (link) {
            const linkEl = document.createElement('a');
            linkEl.href = link.href;
            linkEl.textContent = link.text;
            subMenuEl.appendChild(linkEl);
        })
    }
})

// Task 6.0
subMenuEl.addEventListener('click', function(event){
    event.preventDefault();
    const anchor = event.target.closest('a');
    if(!anchor){
        return;
    }
    console.log(anchor);
    }
)