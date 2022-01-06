import { Box, Checkbox, Hide, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../redux/action';
import { Button } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'
import todos from '../redux/reducer/todos';
import { DELETE_TODO } from '../redux/actionsTypes';

export const Todo = ({ todo }) => {
    const dispatch = useDispatch();
    const [checked, setChecked] = useState(false);

    const handleChecked = () => dispatch(toggleTodo(todo.id));

   
    useEffect(() => {
        setChecked(todo.completed);
    }, [todo]);

    const deleteTodoItem = () => {
        dispatch(deleteTodo(todo.id))
    } 

    
    return (
       <Box mb={1} bgColor="lightcoral" p={2}>
           <Checkbox onChange={handleChecked} colorScheme="teal" isChecked={checked}>
               <Text as={todo.completed && "del"}>{todo.content}</Text>
           </Checkbox>
           <Button onClick={deleteTodoItem} style={{marginLeft: "500px", marginTop: "-28px"}} colorScheme='blue'>x</Button>
       </Box>
    )
}

