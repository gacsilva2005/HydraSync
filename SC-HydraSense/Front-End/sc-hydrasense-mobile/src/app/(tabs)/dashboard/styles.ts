import { StyleSheet } from 'react-native';

const COLORS = {
  background: '#F8F9FA',
  headerBg: '#121214',
  primary: '#D90429', // Vermelho Hydrasense
  textMain: '#121214',
  textSecondary: '#7C7C8A',
  cardLight: '#F3F4F6',
  white: '#FFFFFF',
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    backgroundColor: COLORS.headerBg,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 60, // Ajuste para SafeArea dependendo do device
    paddingBottom: 20,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarPlaceholder: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  headerLogoText: {
    color: COLORS.white,
    fontFamily: 'Inter_700Bold', // Usando as fontes do seu _layout
    fontSize: 14,
    letterSpacing: 2,
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  syncedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2A2A2A',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 16,
  },
  syncedText: {
    color: '#A0A0A0',
    fontSize: 10,
    fontFamily: 'Inter_700Bold',
    marginLeft: 6,
    letterSpacing: 1,
  },
  scrollContent: {
    padding: 24,
    paddingBottom: 40,
  },
  pageTitleContainer: {
    marginBottom: 24,
  },
  pageSubtitle: {
    color: COLORS.primary,
    fontFamily: 'Inter_700Bold',
    fontSize: 10,
    letterSpacing: 1,
    marginBottom: 4,
  },
  pageTitle: {
    color: COLORS.textMain,
    fontFamily: 'SpaceGrotesk_700Bold', // Assumindo que você usa SpaceGrotesk para títulos grandes
    fontSize: 28,
  },
  // ESTILOS COMPARTILHADOS DE CARDS
  cardWhite: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 24,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 2, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
  cardLight: {
    backgroundColor: COLORS.cardLight,
    borderRadius: 16,
    padding: 24,
    marginBottom: 16,
    position: 'relative',
  },
  cardTitleSmall: {
    fontFamily: 'Inter_700Bold',
    fontSize: 12,
    color: '#4A4A4A',
    letterSpacing: 0.5,
  },
  // CARD 1: ESTRATÉGIA
  cardHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    position: 'relative',
  },
  redDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: COLORS.primary,
    marginRight: 8,
  },
  bgIcon: {
    position: 'absolute',
    right: -10,
    top: -20,
    opacity: 0.5,
  },
  strategyText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 18,
    color: COLORS.textMain,
    lineHeight: 26,
    marginBottom: 24,
  },
  textHighlightRed: {
    color: COLORS.primary,
    fontFamily: 'Inter_700Bold',
  },
  strategyActionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnProtocol: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    marginRight: 16,
  },
  btnProtocolText: {
    color: COLORS.white,
    fontFamily: 'Inter_700Bold',
    fontSize: 12,
  },
  aiRecommendationText: {
    color: COLORS.textSecondary,
    fontFamily: 'Inter_500Medium',
    fontSize: 10,
    lineHeight: 14,
  },
  // CARD 2: HIDRATAÇÃO
  hydrationValueRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: 8,
    marginBottom: 12,
  },
  hydrationValue: {
    fontFamily: 'SpaceGrotesk_700Bold',
    fontSize: 48,
    color: COLORS.primary,
    lineHeight: 52,
  },
  hydrationUnit: {
    fontFamily: 'Inter_700Bold',
    fontSize: 20,
    color: COLORS.textMain,
    marginLeft: 4,
  },
  progressBarContainer: {
    height: 6,
    backgroundColor: '#E4E4E7',
    borderRadius: 3,
    marginBottom: 12,
  },
  progressBarFill: {
    height: 6,
    backgroundColor: COLORS.primary,
    borderRadius: 3,
  },
  cardSubText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: COLORS.textSecondary,
  },
  // CARD 3: ÚLTIMO TREINO
  lastWorkoutHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  dateText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 10,
    color: COLORS.textSecondary,
  },
  metricsRow: {
    flexDirection: 'column',
    gap: 24,
  },
  metricColumn: {
    flexDirection: 'column',
  },
  metricLabel: {
    fontFamily: 'Inter_700Bold',
    fontSize: 10,
    color: '#4A4A4A',
    marginBottom: 4,
  },
  metricValueRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 6,
  },
  metricValue: {
    fontFamily: 'SpaceGrotesk_700Bold',
    fontSize: 36,
    color: COLORS.textMain,
    lineHeight: 40,
  },
  metricUnit: {
    fontFamily: 'Inter_700Bold',
    fontSize: 16,
    color: COLORS.primary,
    marginLeft: 4,
  },
  tagGreen: {
    alignSelf: 'flex-start',
    backgroundColor: '#E6F4EA',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  tagGreenText: {
    color: '#1E8E3E',
    fontFamily: 'Inter_700Bold',
    fontSize: 9,
  },
  tagRed: {
    alignSelf: 'flex-start',
    backgroundColor: '#FCE7E9',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  tagRedText: {
    color: COLORS.primary,
    fontFamily: 'Inter_700Bold',
    fontSize: 9,
  },
  recoveryOverlay: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: COLORS.white,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    width: 100,
  },
  recoveryValue: {
    fontFamily: 'SpaceGrotesk_700Bold',
    fontSize: 20,
    color: COLORS.textMain,
    marginTop: 8,
  },
  recoveryLabel: {
    fontFamily: 'Inter_500Medium',
    fontSize: 9,
    color: COLORS.textSecondary,
    marginTop: 2,
  },
  // CARD 4: INSIGHTS
  cardInsights: {
    backgroundColor: COLORS.cardLight,
    borderRadius: 8,
    padding: 20,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.primary,
    marginBottom: 20,
  },
  insightsText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    color: COLORS.textSecondary,
    lineHeight: 20,
    marginTop: 12,
  },
  // TAGS E BOTÃO INFERIOR
  bottomTagsRow: {
    flexDirection: 'row',
    marginBottom: 24,
    gap: 8,
  },
  bottomTag: {
    backgroundColor: COLORS.cardLight,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
  },
  bottomTagText: {
    fontFamily: 'Inter_700Bold',
    fontSize: 10,
    color: COLORS.textMain,
  },
  btnStartSession: {
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 18,
    borderRadius: 8,
  },
  btnStartSessionText: {
    color: COLORS.white,
    fontFamily: 'Inter_700Bold',
    fontSize: 14,
    letterSpacing: 1,
  },
});