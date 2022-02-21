const createNav = () => {
    let nav = document.querySelector('.navbar');
    nav.innerHTML = `
    <div class="nav">
    <img src="img/Thuryliya-logo.png" class="web-logo">
      <div class="nav-items">
          <div class="search">
              <input type="text" class="search-box" placeholder="search ">
              <button class="search-btn">search</button>
          </div>
          <a href="#"><img src="img/user.png" alt=""></a>
          <a href="#"><img class="cart" src="img/cart.png" alt=""></a>
      </div>              
</div>
<ul class="links-container">
   <li class="lint-item"><a href="#" class="link">Home</a></li>
   <li class="lint-item"><a href="#" class="link">About Us</a></li>
   <li class="lint-item"><a href="#" class="link">Login</a></li>
   <li class="lint-item"><a href="#" class="link">Store</a></li>
   <li class="lint-item"><a href="#" class="link">home</a></li>
</ul>
    `;
}

createNav();

const readMoreBtn = document.querySelector('.read-more-btn');
const text = document.querySelector('.text');

readMoreBtn.addEventListener('click', (e) => {
    text.classList.toggle('show-more');
})