import React from 'react';
import { Icon } from 'react-native-elements';
import { View, Text } from 'react-native';


const IconHome=({icons,types,name})=>{
    return(
        <View style={{ alignItems: 'center', width: '30%', marginVertical: 10 }}>
            <Icon
                name={icons}
                size={30}
                type={types}
                color='tomato'
                containerStyle={{
                    borderWidth:2,
                    borderColor:'tomato',
                    borderRadius:45,
                    width:45,
                    height:45,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            />
            <Text style={{fontSize:15}}>{name}</Text>
        </View>
    )
}

export default IconHome;