import { StatusBar } from 'expo-status-bar';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useEffect, useState} from "react";
import {Message} from './models'
import {SocketObject} from "./models";
import useMessages from "./hooks/use-messages";




export interface ChatState {
  messages: Message[];
}

export default function App() {

  const messages = useMessages()


  return (
    <SafeAreaView style={styles.container}>
        <Text>{messages.length}</Text>
        <FlatList
            style={{flex: 1}}
            keyExtractor={(item: Message) => item.id}
            data={messages}
            renderItem={({item}) => (
                 <Text style={{flex: 1}}>
                     {item.text}
                 </Text>
              )
          }/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
