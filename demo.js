document.querySelector('.hamburger-menu').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
    document.querySelector('.hamburger-menu').classList.toggle('active');
  });


   // Dropdown toggle on mobile
   const dropdown = document.querySelector('.dropdown');
   dropdown.addEventListener('click', () => {
     dropdown.classList.toggle('active');
   });