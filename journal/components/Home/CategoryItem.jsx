import { View, Text , Image} from 'react-native'
import React from 'react'


import { db } from '../../configs/FirebaseConfig'
import { collection,  getDocs,  query } from 'firebase/firestore'


export default function CategoryItem({category}) {
  return (
    <View>
        <Image source={{uri:category.icon}}
           style={{
            width:40

           }}
        />
    </View>
  )
}