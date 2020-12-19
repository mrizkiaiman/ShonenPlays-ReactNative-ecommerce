import React, {useState, useEffect} from 'react'
import {Text, View} from 'react-native'
//Styling
import styles from './style'
import {Size} from '../../style'
import {tailwind} from '../../style/tailwind'
//Components
import {InputMap, ChooseLocationButton} from './components'
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps'
import * as Location from 'expo-location'
//Functions

export default () => {
  const [location, setLocation] = useState({})

  useEffect(() => {
    getCurrentLocation()
  }, [])

  const getCurrentLocation = async () => {
    let {status} = await Location.requestPermissionsAsync()
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied')
      return
    }

    let location = await Location.getCurrentPositionAsync({})
    setLocation(location)
  }

  const changeCurrentLocation = (loc) => {
    setLocation({
      latitude: loc.result.geometry.location.lat,
      longitude: loc.result.geometry.location.lng,
      latitudeDelta: 0.003,
      longitudeDelta: 0.003,
    })
  }

  return (
    <View>
      <InputMap notifyChange={changeCurrentLocation} />
      <MapView
        showsUserLocation
        showsIndoorLevelPicker
        followsUserLocation
        style={{width: '100%', height: '100%'}}
        region={location}
        onRegionChangeComplete={(region) => {
          setLocation({
            ...location,
            latitude: region.latitude,
            longitude: region.longitude,
          })
        }}>
        <Marker
          draggable
          coordinate={location}
          title="Your Location"
          description="Chosen Location"
        />
      </MapView>
      <ChooseLocationButton navigate={() => navigateScreen()} />
    </View>
  )
}
