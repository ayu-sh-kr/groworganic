import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UsersTable from './UsersTable';
import { Alert, AlertTitle, Box, Divider, Skeleton, Stack, Typography } from '@mui/material';
import Department from './Department';

type GeoType = {
  lat: string,
  lng: string
}

type AddressType = {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: GeoType
}

type CompanyType = {
  name: string,
  catchPhrase: string,
  bs: string
}

export type UsersType = {
  id: number,
  name: string,
  username: string,
  email: string,
  address: AddressType,
  phone: string,
  website: string,
  company: CompanyType
}

const Users = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const userInfo = localStorage.getItem("userInfo");
  if (!userInfo) {
    setTimeout(() => {
      navigate('/')
    }, 3000);
    return <Alert severity="error">  <AlertTitle>Error</AlertTitle> User Details are must</Alert>
  }

  const [users, setUsers] = useState<UsersType[] | null>(null);

  useEffect(() => {
    const getUsers = async () => {
      setIsLoading(true)
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) {
          throw new Error('Failed to fetch');
        }
        const data = await res.json() as UsersType[];
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
      finally {
        setIsLoading(false)
      }
    };
    getUsers();
  }, []);

  if (isLoading) {
    return (
      <Box sx={{ pt: 10 }} >
        {Array(5)
          .fill(null)
          .map((_, i) => (
            <Typography variant='h2' key={i}>
              <Skeleton animation="wave" />
            </Typography>
          ))}
      </Box>
    );
  }

  return (
    <Box>
      <UsersTable Users={users} />
      <Divider>Department</Divider>
      <Department />
    </Box>
  );
};

export default Users;
