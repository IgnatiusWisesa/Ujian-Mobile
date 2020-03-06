import React from 'react';
import { View, Text, StyleSheet, Platform, FlatList, TouchableWithoutFeedback,Image } from 'react-native';
import { Header } from 'react-native-elements';
import { connect } from 'react-redux';
import { getHomeListPost } from '../actions';
import IconHome from './IconHome';
import { Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';
import axios from 'axios'

class Home extends React.Component {
    state={
        dataresto: []
    }

    async componentDidMount() {
        try {
            const res = await axios.get('https://developers.zomato.com/api/v2.1/search?start=1&count=10&sort=rating',{
                                        headers:{
                                            "user-key":"e77ac2546064bac1d778e8e271d3f93b"
                                        }
                                    })
            // console.log(res.data.restaurants[0].featured_image)
            this.setState({ dataresto: res.data.restaurants })
        } catch (err) {
            console.log(err)
        }
    }

    renderresto=()=>{
        console.log(this.state.dataresto[0]) 

        // return this.state.dataresto.map((val,index) => {
        //     return(
        //         <Card>
        //             <View style={{ borderTopStartRadius: 20 }}>
        //                 <Image 
        //                     source={{ uri:val.featured_image }} 
        //                     style={{ height: 180, width:"100%" }}
        //                 />
        //             </View>            
        //             <CardItem style={{ marginTop:-10 }}>
        //                 <Left>
        //                     <Icon 
        //                         type='FontAwesome'
        //                         name='star' 
        //                         style={{ 
        //                             fontSize:10,
        //                             color:'gold' 
        //                         }} 
        //                     />
        //                     <Text 
        //                         style={{
        //                             fontSize:10,
        //                             color:'black'
        //                         }}
        //                     >
        //                         {val.user_rating.aggregate_rating}
        //                     </Text>
        //                 </Left>
        //             </CardItem>
        //             <CardItem style={{ marginTop: -15 }}>
        //                 <Text 
        //                     style={{
        //                         fontWeight:'bold',
        //                         marginRight:5,
        //                         fontSize:15
        //                     }}
        //                 >
        //                     {val.name} 
        //                 </Text>
        //             </CardItem>
        //         </Card>
        //     )
        // })
    }

    render() {
        return (
            <View>
                <View style={styles.containerStyle}>
                    <Header
                        rightComponent={{ 
                            text: `Halo ${this.props.user.username} !`, 
                            style: { color: 'white', fontSize: 21, fontWeight: '700' } 
                        }}
                        leftComponent={{ 
                            icon: 'ticket-account', 
                            color: 'white',
                            type: 'material-community'
                        }}
                        containerStyle={{
                            backgroundColor: 'tomato',
                            justifyContent: 'space-around',
                            elevation: 2,
                            marginTop: Platform.OS === 'ios' ? 0 : - 25
                        }}
                        rightContainerStyle={{
                            flex: 3
                        }}
                    />
                    <View style={{
                        flexDirection:'row',
                        flexWrap:'wrap',
                        paddingTop:15 
                    }}>
                        <IconHome icons={'credit-card'} name={'Credit'}/>
                        <IconHome icons={'food-fork-drink'} name={'Recipe'}/>
                        <IconHome icons={'food-variant'} name={'Variant'} />
                        <IconHome icons={'location-pin'} name={'Location'}/>
                        <IconHome icons={'shopping-cart'} name={'Cart'}/>
                        <IconHome icons={'hamburger'} name={'Burger'}/>
                        <IconHome icons={'local-pizza'} name={'Pizza'}/>
                        <IconHome icons={'more-horizontal'} name={'More'}/> 
                    </View>
                        {this.renderresto()}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center'
    }
})

const mapStateToProps = ({ homeListPost, user }) => {
    return {
        homeListPost,
        user
    }
}

export default connect(mapStateToProps, { getHomeListPost })(Home);