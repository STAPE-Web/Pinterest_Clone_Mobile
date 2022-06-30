import { StyleSheet, View, Image, TextInput } from 'react-native'
import React from 'react'
import { changeProfile, selectCard, selectUser } from '../slices/userSlice'
import { useSelector, useDispatch } from 'react-redux'
import Nav from '../components/Nav'
import { HomeIcon, PlusIcon, UserIcon } from 'react-native-heroicons/outline'
import Text from '../components/Text'

const Card = ({ navigation }) => {
    const user = useSelector(selectUser)
    const card = useSelector(selectCard)
    const dispatch = useDispatch()

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

    const goToProfile = () => {
        navigation.navigate('User')
        dispatch(changeProfile({
            name: card.user.name,
            avatar: card.user.img,
            email: card.user.email
        }))
    }

    return (
        <View>
            <View>
                <Image source={card.img} style={styles.img} />
                <View style={styles.container}>
                    <TextInput style={styles.title} value={card.title} readonly />
                    <View style={styles.user} onClick={goToProfile}>
                        <Text size={16} style={styles.userName}>{card.user.name}</Text>
                        <Image source={card.user.img} style={styles.avatar} />
                    </View>
                </View>
            </View>
            <Nav theme='black' icons={icons} />
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    logo: {
        width: 48,
        height: 48,
        borderRadius: '100%'
    },
    img: {
        width: '100%',
        height: '100vh',
    },
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 10
    },
    title: {
        outlineStyle: 'none',
        userSelect: 'none',
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        width: '100%',
    },
    user: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    userName: {
        color: '#fff',
    },
    avatar: {
        width: 32,
        height: 32,
    }
})
