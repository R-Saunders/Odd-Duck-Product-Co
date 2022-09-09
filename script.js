'use strict'

let productNameInput;
let productPriceInput;
let productBrandInput;
let productDescriptionInput;
let productImageInput;
let productCategoryInput;
let productAgeInput;
let productStockInput;
let productDiscountInput;
let productDeliveryInput;
let productSellersWebsiteInput;
let productWarrantyInput;

class product {
  constructor(name, price, brand, description, img, category, age, stock, discount, delivery, seller, warranty) {
    this.name = name;
    this.price = price;
    this.brand = brand;
    this.description = description;
    this.img = img;
    this.category = category;
    this.age = age;
    this.stock = stock;
    this.discount = discount;
    this.delivery = delivery;
    this.seller = seller;
    this.warranty = warranty;
    this.views = 0;
    this.clicks = 0;
  }
  
}

let productsList = [];

const getRandomProduct = function() {
  return Math.floor(Math.random() * productsList.length);
};
let newProduct = new product(getRandomProduct.name, 'img.jpg', 0, 0);

function formSubmitted(event) {
  event.preventDefault();

  productNameInput = event.target.productNameInput.value;
  productPriceInput = event.target.productPriceInput.value;
  productBrandInput = event.target.productBrandInput.value;
  productDescriptionInput = event.target.productDescriptionInput.value;
  productImageInput = event.target.productImageInput.value;
  productCategoryInput = event.target.productCategoryInput.value;
  productAgeInput = event.target.productAgeInput.value;
  productStockInput = event.target.productStockInput.value;
  productDiscountInput = event.target.productDiscountInput.value;
  productDeliveryInput = event.target.productDeliveryInput.value;
  productSellersWebsiteInput = event.target.productSellersWebsiteInput.value;
  productWarrantyInput = event.target.productWarrantyInput.value;
  newProduct = new product(
    productNameInput,
    productPriceInput,
    productBrandInput,
    productDescriptionInput,
    productImageInput,
    productCategoryInput,
    productAgeInput,
    productStockInput,
    productDiscountInput,
    productDeliveryInput,
    productSellersWebsiteInput,
    productWarrantyInput,
    productNameInput);
  productsList.push(newProduct);
  document.getElementById('productSubmitForm').reset();
  // confirm("Thank you for submitting a new product. The form has been reset if you would like to enter another product.")
}

let randomProducts = [];
const outputTarget = document.getElementById("products");

let renderContent = function outputProducts(){
  outputTarget.innerHTML = '';
  for (let i = 0; i < 3; i++) {
    let j = randomProducts[i];
    let chosenProduct = productsList[j];
    
    let productCard = document.createElement("div");
    let productNameOutput = document.createElement("h3");
    productNameOutput.innerHTML = `${chosenProduct.name}`;
    productCard.appendChild(productNameOutput);
    let productPriceOutput = document.createElement("h5");
    productPriceOutput.innerHTML = `£${chosenProduct.price}`;
    productCard.appendChild(productPriceOutput);
    let productBrandOutput = document.createElement("h4");
    productBrandOutput.innerHTML = `${chosenProduct.brand}`;
    productCard.appendChild(productBrandOutput);
    let productDescriptionOutput = document.createElement("p");
    productDescriptionOutput.innerHTML = `${chosenProduct.description}`;
    productCard.appendChild(productDescriptionOutput);
    let productImageOutput = document.createElement("img");
    productImageOutput.src = `${chosenProduct.img}`;
    productCard.appendChild(productImageOutput);
    let productCategoryOutput = document.createElement("h5");
    productCategoryOutput.innerHTML = `${chosenProduct.category}`;
    productCard.appendChild(productCategoryOutput);
    let productAgeOutput = document.createElement("h5");
    productAgeOutput.innerHTML = `${chosenProduct.age}`;
    productCard.appendChild(productAgeOutput);
    let productStockOutput = document.createElement("h5");
    productStockOutput.innerHTML = `${chosenProduct.stock}`;
    let productDeliveryOutput = document.createElement("h5");
    productDeliveryOutput.innerHTML = `${chosenProduct.delivery}`;
    productCard.appendChild(productDeliveryOutput);
    let productSellerWebsiteOutput = document.createElement("a");
    productSellerWebsiteOutput.href = `${chosenProduct.seller}`;
    productSellerWebsiteOutput.innerHTML - `Seller's Website`
    productCard.appendChild(productSellerWebsiteOutput);
    let productWarrantyOutput = document.createElement("h5");
    productWarrantyOutput.innerHTML = `${chosenProduct.warranty}`;
    productCard.appendChild(productWarrantyOutput);
    outputTarget.appendChild(productCard);
  }
}

function onClick() {
  for (let i = 0; i < 3; i++){
    randomProducts.push(getRandomProduct());
  }
  renderContent();
}