import React from 'react';
import {
  Sphere,
  Box,
  Cylinder,
  Plane,
  View
} from 'react-vr';

export default class Primitives extends React.Component {
  render() {
    return (
      <View>
        <Box 
          style={{
            transform: [
              {
                translate: [4, 0, -1]
              }
            ]
          }}
          wireframe 
          dimWidth={1}
          dimDepth={1}
          dimHeight={1}/>
          <Plane 
            dimWidth={1} 
            dimHeight={1} 
            wireframe
            style={{
              transform: [{
                translate: [2, 0, -2]
              }, {
                rotateY: -30
              }, {
                rotateX: -80
              }]
            }} />
          <Sphere wireframe 
            style={{
              transform: [{
                translate: [0, 0, -3]
              }]
            }} />
           <Sphere
            wireframe
            radius={.7}
            widthSegments={20}
            heightSegments={12}
            style={{
              transform: [{
                translate: [-2, 0, -3]
              }]
            }} />
            <Cylinder
              radiusTop={0.5}
              radiusBottom={0.5}
              dimHeight={2}
              segments={12}
              wireframe
              style={{
              transform: [{
                translate: [-5, 0, -3]
              }]
            }} 
            />
            <Cylinder
              wireframe
              radiusTop={0}
              radiusBottom={1}
              dimHeight={2}
              segments={12}
              style={{
              transform: [{
                translate: [-6, 0, -1]
              }]
            }} 
            />
      </View>
    )
  }
}