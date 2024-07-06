import React from 'react'
import UserForm from '../components/UserForm'
import { Typography } from '@mui/material'

const Home = () => {
  return (
    <>
      <Typography variant='h3' component={"h2"} align='center' py={4}>Enter your Details</Typography>
      <UserForm />
    </>
  )
}

export default Home