import { View, Text, FlatList , Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import { db } from '../../configs/FirebaseConfig'
import { collection,  getDocs,  query } from 'firebase/firestore'
import CategoryItem from './CategoryItem';

export default function Category() {
    const [categoryList,setCategoryList]=useState([]);


    useEffect(()=>{
        GetCategoryList();
    },[]);

const GetCategoryList=async()=>{
    setCategoryList([])
    
    const q=query(collection(db,'Category'));
    const querySnapshot=await getDocs(q);

    querySnapshot.forEach((doc)=>{
        console.log(doc.data());
        setCategoryList(prev=>[...prev,doc.data()]);
    })
}



  return (
    <View>
        <View style={{
            display:'flex',justifyContent:'space-between',flexDirection:'row'
        }}>
      <Text style={{
            paddingLeft:20,
            marginTop: 10,
            fontSize: 20,
            fontFamily: 'outfit-Bold'
            
      }}>
        Category         
      </Text>
             <Text style={{
                padding:20,
                color:  '#EB9694',
            fontFamily: 'outfit-Bold'
            

             }}>
                 View All  
             </Text>
       </View>
       <FlatList
         data={categoryList}
         renderItem={({item,index})=>(
            <Image source={{uri:item.icon}}
            style={{
             width:40
 
            }}
         />
         )}
         
       />

       
    </View>

  )
}