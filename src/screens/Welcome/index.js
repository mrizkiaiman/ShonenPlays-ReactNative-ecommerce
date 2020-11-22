import React from 'react'
import {SafeAreaView, View, Text, Dimensions} from 'react-native'
import styles from './style'
//Assets
import WelcomeBanner from '../../assets/Illustrations/Reading.svg'
//Components
import Button from '../../components/Button'

export default Welcome = ({navigation}) => {
  const {width, height} = Dimensions.get('window')

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerTitleText}>Welcome!</Text>
        <Text style={styles.headerText}>
          ShonenPlays provides your hobbies needs
        </Text>
        <Text style={styles.headerText}>
          and it will certainly fulfilled your desires
        </Text>
        <Text style={styles.headerText}>no matter what your hobbies are</Text>
        <Button
          styling={{
            buttonStyle: styles.getStartedButton,
            textStyle: styles.getStartedButtonText,
          }}
          onSubmit={() => navigation.navigate('SignIn')}
          title="Get Started"
        />
      </View>
      <View style={{alignSelf: 'flex-end'}}>
        <WelcomeBanner width={width * 0.85} height={height * 0.9} />
      </View>
    </SafeAreaView>
  )
}
