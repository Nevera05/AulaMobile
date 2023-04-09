import React from 'react';
import { View, Button } from 'react-native';

export default function App() {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flexGrow: 1}}>
      <View style={{marginRight: 20}}>
        <Button title='/' />
        <Button title="7" />
        <Button title="4" />
        <Button title="1" />
      </View>
      <View style={{marginRight: 20}}>
        <Button title='+' />
        <Button title="8" />
        <Button title="5" />
        <Button title="2" />
      </View>
      <View>
        <Button title='*' />  
        <Button title="9" />
        <Button title="6" />
        <Button title="3" />
      </View>
    </View>
  );
}
