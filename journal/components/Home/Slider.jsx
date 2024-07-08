import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { db } from '../../configs/FirebaseConfig'
import { collection, getDocs,  query } from 'firebase/firestore'

export default function Slider() {
const [sliderList,setSliderList]=useState([]);


    useEffect(()=>{
        GetSliderList();
    },[]);

    const GetSliderList=async()=>{
         setSliderList([]);

          const q=query(collection(db,'Slider'));
          const querySnapshot=await getDocs(q);
        
          querySnapshot.forEach((doc)=>{
            console.log(doc.data());
            setSliderList(prev=>[...prev,doc.data()]);
            
          })
          
    }
  return (
    <View>
       
      <Text style={{
         fontFamily: 'outfit-Bold',
         fontSize:15,
         padding:17,
         paddingBottom: 5,
         paddingTop: 5,
         paddingLeft: 17
      }}>#SPECIAL  FOR  YOU                                                         <Text style={{
        fontFamily: 'outfit',
        marginLeft:100,
        paddingBottom: 2,
        fontSize:10,
        color:'#808080'

       
           
     }}>
             SWIPE  RIGHT !!!
     </Text>
     </Text>
      
    
     
    <FlatList 
             data={sliderList}
             horizontal={true}
             showsHorizontalScrollIndicator={false}
             style={{
                  paddingLeft: 12
             }}
             renderItem={({item,index})=>(
                <Image source={{uri:item.imageUrl}}
                 style={{
                    width:385,
                    height: 160,
                    borderRadius: 10,
                    marginRight: 19
                 }}
                />
             )}
           

    />    
    </View>
  )
}