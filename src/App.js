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
  Divider,
} from '@chakra-ui/react';
import { DeleteIcon, EditIcon, SmallAddIcon } from '@chakra-ui/icons';

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
                data-testid="name-input"
                type="text"
                placeholder="Name..."
                onChange={event => {
                  setName(event.target.value);
                }}
              />
              <Input
                data-testid="username-input"
                type="text"
                placeholder="Username..."
                onChange={event => {
                  setUsername(event.target.value);
                }}
              />
              <Button
                leftIcon={<SmallAddIcon />}
                data-testid="add-button"
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
          <Divider mb={5}/>
          <Box textAlign="center">
            <Heading size="lg">List of Users</Heading>
            {userList.map(user => {
              return (
                <Stack direction="row" spacing={2} textAlign="left" mt={2}>
                  <Text w="40%" data-testid="name-text">
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
                    leftIcon={<EditIcon />}
                    data-testid="update-button"
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
                    leftIcon={<DeleteIcon />}
                    data-testid="delete-button"
                    size="md"
                    colorScheme="orange"
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
