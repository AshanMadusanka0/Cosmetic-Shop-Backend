import Student from "../models/student.js";

export function getStudents(req, res){
	//read and get all the students information from the mongoDB database
    
	Student.find()
		.then((data) => {
			console.log(data);
			res.json(data);
		})
		.catch(() => {});
}

export function createStudent(req, res){


	/////////////////////// Authorization part //////////////////////////////////
	
if(req.user == null){
		res.status(401).json({
			message: "please login and try adain"
		})
		return  //me function eka methanin ehata pahalata start wena eka nawattanawa
	}

	if(req.user.role != "admin"){
		res.status(403).json({
			message: "You must be an admin to create a student"
		})
	  return
	}

/////////////////////// Authorization part //////////////////////////////////



	const student = new Student({
		name: req.body.name,
		age: req.body.age,
		city: req.body.city,
	});

	student
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