import products from "./products"
const productName: string = "tote bag"
let shipping: number
let taxPercent: number
let taxTotal: number
let total: number
let shippingAddress: string = "457 Broadway, Utah"
const product = products.filter(product => {
  return product.name === productName
})[0]
// console.log(product)
if (product.preOrder) {
  console.log("We will send you a notification, once your shipment ships.")
}

if (product.price > 25) {
  console.log("Your shipping will be free")
  shipping = 0
} else {
  shipping = 5
}

if (shippingAddress.match("New York")) {
  taxPercent = 0.1
} else {
  taxPercent = 0.5
}
taxTotal = product.price * taxPercent
total = product.price + taxTotal + shipping

console.log(`
Product : ${product.name}
Address: ${shippingAddress}
Price: $${product.price}
Tax: $${taxTotal.toFixed(2)}
Shipping: $${shipping}
Total: $${total.toFixed(2)}
`)
