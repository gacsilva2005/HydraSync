import { StyleSheet } from 'react-native';
import { theme } from '../../global/themas'; // Ajuste o caminho se necessário

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',     // Não ocupa 100% da tela
    alignSelf: 'center', // Centraliza o componente
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  text: {
    paddingHorizontal: 10,
    color: '#999',
    fontFamily: theme.fonts.bodyRegular,
  },
});