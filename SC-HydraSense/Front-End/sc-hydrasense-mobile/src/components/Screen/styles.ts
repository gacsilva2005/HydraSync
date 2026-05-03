import { StyleSheet } from 'react-native';
import { theme } from '../../global/themas';

export const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa a tela inteira
    
  },
  scrollContainer: {
    flexGrow: 1, // Garante que o scroll estique até o final da tela
  }
});