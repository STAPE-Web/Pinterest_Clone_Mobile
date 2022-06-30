import { StyleSheet, Image, View } from 'react-native'
import React, { useState } from 'react'
import Nav from '../components/Nav'
import { HomeIcon, PlusIcon, UserIcon } from 'react-native-heroicons/outline'
import { changeCardList, changeProfile, selectUser } from '../slices/userSlice'
import { useSelector, useDispatch } from 'react-redux'
import Input from '../components/Input'
import Button from '../components/Button'
import { cards } from '../objects'

const Add = ({ navigation }) => {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    const [cardName, setCardName] = useState('')
    const [cardImg, setCardImg] = useState('')

    const icons = [
        {
            id: 1,
            icon: HomeIcon,
            width: 40,
            height: 40,
            onClick: () => { navigation.navigate('Home') }
        },
        {
            id: 2,
            icon: PlusIcon,
            width: 40,
            height: 40,
            onClick: () => { navigation.navigate('Add') }
        },
        {
            id: 3,
            icon: UserIcon,
            width: 40,
            height: 40,
            onClick: () => {
                navigation.navigate('User')
                dispatch(changeProfile({
                    name: user.name,
                    avatar: user.avatar,
                    email: user.email
                }))
            }
        }
    ]

    const submit = () => {
        navigation.navigate('Home')
        dispatch(changeCardList([{
            id: Date.now(),
            img: cardImg,
            title: cardName,
            user: {
                img: user.avatar,
                name: user.name,
                email: user.email
            }
        }, ...cards]))
    }

    return (
        <View>
            <View style={styles.header}>
                <Image source={require('../assets/app/logo.png')} style={styles.logo} />
                <Image source={user.avatar} style={styles.logo} />
            </View>
            <View style={styles.container}>
                <Input theme='black' outline={true} placeholder='Enter card name:' placeholderColor='#000' value={cardName} onChange={e => setCardName(e.target.value)} />
                <Input theme='black' outline={true} placeholder='Enter card img url:' placeholderColor='#000' value={cardImg} onChange={e => setCardImg(e.target.value)} />
                <Button theme='black' outline={false} width='100%' value='Send' onClick={submit} />
            </View>
            <Nav theme='black' icons={icons} />
        </View>
    )
}

export default Add

const styles = StyleSheet.create({
    logo: {
        width: 48,
        height: 48,
        borderRadius: '100%'
    },
    header: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 10,
        zIndex: 100
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        width: '100%',
        paddingHorizontal: 10,
        gap: 10,
        height: '100vh',
        position: 'absolute'
    },
})