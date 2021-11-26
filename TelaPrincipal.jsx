import React from 'react';
import { Text, View } from 'react-native';

function TelaPrincipal({ navigation }) {

    const TelaSobre = () => {
        navigation.navigate('TelaSobre')
    }
    const TelaDetalhes = () => {
        navigation.navigate('TelaDetalhes')
    }

    return (
        <View style={{flex: 1, backgroundColor: '20b2aa'}}>
         
                <Text>Projeto PAM sobre Ordem Paranormal</Text>
               
            </View>

        
    )
}

export default TelaPrincipal;