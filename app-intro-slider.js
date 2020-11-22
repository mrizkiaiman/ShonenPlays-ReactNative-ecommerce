import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import {Fonts, Size, Colors} from './src/style'
const {width, height} = Size
//Assets
import GamingIllustration from './src/assets/Illustrations/Intro-screens/Intro-game.svg'
import DeliveryIllustration from './src/assets/Illustrations/Intro-screens/Intro-delivery.svg'
import EasyRegistrationIllustration from './src/assets/Illustrations/Intro-screens/Intro-easyRegistration.svg'
import WelcomeIllustration from './src/assets/Illustrations/Intro-screens/Intro-welcome.svg'
//Components
import {Ionicons} from '@expo/vector-icons'
import AppIntroSlider from 'react-native-app-intro-slider'

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: height,
  },
  titleText: {
    ...Fonts.H2,
    fontSize: 30,
    marginVertical: 20,
    color: Colors.gray,
  },
  explanationText: {
    ...Fonts.regularBlack,
    color: Colors.gray,
    marginBottom: 4,
    width: width * 0.8,
    textAlign: 'center',
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
})

export default function IntroSlider({openApp}) {
  const slides = [
    {
      key: 'zero',
      title: 'Easy registration',
      firstLineOfText: 'It takes only less than five minutes ',
      secondLineOfText:
        'to sign up with your email or one touch with your google account',
      image: <EasyRegistrationIllustration width={300} height={300} />,
    },
    {
      key: 'one',
      title: 'Free delivery offers',
      firstLineOfText: 'Free delivery for new customers via',
      secondLineOfText: 'BCA and other payment methods',

      image: <DeliveryIllustration width={300} height={300} />,
    },
    {
      key: 'two',
      title: 'All your favorites',
      firstLineOfText: 'Easily get what you needs,',
      secondLineOfText: 'we already have covered almost everything',
      image: <GamingIllustration width={300} height={300} />,
    },
    {
      key: 'three',
      title: 'Welcome!',
      firstLineOfText: 'ShonenPlays provides your hobbies needs,',
      secondLineOfText: 'and will make sure to fulfill your desires',
      image: <WelcomeIllustration width={300} height={300} />,
    },
  ]

  const renderScreen = ({item}) => {
    return (
      <View style={styles.mainContainer}>
        {item.image}
        <Text style={styles.titleText}>{item.title}</Text>
        <Text style={styles.explanationText}>{item.firstLineOfText}</Text>
        <Text style={styles.explanationText}>{item.secondLineOfText}</Text>
      </View>
    )
  }

  const doneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ionicons
          name="md-checkmark"
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    )
  }

  const nextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ionicons
          name="md-arrow-round-forward"
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    )
  }

  return (
    <AppIntroSlider
      activeDotStyle={{backgroundColor: Colors.orange}}
      renderItem={renderScreen}
      data={slides}
      onDone={() => openApp()}
      renderDoneButton={doneButton}
      renderNextButton={nextButton}
    />
  )
}
