import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'native-base';

// Import the screens
import Login from '../screens/Login';
import Main from '../screens/Main';
import AddEntry from '../screens/AddEntry';
import SelectRecent from '../screens/SelectRecent';
import TodaysCharges from '../screens/TodaysCharges';

/*

export const ModalStack = StackNavigator({
  Main: {
    screen: Main
  },
  AddEntry: {
		screen: AddEntry
	},
  SelectRecent: {
    screen: SelectRecent
  }
}, {
    mode: 'modal',
	headerMode: 'none' // So no navigation bar pops up
});

export const Tabs = TabNavigator({
  Main: {  // First screen in code, so initial screen
    screen: ModalStack, // Nesting navigators
    navigationOptions: {  //This
      tabBarLabel: 'Main',  // Label below tab
      tabBarIcon: ({ tintColor }) => <Icon name='person' size={35} style={{ color: tintColor }} />
    },
  },
  TodaysCharges: {
    screen: TodaysCharges,
    navigationOptions: {
      tabBarLabel: 'Today\'s Charges',  // Label below tab
      tabBarIcon: ({ tintColor }) => <Icon name='timer' size={35} style={{ color: tintColor }} />
    },
  },
}, {
    headerMode: 'none'
});

export const Root = StackNavigator({ // This contains both the Tabs
  Login: {
    screen: Login
  },
  Tabs: {
    screen: Tabs
  }
}, {
  headerMode: 'none'
});

*/

export const Tabs = TabNavigator({
  Main: {  // First screen in code, so initial screen
    screen: Main, // Nesting navigators
    navigationOptions: {  //This
      tabBarLabel: 'Main',  // Label below tab
      tabBarIcon: ({ tintColor }) => <Icon name='person' size={35} style={{ color: tintColor }} />
    },
  },
  TodaysCharges: {
    screen: TodaysCharges,
    navigationOptions: {
      tabBarLabel: 'Today\'s Charges',  // Label below tab
      tabBarIcon: ({ tintColor }) => <Icon name='timer' size={35} style={{ color: tintColor }} />
    },
  },
}, {
    headerMode: 'none'
});

export const ModalStack = StackNavigator({
  Tabs: {
    screen: Tabs
  },
  AddEntry: {
		screen: AddEntry
	},
  SelectRecent: {
    screen: SelectRecent
  }
}, {
    mode: 'modal',
	headerMode: 'none' // So no navigation bar pops up
});

export const LoginStack = StackNavigator({ // This contains both the Tabs
  Login: {
    screen: Login
  },
  ModalStack: {
    screen: ModalStack
  }
}, {
  headerMode: 'none'
});
