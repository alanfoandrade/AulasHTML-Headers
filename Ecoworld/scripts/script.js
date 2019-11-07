const $nav = document.querySelectorAll('.nav-bar')[0];
const $logo = document.querySelectorAll('.logo')[0];
const $extLink = document.querySelectorAll('.ext-link')[0];
const $intLinks = document.querySelectorAll('.int-link');
const $sections = document.querySelectorAll('main section');

window.addEventListener('scroll', toggleNavbar, false);
$extLink.addEventListener('click', openExtLink, false);

$intLinks.forEach((link, index) => {
  link.addEventListener(
    'click',
    () => {
      window.scrollTo({
        top: $sections[index].offsetTop - $nav.offsetHeight,
        left: 0,
        behavior: 'smooth'
      });
    },
    false
  );
});

function changeClassList(tag, classRemove, classAdd) {
  tag.classList.remove(classRemove);
  tag.classList.add(classAdd);
}

function toggleNavbar() {
  if (
    window.pageYOffset >= $logo.offsetHeight &&
    $nav.classList.contains('abs-pos')
  ) {
    changeClassList($nav, 'abs-pos', 'fix-pos');
  } else if (
    window.pageYOffset < $logo.offsetHeight &&
    $nav.classList.contains('fix-pos')
  ) {
    changeClassList($nav, 'fix-pos', 'abs-pos');
  }
}

function openExtLink() {
  window.open('http://www.google.com', '_blank');
}
