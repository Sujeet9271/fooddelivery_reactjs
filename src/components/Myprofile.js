
import React, { useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import axiosInstance from '../axios';




const Myprofile = () => {

    useEffect(() => {
        getprofile()
    }, []);

    // const history = useHistory()
   
    const [Address, setAddress] = useState({})

    // const [loading, setLoading] = useState(false)
    
    const [Profile, setProfile] = useState([])

    const getprofile = async () => {


        try {
            const res = await axiosInstance.get('accounts/profile/')
            console.log(res.data)
            setProfile(res.data)
            setAddress(res.data.profile)
          
        } catch (err) {
            alert(err.message);

        }
        
    }

    // const initialData = Object.freeze({
    //     username: formData.username,
    //     firstname: formData.firstname,
    //     lastname: formData.lastname,
    //     email: formData.email,
    //     address: '',
    //     contact_number: ''

    // })

    // const [Deliver_to, updateData] = useState(initialData);


    const handleSubmit = (e) => {
        console.log('Update Profile')
       
    }

    const handleChange = (e) => {
        
           console.log([e.target.name], e.target.value)

        
    }

    
    

    return (
        <div>

            <Container>


                <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>UserName</Form.Label>
                        <Form.Control type='text' name='username' placeholder={Profile.username}  readOnly/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" placeholder={Profile.email} readOnly />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>FirstName</Form.Label>
                        <Form.Control type="text" name='firstname' placeholder={Profile.firstname} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>LastName</Form.Label>
                        <Form.Control type='text' name='lastname' placeholder={Profile.lastname} onChange={handleChange} />
                    </Form.Group>
                    
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" name="address" placeholder={Address.address} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Contact No.</Form.Label>
                        <Form.Control type="text" name="contact_number" placeholder={Address.contact_number} onChange={handleChange} />
                    </Form.Group>


                    <Button onClick={handleSubmit}>update</Button>

                </Form>
            </Container>
        </div>
    )
}

export default Myprofile