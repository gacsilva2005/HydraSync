import React from 'react';
import { 
  TouchableOpacity, 
  Text, 
  TouchableOpacityProps, 
  ActivityIndicator,
  StyleProp, // <-- 1. Importamos isso do react-native
  ViewStyle  // <-- 1. E isso também
} from 'react-native';
import { styles } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  isLoading?: boolean;
  // A tipagem '...rest' já tem o style embutido, mas declarar ele aqui deixa o código mais claro
}

export function Button({ 
  title, 
  isLoading = false, 
  style, // <-- 2. Puxamos o "style" para fora do ...rest
  ...rest 
}: ButtonProps) {
  
  return (
    <TouchableOpacity
      style={[
        styles.container, 
        (rest.disabled || isLoading) ? styles.disabledContainer : null,
        style // <-- 3. A MÁGICA: Colocamos o style customizado no final da lista!
      ]}
      activeOpacity={0.8}
      disabled={isLoading || rest.disabled}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator color="#FFFFFF" size="small" />
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}