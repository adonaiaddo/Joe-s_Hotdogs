var hotdogs = document.prompt("How many hotdogs do you want?")
var fries = document.prompt("How many fries do you want?")
var sodas = document.prompt("How many sodas do you want?")

var subtotal = hotdogs * 3.75 + fries * 2.00 + sodas * 1.80

var discount = 0.00
if (subtotal >= 20) {
    discount = subtotal * 0.10
}

var tax = subtotal / 16
var final = subtotal + tax

document.write(hotdogs + " hotdogs      " + hotdogs * 3.75 + "\n")
document.write(fries   + " fries        " + fries   * 2.00 + "\n")
document.write(sodas   + " sodas        " + sodas   * 1.80 + "\n")
document.write("subtotal                " + subtotal       + "\n")
document.write("discount                " + discount       + "\n")
document.write("tax                     " + tax            + "\n")
document.write("total                   " + final)
