import React from 'react';
import { Text, View } from 'react-native';

function TelaSobre({ navigation }) {

    const voltar = () => {
        navigation.goBack();
    }

    return (
        <View style={{flex: 1, backgroundColor: '248eff'}}>
            <Text>Sobre</Text>

            <text>
                Aplicativo com navegação em React que terá como objetivo resumir brevemente do que se trata Ordem Paranormal, com textos explicando seu conceito de uma forma
            simples e rápida.
            </text>
            <text>
                Lucas Vinícius Gabrielli - 2ºDSBB
            </text>
    </View>

    )
}

export default TelaSobre;