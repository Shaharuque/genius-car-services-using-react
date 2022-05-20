import React from 'react';
// import { useForm } from "react-hook-form";

const AddService = () => {
    // const { register, handleSubmit } = useForm();
    const handleAddService = e=> {
        e.preventDefault()
        const name = e.target.name.value;
        const description = e.target.description.value;
        const price = e.target.price.value;
        const img = e.target.img.value;

        const service = { name, description,price,img };   //object form a data server a pathatey hobey
        console.log(service)

        //server ar jei url a post kortey chassi sheita
        fetch('http://localhost:5000/service', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( service ),  //service form thekey gatahered data k stringify korey server a pathassi 
        })
            .then((res) => res.json())   //server thekey jei res pabo sheita json/object a convert
            .then((result) => {
                console.log(result)      //server a thik bhabey data send kora geley acknowledgement true pabo
            })
            .catch((err) => console.log(err));
    }
    return (
        <div>
            <h2>Plz add a service to service form</h2>
            <div>
                <h2>Please Add a new user</h2>
                <form onSubmit={handleAddService}>
                    <input type="text" name="name" placeholder="Name" required></input>
                    <br />
                    <input type="text" name="description" placeholder="Description" required></input>
                    <br></br>
                    <input type="text" name="price" placeholder="Price" required></input>
                    <br />
                    <input type="text" name="img" placeholder="Image URL" required></input>
                    <br />
                    <input type="submit" value="Add User" />
                </form>
            </div>
        </div>
    );
};

export default AddService;