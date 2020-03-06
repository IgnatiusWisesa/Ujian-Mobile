import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Icon, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { StackActions } from '@react-navigation/native';
import { 
    onInputText, 
    onUserEnter,
    userEnterCheck
} from '../actions';

class Login extends Component {

    componentDidMount() {
        this.props.userEnterCheck();
    }

    componentDidUpdate() {
        if (this.props.user.username) {
            this.props.navigation.dispatch(StackActions.replace('TabMenu'));
        } 
    }

    onBtnEnterPress = () => {
        this.props.onUserEnter(this.props.loginForm)
    }

    render() {
        if(this.props.user.authChecked && !this.props.user.username) {
            return (
                <View style={styles.containerStyle}>
                    <View>
                        <Text h2 style={{ color: 'tomato'}}>TomatoApp</Text>
                        <Icon 
                            name='food'
                            size={80}
                            color='tomato' 
                        />
                    </View>
                    <View style={styles.inputContainerStyle}>
                        <Input
                            placeholder='Username'
                            leftIcon={
                                <Icon
                                    name='user'
                                    size={24}
                                    color='tomato'
                                    type='feather'
                                />
                            }
                            value={this.props.loginForm.username}
                            onChangeText={(val) => this.props.onInputText('username', val)}
                        />
                    </View>
                    <Text style={{ color: 'red' }}>{this.props.loginForm.error}</Text>
                    <Button
                        title="Enter"
                        containerStyle={{ width: '90%', marginBottom: 15 }}
                        buttonStyle={{ backgroundColor: 'tomato', color: 'white' }}
                        onPress={this.onBtnEnterPress}
                        loading={this.props.loginForm.loading}
                    />
                </View>
            )
        }
        
        return (
            <View style={styles.styleloading}>        
                <Text h3 style={{ color: 'white' }}>TomatoApp</Text>
                <Icon 
                    name='food'
                    size={80}
                    color='white' 
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    styleloading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'tomato'
    },
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    inputContainerStyle: {
        marginTop: 50,
        marginBottom: 100,
        width: '100%'
    }
})

const mapStateToProps = ({ user, loginForm }) => {
    return { user, loginForm }
}

export default connect(mapStateToProps, { 
    onInputText, 
    onUserEnter,
    userEnterCheck
})(Login);