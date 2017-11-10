import React from 'react';
import {
  AppRegistry,
  View,
  Text,
  asset,
  Pano
} from 'react-vr';
import RoomSwitcher from './app/RoomSwitcher';
import Primitives from './app/3dPrimitives';
import PrimitivesLit from './app/3dPrimitivesLights';
import Models from './app/3dModels';

const Hello = () => (
  <View>
    <Pano source={asset('chess-world.jpg')}/>
      <Text style={{
        backgroundColor: 'rgba(0,0,0,.4)',
        color: 'white',
        fontSize: 0.3,
        fontWeight: '400',
        layoutOrigin: [0.5, 0.5],
        paddingLeft: 1,
        paddingRight: 1,
        textAlign: 'center',
        textAlignVertical: 'center',
        transform: [{translate: [0, .5, -3]}],
      }}>Hello</Text>
  </View>
)

export default class WelcomeToVR extends React.Component {
  render() {
    return (
      <View>
          {/* <Hello /> */}
          <RoomSwitcher />
          {/* <Primitives/> */}
          {/* <PrimitivesLit/> */}
          {/* <Models /> */}
      </View>
    )
  }
}


AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
