import React, { useState } from 'react';
import {Alert, Text, View} from 'react-native';
import api from '../services/api';

const Advice = () => {

  const [advice, setAdvice] = useState(null);

  async function handleSearch(){
    try {
      const {status, data} = await api.get();
      console.log(data);

      if(status != 200 || data.console.error()){
        Alert.alert('Buscar', 'Conselho indisponível.')
      }else{
        setAdvice(data);
      }
    }catch{
      Alert.alert('Buscar', 'Conselho indisponível.')
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      
      <Text>Conselho do dia! 🎉</Text>
    </View>
  );
};



export default Advice;