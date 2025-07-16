import Product from "../models/product.js";



export function getProduct(req, res){
	//read and get all the students information from the mongoDB database
    
	Product.find()
		.then((data) => {
				res.json({
				list: data
			})
			})

		.catch(
			() => {
				res.json({
				message : "Products Error "
			})
		}
		);
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

	if(req.user.type !="admin"){
		res.json({
			message : "You are not an admin"
		})
		return  
	}
//user authentication

	const product = new Product({
		name: req.body.name,
		weight: req.body.weight,
		price: req.body.price,
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

export function deleteProduct(req,res){
	 
	Product.deleteOne ({name: req.params.name})
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