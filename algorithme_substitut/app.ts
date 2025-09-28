if (product.id == "1" =| product.id == "2" =| product.id == "3") {
product.image = "";
}

const productIdsWithoutImage = [1, 2, 3];
if (productIdsWithoutImage.includes(product.id)) {
product.image = "";
}