import React, { Component } from 'react';

import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View } from 'react-native';

export default class SideMenu extends Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }

    render() {
        return (
            <View>
                <ScrollView>
                    <View>
                        <Text >
                            Section 1
            </Text>
                        <View >
                            <Text onPress={this.navigateToScreen('Page1')}>
                                Page1
              </Text>
                        </View>
                    </View>
                    <View>
                        <Text >
                            Section 2
            </Text>
                        <View >
                            <Text onPress={this.navigateToScreen('Page2')}>
                                Page2
              </Text>
                            <Text onPress={this.navigateToScreen('Page3')}>
                                Page3
              </Text>
                        </View>
                    </View>
                </ScrollView>
                <View >
                    <Text>This is my fixed footer</Text>
                </View>
            </View>
        );
    }
}

