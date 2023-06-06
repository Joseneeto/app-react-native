import React, { useEffect, useState } from 'react';
import {Alert, Text, View} from 'react-native';
import api from '../services/api';

const Advice = () => {

  const [advice, setAdvice] = useState([]);

  useEffect(() =>{

    api.get().then(({data}) =>{
      setAdvice(data);
      console.log(data);
    })

  }, [])

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      
      <Text>Conselho do dia! 🎉</Text>

      {Array.isArray(advice) && advice.length > 0 ? (
      advice.map((item) => <Text key={item.id}>{item.slip.advice}</Text>)
    ) : (
      <Text>Nenhum conselho disponível.</Text>
    )}
    </View>
  );
};



export default Advice;