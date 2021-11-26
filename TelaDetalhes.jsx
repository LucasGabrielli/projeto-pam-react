import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

function TelaDetalhes({ navigation }) {

    const voltar = () => {
        navigation.goBack();
    }

    return (
        <View style={{flex: 1, backgroundColor: '20b2aa'}}>

        
        
            <Text>Detalhes</Text>
           <Text>Ordem Paranormal é um universo de investigação paranormal criado por Rafael Lange (Cellbit), que teve seu início através de campanhas de RPG de mesa 
            em transmissões ao vivo na Twitch. Um jogo da saga, Ordem Paranormal: Enigma do Medo, tem previsão de lançamento para junho de 2022.</Text>
           <Text> A série "A Ordem Paranormal" se passa em um universo onde existem duas dimensões: o Normal e o Paranormal. O Normal é onde nós vivemos como humanos, 
            enquanto o Paranormal é um lugar completamente diferente, onde tudo que parece impossível pode se tornar real, o que normalmente estaria associado a 
            espíritos, demônios, entre outros tipos de anormalidades ligadas ao pós vida, por exemplo.</Text>
            <Text> Esses dois locais são divididos por uma camada chamada de Membrana, que impede que o Normal e o Paranormal entrem em contato. No entanto, essa Membrana 
            pode se enfraquecer com o aumento do medo do sobrenatural, levando monstros horrendos e muito perigosos a invadirem nossa realidade. Esse fenômeno geralmente
             ocorre em locais bem específicos, propensos à percepção de medo, como hospitais abandonados, casas antigas e sanatórios desativados.</Text>
            <Text> Ao redor do mundo inteiro diversos grupos se formaram, buscando enfraquecer a Membrana o máximo possível, a fim de destruí-la e levar à fusão das dimensões, 
            com o objetivo de buscar seus próprios desejos ou, quem sabe, cumprindo um propósito maior. Os membros desses grupos são chamados de Ocultistas (nessa época, 
            Esoterroristas).</Text>
            <Text> Para impedir que o caos se instale, uma organização global secreta foi criada: a Ordo Realitas ("Ordem da Realidade", nessa época chamada de Ordo Veritatis, 
            "Ordem da Verdade"). Pessoas comuns que vivem vidas duplas para impedir os atos Ocultistas, que têm como objetivo o aumento do contato entre a população com 
            o paranormal, aumentando seu medo e, consequentemente, enfraquecendo a membrana e permitindo a interferência do paranormal.</Text>
    </View>

    )
}
export default TelaDetalhes;