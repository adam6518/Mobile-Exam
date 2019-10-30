import React from 'react'
import { Text } from 'react-native'
import { View, Container, Content, Card, CardItem, H1, Button, Body } from 'native-base'

const TodoDetailScreen = props => {
    const deleteTodo = () => {
        firebase.database().ref(`/${id}`).remove()  
    }
    
    return (
        <Container>
            {/* <Content> */}
            <Card style={{ marginTop: '50%' }}>
                <CardItem header>
                    <Body>
                        <H1>
                            Todo:
                            </H1>
                        <Text>
                            ID:
                            </Text>
                    </Body>
                </CardItem>
                <CardItem>
                    <Text>
                        Status:
                        </Text>
                </CardItem>
                <CardItem>
                    <Text>
                        Date Created:
                        </Text>
                </CardItem>
                <CardItem>
                    <Text>
                        Date Completed:
                        </Text>
                </CardItem>
                <CardItem>
                    <Button info>
                        <Text onPress={() => props.navigation.navigate('TodoListScreen', null)}>Go Back</Text>
                    </Button>
                    <Button style={{ marginLeft: '67%', backgroundColor: 'red' }}>
                        <Text onPress={() => props.navigation.navigate('TodoListScreen', {deleteTodo})}>Delete</Text>
                    </Button>
                </CardItem>
            </Card>
            {/* </Content> */}
        </Container>
    )
}

export default TodoDetailScreen