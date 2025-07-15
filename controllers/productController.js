import Product from "../models/product.js";

export function getProduct(req, res){
	//read and get all the students information from the mongoDB database
    
	Product.find()
		.then((data) => {
			console.log(data);
			res.json(data);
		})
		.catch(() => {});
}

export function createProdcut(req, res){
	const product = new Product({
		name: req.body.name,
		age: req.body.age,
		city: req.body.city,
	});

	product
		.save()
		.then(() => {
			res.json({
				message: "Student created successfully",
			});
		})
		.catch(() => {
			res.json({
				message: "Failed to create student",
			});
		});
}