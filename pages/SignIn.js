import { StyleSheet, View, Image } from 'react-native'
import React, { useState } from 'react'
import BackGround from '../components/BackGround'
import Text from '../components/Text'
import Input from '../components/Input'
import Button from '../components/Button'
import { useDispatch, useSelector } from 'react-redux';
import { change, selectUser } from '../slices/userSlice'

const SignIn = ({ navigation }) => {
    const [userName, setUserName] = useState('')
    const [userAvatar, setUserAvatar] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const dispatch = useDispatch()
    const user = useSelector(selectUser)

    const submit = (e) => {
        e.preventDefault()
        dispatch(change({
            name: userName,
            avatar: userAvatar,
            email: userEmail
        }))

        if (user != null) {
            navigation.navigate('Home')
        }
    }

    return (
        <View style={styles.container}>
            <BackGround source={require('../assets/app/background.jpg')} brightness='50%' />
            <View style={styles.box}>
                <Image source={require('../assets/app/logoWhite.png')} style={styles.logo} />
                <Text size={36} style={styles.text}>Welcome to Pinterest</Text>
                <Input maxLength={15} theme='white' outline={true} placeholder='Enter your name:' placeholderColor='#fff' value={userName} onChange={e => setUserName(e.target.value)} />
                <Input theme='white' outline={true} placeholder='Enter url your avatar:' placeholderColor='#fff' value={userAvatar} onChange={e => setUserAvatar(e.target.value)} />
                <Input maxLength={30} theme='white' outline={true} placeholder='Enter your email:' placeholderColor='#fff' value={userEmail} onChange={e => setUserEmail(e.target.value)} />
                <Button theme='white' outline={false} width='100%' value='Send' onClick={submit} />
            </View>
        </View>
    )
}

export default SignIn

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 48,
        height: 48,
    },
    text: {
        color: 'white',
        fontFamily: 'Ubuntu_500Medium',
        width: 200,
        textAlign: 'center',
    },
    box: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    }
})