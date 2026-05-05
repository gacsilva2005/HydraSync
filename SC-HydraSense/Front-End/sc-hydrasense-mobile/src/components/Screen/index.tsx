import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
  ImageBackground,
  ImageSourcePropType,
  ViewStyle
} from 'react-native';
import { styles } from './styles';

interface ScreenProps {
  children: React.ReactNode;
  HeaderComponent?: React.ReactNode; // <-- Nova prop para o Header Fixo
  scrollable?: boolean;
  bgImage?: ImageSourcePropType;
  style?: ViewStyle;
  backgroundColor?: string;
}

export function Screen({
  children,
  HeaderComponent, // Recebemos o componente fixo aqui
  scrollable = true,
  bgImage,
  style,
  backgroundColor = '#FFFFFF'
}: ScreenProps) {

  const content = scrollable ? (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      bounces={false}
      showsVerticalScrollIndicator={false}
      // Isso ajuda o teclado a não cobrir o input focado
      keyboardShouldPersistTaps="handled"
    >
      {children}
    </ScrollView>
  ) : (
    <View style={{ flex: 1 }}>{children}</View>
  );

  return (
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor }]}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined} // No Android, o 'undefined' deixa o SO gerenciar melhor
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}
    >
      {/* O HeaderComponent fica FORA do ScrollView para travar no topo */}
      {HeaderComponent && <View>{HeaderComponent}</View>}

      {bgImage ? (
        <ImageBackground
          source={bgImage}
          style={[styles.container, style]}
          imageStyle={{ opacity: 0.065 }}
        >
          {content}
        </ImageBackground>
      ) : (
        <View style={[styles.container, style]}>
          {content}
        </View>
      )}
    </KeyboardAvoidingView>
  );
}