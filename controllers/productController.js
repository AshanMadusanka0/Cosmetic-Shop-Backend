import Product from "../models/product.js";

export function getProduct(req, res){
	//read and get all the students information from the mongoDB database
	const name =req.parms.name;
    
	Product.find({name : name})
		.then((data) => {
			res.json({
				list: data
			})
		})
		.catch(
			() => {
				res.json({
				message : "Error"
			})
		}
		);
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
				message: "Product created successfully",
			});
		})
		.catch(() => {
			res.json({
				message: "Failed to create Product",
			});
		});
}