import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './styles';

interface HeaderProps {
  userPhoto?: string | null; // Adicione o | null aqui
}

export function Header({ userPhoto }: HeaderProps) {
  // Se existir userPhoto (URI da galeria), usamos ela. 
  // Caso contrário, carregamos o arquivo local logo.png.
  const imageSource = userPhoto 
    ? { uri: userPhoto } 
    : require('../../assets/images/logo.png');

  return (
    <View style={styles.container}>
      <View style={styles.userArea}>
        <Image 
          source={imageSource} 
          style={styles.avatar} 
        />
        <Text style={styles.title}>HYDRASENSE</Text>
      </View>

      <TouchableOpacity activeOpacity={0.7}>
        <MaterialCommunityIcons name="cog-outline" size={24} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
}