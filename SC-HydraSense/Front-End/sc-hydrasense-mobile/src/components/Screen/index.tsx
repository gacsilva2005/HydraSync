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
  scrollable?: boolean;
  bgImage?: ImageSourcePropType;
  style?: ViewStyle;
  backgroundColor?: string; // <-- 1. Adicionamos a opção de cor de fundo
}

export function Screen({ 
  children, 
  scrollable = true, 
  bgImage, 
  style,
  backgroundColor = '#FFFFFF' // <-- 2. O padrão continua sendo branco, mas podemos mudar!
}: ScreenProps) {
  
  const content = scrollable ? (
    <ScrollView 
      contentContainerStyle={styles.scrollContainer} 
      bounces={false}
      showsVerticalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  ) : (
    <View style={{ flex: 1 }}>{children}</View>
  );

  return (
    <KeyboardAvoidingView
      // 3. A MÁGICA: Injetamos a cor de fundo dinâmica direto no container principal
      style={[styles.container, { backgroundColor }]} 
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
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