const $header = document.querySelector('header');
const $logo = document.querySelectorAll('.logo')[0];
const $nav = document.querySelectorAll('.nav-bar')[0];

window.addEventListener('scroll', toggleHeader, false);

function changeClassList(tag, classRemove, classAdd) {
  tag.classList.remove(classRemove);
  tag.classList.add(classAdd);
}

function toggleHeader() {
  if (window.pageYOffset > 60 && $header.classList.contains('max-header')) {
    changeClassList($header, 'max-header', 'min-header');
    changeClassList($logo, 'max-logo', 'min-logo');
    changeClassList($nav, 'max-nav', 'min-nav');
    $logo.firstElementChild.setAttribute('src', 'imgs/omnitech-logo-2.png');
  } else if (
    window.pageYOffset <= 60 &&
    $header.classList.contains('min-header')
  ) {
    changeClassList($header, 'min-header', 'max-header');
    changeClassList($logo, 'min-logo', 'max-logo');
    changeClassList($nav, 'min-nav', 'max-nav');
    $logo.firstElementChild.setAttribute('src', 'imgs/omnitech-logo-1.png');
  }
}
