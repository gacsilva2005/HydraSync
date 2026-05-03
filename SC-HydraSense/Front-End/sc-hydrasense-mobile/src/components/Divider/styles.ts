import { StyleSheet } from 'react-native';
import { theme } from '../../global/themas'; // Ajuste o caminho se necessário

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.xl, // Puxei o seu espaçamento de 32 (xl)
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: theme.colors.border, // #E4E4E7 do seu tema
  },
  text: {
    color: theme.colors.textLight, // #C4C4CC do seu tema
    fontFamily: theme.fonts.bodyMedium,
    fontSize: 12,
    marginHorizontal: theme.spacing.md, // 16 de margem nas laterais
  },
});