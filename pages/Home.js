import { StyleSheet, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import { changeCard, changeProfile, selectCardList, selectUser } from '../slices/userSlice'
import { useSelector, useDispatch } from 'react-redux'
import Nav from '../components/Nav'
import { HomeIcon, PlusIcon, UserIcon } from 'react-native-heroicons/outline'
import Text from '../components/Text'

const Home = ({ navigation }) => {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const cardList = useSelector(selectCardList)

    useEffect(() => {
        if (user.name == '') {
            navigation.navigate('SignIn')
        }
        if (user.avatar == '') {
            navigation.navigate('SignIn')
        }
        if (user.email == '') {
            navigation.navigate('SignIn')
        }
    })

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

    const goToCard = (card) => {
        navigation.navigate('Card')
        dispatch(changeCard({
            img: card.img,
            title: card.title,
            user: card.user
        }))
    }

    return (
        <View>
            <View style={styles.header}>
                <Image source={require('../assets/app/logo.png')} style={styles.logo} />
                <Image source={user.avatar} style={styles.logo} />
            </View>
            <View style={styles.container}>
                {cardList.map((card) => (
                    <View key={card.id} style={styles.card} onClick={() => goToCard(card)}>
                        <Image source={card.img} style={styles.image} />
                        <Text size={24} style={styles.text}>{card?.title}</Text>
                    </View>
                ))}
            </View>
            <Nav theme='black' icons={icons} />
        </View>
    )
}

export default Home

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
    },
    text: {
        color: '#000'
    },
    image: {
        width: '100%',
        height: 300,
        borderRadius: 15
    },
    container: {
        paddingHorizontal: 10,
        paddingBottom: 100
    },
    card: {
        paddingVertical: 10,
    }
})