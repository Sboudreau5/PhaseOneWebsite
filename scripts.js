function toggleNav(toggleClass, activeClass) {
  if (document.querySelector('.' + toggleClass)) {
    function toggle() {
      if (!document.body.classList.contains(activeClass)) {
        document.body.classList.add(activeClass)
      } else {
        document.body.classList.remove(activeClass)
      }
    }
    document.querySelector('.' + toggleClass).addEventListener('click', toggle)
  }
}

toggleNav('nav-toggle', 'nav-active')
