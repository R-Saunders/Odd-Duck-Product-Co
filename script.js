'use strict'

class product {
  constructor(name, img, views, clicks) {
    this.name = name;
    this.img = img;
    this.views = views;
    this.clicks = clicks;
  }
  
}

let productsList = [];

const getRandomProduct = Math.floor(Math.random() * productsList.length);
let newProduct = new product(getRandomProduct.name, 'img.jpg', 0, 0);