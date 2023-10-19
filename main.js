// Toggle Button Code..

const showMenu = (toggleId, navId) => {
    let toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");

      // Add Show Icon and Hide Menu Icon
      toggle.classList.toggle('show-icon')
    })
  }
}

showMenu('nav-toggle','nav-menu')


// Dropdown Menu
const dropdownItems = document.querySelectorAll('.dropdown__item')

// 1. Select each dropdown items
dropdownItems.forEach((item) => {
  const dropdownButton = item.querySelector('.dropdown__button')

  // 2. Select each button click
  dropdownButton.addEventListener('click', () =>{
    // 6. Select the current show-dropdown class
    const showDropdown = document.querySelector('.show-dropdown')

    // console.log('click');
    toggleItem(item)

    // 7. Remove the show-dropdown class from other items
    if(showDropdown && showDropdown != item ){
      toggleItem(showDropdown)
    }
  })
})

const toggleItem = (item) => {
  // 3. Select each dropdown content
  const dropdownContainer = item.querySelector('.dropdown__container')

    if(item.classList.contains('show-dropdown'))
    {
      // 5.Remove Style
      dropdownContainer.removeAttribute('style')
      item.classList.remove('show-dropdown')
    }else{
      // 4. Add the maximum height to the dropdown content and add the show-dropdown class
          dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px'
          item.classList.add('show-dropdown')
    } 
}


// Delete Media Query
const mediaQuery = matchMedia('(min-width: 1118px)'),
dropdownContainer = document.querySelectorAll('.dropdown__container')

const removeStyle = () => {
  // Validate if the media query reaches 1118px

  if(mediaQuery.matches){
    dropdownContainer.forEach((e) => {
      e.removeAttribute('style')
    })

    dropdownItems.forEach((e) => {
      e.classList.remove('show-dropdown')
    })
  }
}

addEventListener('resize', removeStyle)
