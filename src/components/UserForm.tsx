import { Button, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

type UserType = {
    name: string,
    phone: string,
    email: string
}

const UserForm = () => {
    const [userDetails, setUserDetails] = useState<UserType>({
        name: "John",
        phone: "",
        email: "test@gmail.com"
    })

    const navigate = useNavigate()

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserDetails(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        localStorage.setItem("userInfo", JSON.stringify(userDetails as UserType))
        alert("Details successfully saved")
        navigate('/users')
    }
    return (
        <form onSubmit={handleSubmit}>
            <Stack alignItems={"center"} gap={5}>
                <TextField label="Name" variant="outlined" required value={userDetails.name} name='name' onChange={handleOnChange} />
                <TextField label="Phone" variant="outlined" required value={userDetails.phone} name="phone" onChange={handleOnChange} />
                <TextField label="Email" variant="outlined" type="email" required value={userDetails.email} name="email" onChange={handleOnChange} />
                <Button variant="contained" size="medium" type='submit'>
                    Submit
                </Button>
            </Stack>
        </form>
    )
}

export default UserForm