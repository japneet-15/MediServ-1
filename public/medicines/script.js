let products = {
  data: [
    {
      productName: "Allegra",
      category: "antiallergic",
      price: "89",
      image: "images/allegra.jpg",
    },
    {
      productName: "Altriz-M",
      category: "antiallergic",
      price: "189",
      image: "images/altriz-m.jpg",
    },
    {
        productName: "Amoxicillin",
        category: "antibiotic",
        price: "30",
        image: "images/amoxicillin.jpg",
      },
    {
      productName: "Antacid",
      category: "antacid",
      price: "30",
      image: "images/antacid.jpg",
    },
    {
        productName: "Azithromycin",
        category: "antibiotic",
        price: "30",
        image: "images/azithromycin.jpg",
      },
    {
        productName: "Betadine",
        category: "antiseptic",
        price: "49",
        image: "images/betadine.jpg",
      },
      {
        productName: "Betadine Aerosol Spray",
        category: "antiseptic",
        price: "49",
        image: "images/betadine_aerosol.jpg",
      },
      {
        productName: "Cefalexin",
        category: "antibiotic",
        price: "30",
        image: "images/cefalexin.jpg",
      },
    {
      productName: "Guardium",
      category: "antacid",
      price: "49",
      image: "images/guardium.jpg",
    },
    {
        productName: "Histanin",
        category: "antiallergic",
        price: "49",
        image: "images/histanin.jpg",
      },
      {
        productName: "Loratadine",
        category: "antiallergic",
        price: "49",
        image: "images/loratadine.jpg",
      },
      {
        productName: "Loreta",
        category: "antiallergic",
        price: "49",
        image: "images/loreta.jpg",
      },

    {
      productName: "Maalox",
      category: "antacid",
      price: "99",
      image: "images/maalox.jpg",
    },
    {
        productName: "Pepcid",
        category: "antiallergic",
        price: "49",
        image: "images/pepcid.jpg",
      },
      {
        productName: "Peridex",
        category: "antiseptic",
        price: "49",
        image: "images/peridex.jpg",
      },
      
    {
      productName: "Prilosec",
      category: "antacid",
      price: "29",
      image: "images/prilosec.jpg",
    },
    {
        productName: "Reactine",
        category: "antiallergic",
        price: "49",
        image: "images/reactine.jpg",
      },
    {
      productName: "Rolaids",
      category: "antacid",
      price: "129",
      image: "images/rolaids.jpg",
    },
    {
        productName: "Tegaderm CHG Dressing",
        category: "antiseptic",
        price: "49",
        image: "images/tegaderm.jpg",
      },
    {
        productName: "Triclotrex-B",
        category: "antiseptic",
        price: "49",
        image: "images/triclotrex.jpg",
      },

    
    
    
    
    
  ],
};


for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  image.className="shop-item-image"
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("container");
  container.classList.add("container");
  //product name
  let name = document.createElement("product-name");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  name.className="shop-item-title"
  container.appendChild(name);
  //price
  let price = document.createElement("div");
  price.innerText = "$" + i.price;
  price.className="shop-item-price"
  container.appendChild(price);

  var cart = document.createElement("button");
  cart.innerHTML = "ADD TO CART"
  cart.className="cardbtn shop-item-button"
  container.appendChild(cart);

  

  // let dec = document.createElement("button");
  // dec.innerHTML = "-";
  
  // dec.onclick = button1();
  // container.appendChild(dec);

  // let inc = document.createElement("button");
  // dec.innerHTML = "+";
  
  // dec.onclick = button2();
  // container.appendChild(inc);

  // var input = document.createElement("input");
  // cart.innerHTML = "add to cart"
  // container.appendChild(cart);
   


  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

 

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".shop-item-title");
  let cards = document.querySelectorAll(".card");

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

//Initially display all products
window.onload = () => {
  filterProduct("all");
};


if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  var removeCartItemButtons = document.getElementsByClassName("btn-danger");
  for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i];
    button.addEventListener("click", removeCartItem);
  }

  var quantityInputs = document.getElementsByClassName("cart-quantity-input");
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }

  var addToCartButtons = document.getElementsByClassName("shop-item-button");
  for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i];
    button.addEventListener("click", addToCartClicked);
  }

  document
    .getElementsByClassName("btn-purchase")[0]
    .addEventListener("click", purchaseClicked);
}

function purchaseClicked() {
   alert("Thank you for your purchase");
  var cartItems = document.getElementsByClassName("cart-items")[0];
  while (cartItems.hasChildNodes()) {
    cartItems.removeChild(cartItems.firstChild);
  }
  updateCartTotal();
}

function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();
  updateCartTotal();
}

function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal();
}

function addToCartClicked(event) {
  var button = event.target;
  var shopItem = button.parentElement.parentElement;
  var title = shopItem.getElementsByClassName("shop-item-title")[0].innerText;
  var price = shopItem.getElementsByClassName("shop-item-price")[0].innerText;
  var imageSrc = shopItem.getElementsByClassName("shop-item-image")[0].src;
  addItemToCart(title, price, imageSrc);
  updateCartTotal();
}

function addItemToCart(title, price, imageSrc) {
  var cartRow = document.createElement("div");
  cartRow.classList.add("cart-row");
  var cartItems = document.getElementsByClassName("cart-items")[0];
  var cartItemNames = cartItems.getElementsByClassName("cart-item-title");
  for (var i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText == title) {
      alert("This item is already added to the cart");
      return;
    }
  }
  var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity-input cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`;
  cartRow.innerHTML = cartRowContents;
  cartItems.append(cartRow);
  cartRow
    .getElementsByClassName("btn-danger")[0]
    .addEventListener("click", removeCartItem);
  cartRow
    .getElementsByClassName("cart-quantity-input")[0]
    .addEventListener("change", quantityChanged);
}

function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName("cart-items")[0];
  var cartRows = cartItemContainer.getElementsByClassName("cart-row");
  var total = 0;
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var priceElement = cartRow.getElementsByClassName("cart-price")[0];
    var quantityElement = cartRow.getElementsByClassName(
      "cart-quantity-input"
    )[0];
    var price = parseFloat(priceElement.innerText.replace("$", ""));
    var quantity = quantityElement.value;
    total = total + price * quantity;
  }
  total = Math.round(total * 100) / 100;
  document.getElementsByClassName("cart-total-price")[0].innerText =
    "$" + total;
}