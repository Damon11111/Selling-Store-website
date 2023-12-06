function navBarfun(env,typebtn){
    var page = document.getElementsByClassName("page-content");

    for(var i=0;i<page.length;i++){
        page[i].style.display ="none";
    }
    
    var navBar = document.getElementsByClassName('nav-bar');
    for(var i=0;i < navBar.length;i++){
        navBar[i] = navBar.className = navBar[i].className.replace("active","");
    }

    document.getElementById(typebtn).style.display = "block";
    env.currentTarget.className += " active";
}

document.addEventListener('DOMContentLoaded',()=>{
    const fadeintext = document.querySelector('.fade-in');
    fadeintext.classList.add('fade-in-visible')
});




// slider start//
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
}

//slider end//


//cart
function toggleCart() {
    var cartSummary = document.getElementById('cart-summary');
    if (cartSummary.classList.contains('open')) {
        cartSummary.classList.remove('open');
        cartSummary.style.right = '-400px'; 
    } else {
        cartSummary.classList.add('open');
        cartSummary.style.right = '0'; 
    }
}

//cart end



document.addEventListener('DOMContentLoaded', function () {
    // Product data
    var products = {
      'prod1': {'name':'Black Bag', 'price':20.00},
      'prod2': {'name':'Product 2', 'price':30.00}   
    };
  
    // Add to cart function
    function addToCart(productId) {
      var cartItems = document.querySelector('.cart-items');
      var product = products[productId];
      var itemRow = createCartItemElement(product);
      cartItems.appendChild(itemRow);
      updateCartTotal();
    }

   

    // documentElement.getElementById.addEventListener('removeProduct',function(){
    //     removeFromCart();
    // });
    function createCartItemElement(product) {
        var itemRow = document.createElement('div');
        var itemContent = document.createTextNode(`${product.name} - $${product.price.toFixed(2)}`);
        var removeButton = document.createElement('button');
        removeButton.innerHTML = '&times;';
        removeButton.classList.add('remove-button');
        removeButton.onclick = function() {
          itemRow.remove();
          updateCartTotal();
        };
        itemRow.appendChild(itemContent);
        itemRow.appendChild(removeButton);
      
        return itemRow;
      }
    
  
    // Update cart total
    function updateCartTotal() {
      var cartItemsContainer = document.querySelector('.cart-items');
      var cartRows = cartItemsContainer.children;
      var total = 0;
      var totalItems = 0;
      for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var priceElement = parseFloat(cartRow.innerText.replace(/[^\d.]/g, ''));
        total = total + priceElement;
        totalItems++;
      }
      document.querySelector('.cart-total').innerText = 'Total: $' + total.toFixed(2);
      document.getElementById('cart-count').innerText = totalItems; 
    }
  
    // Bind click event to add to cart button
    var addToCartButton = document.getElementById('addTocart');
    if (addToCartButton) {
      addToCartButton.addEventListener('click', function() {
        addToCart('prod1');
      });
    } else {
      console.error('Add to cart button not found');
    }
  });
  

