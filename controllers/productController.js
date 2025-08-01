import Product from "../models/product.js";



export async function getProduct(req, res){

	try{
	const productlist = await Product.find()

	res.json({
		list: productlist
	})
}catch(e){
	res.json({
		message:"Error"
	})
}
	//read and get all the students information from the mongoDB database
    
	// Product.find()
	// 	.then((data) => {
	// 			res.json({
	// 			list: data
	// 		})
	// 		})

	// 	.catch(
	// 		() => {
	// 			res.json({
	// 			message : "Products Error "
	// 		})
	// 	}
	// 	); 


		//use the "async-awit" for this(we can use the async await not to "then" "catch")
}

export function getProductByName(req, res){
	
	const name =req.params.name;
    
	Product.find({name : name})
		.then((data) => {


			if(data.length !=0){
				res.json({
				list: data
			})
			}
			else{
				res.json({
					message: "Error"
				})
			}
			
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

    console.log(req.user)
  //user Authentication
	if(req.user ==null){
		res.json({
			message : "You are not Logged In"
		})
		return
	}

	if(req.user.role !="admin"){
		res.json({
			message : "You are  an admin"
		})
		return 
	}
//user authentication

	const product = new Product({
		productID:req.body.productID,
		name: req.body.name,
		weight: req.body.weight,
		price: req.body.price,
		alternativeNames:req.body.alternativeNames,
		imageUrl:req.body.imageUrl,
		description:req.body.description
	});

	product
		.save()
		.then(() => {
			res.json({
				message: "Product created successfully",
			});
		})
		.catch(() => {
			res.Status(403).json({
				message: "Failed to create Product",
			});
		});
}

export function deleteProduct(req,res){
	
	Product.deleteOne ({productID: req.params.productID})
        .then(() => {
			res.json({
				message: "Product deleted successfully",
			});
		})
		.catch(() => {
			res.json({
				message: "Failed to delete Product",
			});
		});
}