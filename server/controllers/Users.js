import { v4 as uuid } from "uuid";

let users=[];

export const getUsers=(req,res)=> {
    res.send(users);
};

export const createUser(req,res)=> {
    const user=req.body;
    users.push({...user,id:uuid()});
    res.send("user created successfully");

}


export const deleteUser(req,res)=> {

    users= users.filter((user)=>user.id !== req.params.id);
    res.send("users deleted successfully")
}

export const updatedUser(req,res)=> {
const user= users.find((user)=>user.id === req.params.id);

user.name=req.body.name;
user.email=req.body.emai;
user.contact=req.body.contact;

res.send("user updated sucessfully")
}
