var numbers = [];
for (var i = 1; i <= 100; i++) {
	numbers.push(i);
}
for (var i = 1; i <= 3; i++) {
	generateProduct(i, false);
	numbers.splice(numbers.indexOf(i), 1);
}

$("#product-generation").click(function () {
	if (numbers.length > 0) {
		generateRandom();
		if (numbers.length == 0) {
			$(this).attr("disabled", true);
		}
	}
});

function generateRandom() {
	var random = numbers[Math.floor(Math.random() * numbers.length)];
	numbers.splice(numbers.indexOf(random), 1);
	generateProduct(random);
}

function generateProduct(i, notOrderedIds = true) {
	$.ajax({
		url: "https://dummyjson.com/products/" + i,
		async: notOrderedIds,
		success: function (data) {
			console.log(data);
			var $product = $(".product-template").clone();
			$product.removeClass("product-template");
			$product.addClass("product-" + i);
			$product.appendTo("body");
			$product.find(".img").attr("src", data.images[0]);
			$product.find(".img").attr("alt", data.title);
			$product.find(".title").text(data.title);
			$product.find(".brand").text("(" + data.brand + ")");
			var newPrice = data.price - (data.discountPercentage / 100 * data.price);
			var newPriceRounded = Math.round(newPrice * 100) / 100;
			$product.find(".price").text("Prix " + newPriceRounded);
			$product.find(".old-price").text("Ancien Prix " + data.price);
			$product.find(".stock").text(data.stock + " en stock");
		}
	});
}