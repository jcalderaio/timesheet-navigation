import React, { Component } from 'react';
import { Image, Platform, Alert } from 'react-native';
import { Container, Content, Button, Text, Grid, Header, Left, Right, Body, Title, View } from 'native-base';
import moment from 'moment';
import { SimpleLineIcons } from '@expo/vector-icons';

import { CardSection } from '../components/CardSection';
import { Card } from '../components/Card';

export default class Main extends Component {
  render() {
    const { navigate, goBack, state } = this.props.navigation;

    return (
      <Container>

          {/* Header */}
          <Header
            style={styles.headerStyle}
          >
            <Left>
              {/*Logout button with option to cancel*/}
              <Button
                transparent
                onPress={() => Alert.alert(
                  'Logout?',
                   ' ',
                   [
                     { text: 'Cancel', onPress: () => console.log('Cancel Pressed!') },
                     { text: 'OK', onPress: () => goBack(null) },
                   ]
                )}
              >
                 <SimpleLineIcons name='logout' color='#FFF' size={21.5} />

              </Button>
            </Left>

            <Body>
              <Title style={styles.headerTextStyle}>Main</Title>
            </Body>

            <Right />

          </Header>
          {/*End Header*/}

          {/*Body*/}
          <Content>

              {/*Banner Image at top of screen*/}
              <View style={styles.imageStyle.imageOuter}>
                <Image
                  style={styles.imageStyle.imageInner}
                  source={require('../img/banner.png')}
                  resizeMode="contain"
                />
              </View>

              <Card>
                <CardSection>
                  <Grid style={{ justifyContent: 'center', padding: 10 }}>
                    <Text>Timesheet for {global.employee_info.First_Name} {global.employee_info.Last_Name}</Text>
                  </Grid>
                </CardSection>

                <CardSection>
                  <Grid style={{ justifyContent: 'center', padding: 10 }}>
                    <Text>
                      <Text style={{ fontWeight: 'bold' }}>Today's Date: </Text> {moment().format('dddd, MMMM D, YYYY')}
                    </Text>
                  </Grid>
                </CardSection>

                <CardSection>
                  <Grid style={{ justifyContent: 'center', padding: 10 }}>
                    <Text>
                      Hours charged today: <Text style={{ fontWeight: 'bold' }}>9</Text>
                    </Text>
                  </Grid>
                </CardSection>

                <CardSection>
                  <Grid style={{ justifyContent: 'center', padding: 10 }}>
                    <Text style={{ color: 'red', fontWeight: 'bold' }}>
                      Warning! Excessive hours today!
                    </Text>
                  </Grid>
                </CardSection>
              </Card>

              <Button
      					block
      					onPress={() => navigate('AddEntry')}
      					style={styles.addEntryButton}
			    >
					    <Text>Add Entry</Text>
			        </Button>

              <Button
        				block
        				onPress={() => navigate('SelectRecent')}
        				style={styles.selectRecentButton}
				      >
					        <Text>Select Recent</Text>
				      </Button>

          </Content>
      </Container>
    );
  }
}

const styles = {
    headerStyle: {
  		backgroundColor: 'red'
  	},
  	headerTextStyle: {
  		color: '#FFF'
  	},
    imageStyle: {
      imageOuter: {
        flexDirection: 'row'
      },
      imageInner: {
        flexShrink: 1,
        marginTop: (Platform.OS === 'ios') ? -18 : -16
      }
    },
    addEntryButton: {
      backgroundColor: '#007aff',
      marginHorizontal: 20,
  		marginTop: 60,
  		shadowColor: '#000',
  		shadowOffset: { width: 0, height: 2 },
  		shadowOpacity: 0.3,
  		shadowRadius: 2
    },
    selectRecentButton: {
      backgroundColor: '#007aff',
      marginHorizontal: 20,
  		marginTop: 25,
  		shadowColor: '#000',
  		shadowOffset: { width: 0, height: 2 },
  		shadowOpacity: 0.3,
  		shadowRadius: 2
    }
};
