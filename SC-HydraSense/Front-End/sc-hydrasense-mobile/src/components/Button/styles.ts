import { StyleSheet } from 'react-native';
import { theme } from '../../global/themas';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    backgroundColor: theme.colors.critical, // vermelho principal do botão
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 20,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.5, // Dá um espacinho elegante entre as letras
  },
  // Criamos um estilo separado para quando o botão estiver desativado
  disabledContainer: {
    backgroundColor: '#94A3B8', // Fica cinza
    opacity: 0.7,
  }
});