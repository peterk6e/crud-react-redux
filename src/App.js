import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, deleteUser, updateUsername } from './features/Users';

import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Stack,
  Grid,
  theme,
  Button,
  Input,
  Center,
  Heading,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  const dispatch = useDispatch();
  const userList = useSelector(state => state.value); //state.users.value

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [newUsername, setNewUsername] = useState('');

  return (
    <ChakraProvider theme={theme}>
      <Grid w="100%">
        <ColorModeSwitcher justifySelf="flex-end" m={3} />
      </Grid>
      <Center>
        <Box textAlign="center">
          <Heading size="lg">Add a User</Heading>
          <Grid minH="20vh" p={1}>
            <VStack spacing={4}>
              <Input
                type="text"
                placeholder="Name..."
                onChange={event => {
                  setName(event.target.value);
                }}
              />
              <Input
                type="text"
                placeholder="Username..."
                onChange={event => {
                  setUsername(event.target.value);
                }}
              />
              <Button
                colorScheme="blue"
                variant="outline"
                onClick={() => {
                  dispatch(
                    addUser({
                      id: userList[userList.length - 1].id + 1,
                      name,
                      username,
                    })
                  );
                }}
              >
                Add User
              </Button>
            </VStack>
          </Grid>
          <Box textAlign="center">
            <Heading size="lg">List of Users</Heading>
            {userList.map(user => {
              return (
                <Stack direction="row" spacing={2} textAlign="left" mt={2}>
                  <Text w="40%">
                    {user.name} {user.username}
                  </Text>
                  <Input
                    w="30%"
                    type="text"
                    placeholder="New Username..."
                    onChange={event => {
                      setNewUsername(event.target.value);
                    }}
                  />
                  <Button
                    size="md"
                    colorScheme="blue"
                    variant="outline"
                    onClick={() => {
                      dispatch(
                        updateUsername({ id: user.id, username: newUsername })
                      );
                    }}
                  >
                    Update
                  </Button>
                  <Button
                    size="md"
                    colorScheme="blue"
                    variant="outline"
                    onClick={() => {
                      dispatch(deleteUser({ id: user.id }));
                    }}
                  >
                    Delete
                  </Button>
                </Stack>
              );
            })}
          </Box>
        </Box>
      </Center>
    </ChakraProvider>
  );
}

export default App;
