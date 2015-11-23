/**
 * A Product Manager
 */
var ProductManager = function( products ) {

  //User should treat these as read only.
  this.products = products;
  this.availableProducts = products;

  this.getProduct = function( product )
  { //if factory exist in availableProducts
    //  remove the product from availableProducts
    //else
    //  return null (this means its not available)
    if ( this.availableProducts  != null )
    {
      for ( var index = 0; index < this.availableProducts.length; index++ ) {
        if ( this.availableProducts[ index ] === product ) {
          this.availableProducts.splice( index, 1 );
        }
      }
    }else
    {
      return false;
    }
  };
};
module.exports = ProductManager;
