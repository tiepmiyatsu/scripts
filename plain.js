function getCartData(data){
  /* do something with the data. In this example we are just loggin it */
  console.log(data);
  console(product.tags);
}

var script = document.createElement('script');
script.src = 'https://quyetnd.myshopify.com/cart.json?callback=getCartData'
document.getElementsByTagName('head')[0].appendChild(script);
