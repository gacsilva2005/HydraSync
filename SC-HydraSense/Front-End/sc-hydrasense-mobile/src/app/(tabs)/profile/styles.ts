import { StyleSheet } from 'react-native';
import { theme } from '../../../global/themas';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContent: {
    paddingBottom: 20,
    flex: 1,
  },
  content: {
    padding: 20,
    marginTop: 10,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    width: '48%',
    padding: 15,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardLabel: {
    fontFamily: theme.fonts.bodyRegular,
    fontSize: 12,
    color: theme.colors.textLight,
  },
  cardValue: {
    fontFamily: theme.fonts.bodyBold,
    fontSize: 18,
    color: theme.colors.primary,
    marginTop: 5,
  },
  titleContainer: {
    paddingHorizontal: 20, // Alinha com o Header
    marginTop: 10,         // Espaço abaixo da barra preta
    marginBottom: 20,      // Espaço antes do parágrafo descritivo
  },
  titleLine: {
    fontSize: 48,                  // Tamanho gigante como no Figma
    fontFamily: theme.fonts.headingBold, // Usa sua fonte negrito definida
    color: theme.colors.textPrimary,              // Um preto quase puro para "O ESTADO"
    lineHeight: 50,                // Mantém as linhas próximas uma da outra
    textTransform: 'uppercase',    // Garante que fique tudo em maiúsculo
  },
  titleHighlight: {
    color: theme.colors.primary,   // Aplica o seu vermelho do HydraSense em "BASAL"
  },
  description: {
    paddingHorizontal: 20,         // Alinha com o título
    fontSize: 16,                  // Tamanho de leitura padrão
    fontFamily: theme.fonts.bodyRegular, // Fonte normal (não negrito)
    color: theme.colors.textBrown, // Aquele cinza que definimos no seu tema
    lineHeight: 24,                // Dá um "respiro" entre as linhas
    marginTop: 5,                  // Pequeno espaço após o título "BASAL"
    marginBottom: 30,              // Espaço maior antes de começar a próxima seção
  },
  inputContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  inputLabel: {
    fontFamily: theme.fonts.bodyBold,
    fontSize: 14,
    color: theme.colors.textBrown, // Um cinza médio para o rótulo
    marginBottom: 8,
  },
  inputValue: {
    fontFamily: theme.fonts.bodyBold,
    fontSize: 22, // Número grande e em destaque
    color: theme.colors.textSecondary, // Um cinza escuro para o valor
  },
  inputObservation: {
    fontFamily: theme.fonts.bodyRegular,
    fontSize: 10,
    color: theme.colors.primary, // Vermelho de destaque do HydraSense
    marginTop: 6,
    textTransform: 'uppercase',
  },
  genderContainer: {
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 30,
  },
  genderRow: {
    flexDirection: 'row',
    gap: 15, // Espaçamento entre os botões
    marginTop: 10,
  },
  genderButton: {
    flex: 1, // Faz os dois botões terem o mesmo tamanho
    height: 55,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  genderButtonSelected: {
    borderColor: theme.colors.primary, // Borda vermelha quando selecionado
    borderWidth: 2, // Um pouco mais grosso para destacar
  },
  genderText: {
    fontFamily: theme.fonts.bodyBold,
    fontSize: 14,
    color: theme.colors.textLight,
  },
  genderTextSelected: {
    color: theme.colors.primary, // Texto vermelho quando selecionado
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingRight:10,
    marginBottom: 20,
  },
  sectionTitle: {
    fontFamily: theme.fonts.headingBold,
    fontSize: 20,
    color: theme.colors.textPrimary,
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#fff',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    // Sombra leve para o botão de editar
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  editText: {
    fontFamily: theme.fonts.bodyBold,
    fontSize: 12,
    color: theme.colors.primary,
  },
  inputBox: {
    height: 65, // Aumentamos para acomodar a fonte maior com respiro
    borderRadius: 8,
    borderWidth: 1.5,
    overflow: 'hidden', // Garante que nada saia da borda arredondada
  },
  inputElement: {
    flex: 1,
    paddingHorizontal: 15,
    fontFamily: theme.fonts.bodyBold,
    fontSize: 26, // Letra grande e imponente para os dados fisiológicos
  },
  inputLocked: {
    backgroundColor: '#F0F0F0',
    borderColor: '#E0E0E0',
    color: '#666', // Texto um pouco mais suave quando travado
  },
  inputUnlocked: {
    backgroundColor: '#FFF',
    borderColor: theme.colors.primary,
    color: theme.colors.textPrimary,
  },
  photoSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 30,
    gap: 20,
  },
  photoContainer: {
    position: 'relative',
    width: 80,
    height: 80,
  },
  profilePhoto: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#E0E0E0',
    borderWidth: 2,
    borderColor: theme.colors.primary,
  },
  changePhotoButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: theme.colors.primary,
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: theme.colors.background,
  },
  photoTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  photoTitle: {
    fontFamily: theme.fonts.headingBold,
    fontSize: 18,
    color: theme.colors.textPrimary,
    textTransform: 'uppercase',
  },
  photoSubtitle: {
    fontFamily: theme.fonts.bodyRegular,
    fontSize: 12,
    color: theme.colors.textBrown,
    marginTop: 2,
  },
  nameInput: {
  borderBottomWidth: 1,
  borderBottomColor: theme.colors.primary, // Linha vermelha indicando edição
  paddingBottom: 2,
  minWidth: 150,
  },
  professionalContainer: {
  paddingHorizontal: 20,
  marginTop: 15,
  gap: 15, // Espaçamento entre os cards
},
infoCard: {
  backgroundColor: '#F5F5F5', // Fundo cinza claro indicando que é "travado"
  borderWidth: 1,
  borderColor: '#E0E0E0',
  borderRadius: 8,
  paddingVertical: 12,
  paddingHorizontal: 15,
},
infoLabel: {
  fontFamily: theme.fonts.bodyBold,
  fontSize: 12,
  color: theme.colors.textBrown, // Ou a cor primária, dependendo do destaque que deseja
  marginBottom: 4,
},
infoValue: {
  fontFamily: theme.fonts.headingBold,
  fontSize: 18,
  color: theme.colors.textPrimary,
  textTransform: 'uppercase',
},
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 40, 
    gap: 10,
    paddingVertical: 15,
  },
  logoutText: {
    fontFamily: theme.fonts.bodyBold,
    fontSize: 14,
    color: theme.colors.primary, 
    textTransform: 'uppercase',
    letterSpacing: 1, 
  },
});
