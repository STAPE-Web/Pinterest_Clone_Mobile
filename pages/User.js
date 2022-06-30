import { StyleSheet, View, Image } from 'react-native'
import React from 'react'
import Nav from '../components/Nav'
import { HomeIcon, PlusIcon, UserIcon } from 'react-native-heroicons/outline'
import Text from '../components/Text'
import { changeProfile, selectProfile, selectUser } from '../slices/userSlice'
import { useSelector, useDispatch } from 'react-redux'

const User = ({ navigation }) => {
    const user = useSelector(selectUser)
    const profile = useSelector(selectProfile)
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

    return (
        <View>
            <View style={styles.container}>
                <Image source={profile.avatar} style={styles.img} />
                <Text size={36} style={styles.title}>{profile.name}</Text>
                <Text size={16} style={styles.email}>{profile.email}</Text>
            </View>
            <Nav theme='black' icons={icons} />
        </View>
    )
}

export default User

const styles = StyleSheet.create({
    img: {
        width: 250,
        height: 250,
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    title: {
        fontWeight: 'bold',
    },
    email: {
        color: '#767676'
    }
})