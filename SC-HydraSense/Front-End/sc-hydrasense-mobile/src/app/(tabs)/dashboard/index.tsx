import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import { styles } from './styles';

export default function Dashboard() {
  // ==========================================
  // 1. ESTADOS (Suas "gavetas" de dados dinâmicos)
  // ==========================================
  
  const [hydrationLevel, setHydrationLevel] = useState(82);
  const [sweatRate, setSweatRate] = useState(1.2);
  const [waterBalance, setWaterBalance] = useState(-0.84);
  const [recoveryPercent, setRecoveryPercent] = useState(94);

  // ==========================================
  // 2. FUNÇÃO QUE VAI BUSCAR A API
  // ==========================================
  useEffect(() => {
    
    async function buscarDadosDaAPI() {
      try {
        
      } catch (error) {
      
      }
    }

    buscarDadosDaAPI();
  }, []); 


  // ==========================================
  // 3. SEU LAYOUT 
  // ==========================================
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121214" />

      {/* CABEÇALHO */}
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <View style={styles.avatarPlaceholder}>
            <FontAwesome5 name="user-alt" size={16} color="#FFF" />
          </View>
          <Text style={styles.headerLogoText}>HYDRASENSE</Text>
        </View>

        <View style={styles.headerActions}>
          <View style={styles.syncedBadge}>
            <Feather name="refresh-cw" size={10} color="#D90429" />
            <Text style={styles.syncedText}>SYNCED</Text>
          </View>
          <TouchableOpacity>
            <Feather name="settings" size={20} color="#FFF" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        <View style={styles.pageTitleContainer}>
          <Text style={styles.pageSubtitle}>CENTRAL DE COMANDO</Text>
          <Text style={styles.pageTitle}>STATUS DO ATLETA</Text>
        </View>

        {/* CARD 1: ESTRATÉGIA DO DIA (Você pode criar estados para a temperatura depois se quiser) */}
        <View style={styles.cardWhite}>
          <View style={styles.cardHeaderRow}>
            <View style={styles.redDot} />
            <Text style={styles.cardTitleSmall}>ESTRATÉGIA DO DIA</Text>
            <FontAwesome5 name="robot" size={40} color="#FCE7E9" style={styles.bgIcon} />
          </View>

          <Text style={styles.strategyText}>
            Clima a <Text style={styles.textHighlightRed}>32°C</Text>. Sua taxa de sudorese sobe <Text style={styles.textHighlightRed}>15%</Text> nesse calor. Prepare <Text style={styles.textHighlightRed}>1.5L</Text> de água.
          </Text>

          <View style={styles.strategyActionRow}>
            <TouchableOpacity style={styles.btnProtocol}>
              <Text style={styles.btnProtocolText}>VER PROTOCOLO</Text>
            </TouchableOpacity>
            <Text style={styles.aiRecommendationText}>RECOMENDAÇÃO{'\n'}BASEADA EM IA</Text>
          </View>
        </View>

        {/* CARD 2: NÍVEL DE HIDRATAÇÃO (DINÂMICO) */}
        <View style={styles.cardLight}>
          <Text style={styles.cardTitleSmall}>NÍVEL DE HIDRATAÇÃO</Text>
          <View style={styles.hydrationValueRow}>
            {/* AQUI A MÁGICA ACONTECE: Usando a variável ao invés de texto fixo */}
            <Text style={styles.hydrationValue}>{hydrationLevel}</Text>
            <Text style={styles.hydrationUnit}>%</Text>
          </View>
          
          <View style={styles.progressBarContainer}>
            {/* A barra de progresso também fica dinâmica baseada no estado! */}
            <View style={[styles.progressBarFill, { width: `${hydrationLevel}%` }]} />
          </View>
          <Text style={styles.cardSubText}>Otimizado para treino de alta intensidade em 2h.</Text>
        </View>

        {/* CARD 3: ÚLTIMO TREINO (DINÂMICO) */}
        <View style={styles.cardLight}>
          <View style={styles.lastWorkoutHeader}>
            <Text style={styles.cardTitleSmall}>ÚLTIMO TREINO</Text>
            <Text style={styles.dateText}>16 DE OUT, 08:30</Text>
          </View>

          <View style={styles.metricsRow}>
            <View style={styles.metricColumn}>
              <Text style={styles.metricLabel}>TAXA DE SUDORESE</Text>
              <View style={styles.metricValueRow}>
                {/* Variável dinâmica */}
                <Text style={styles.metricValue}>{sweatRate}</Text>
                <Text style={styles.metricUnit}>L/H</Text>
              </View>
              <View style={styles.tagGreen}>
                <Text style={styles.tagGreenText}>ZONA ALTA</Text>
              </View>
            </View>

            <View style={styles.metricColumn}>
              <Text style={styles.metricLabel}>BALANÇO HÍDRICO</Text>
              <View style={styles.metricValueRow}>
                {/* Variável dinâmica */}
                <Text style={styles.metricValue}>{waterBalance}</Text>
                <Text style={styles.metricUnit}>L</Text>
              </View>
              <View style={styles.tagRed}>
                <Text style={styles.tagRedText}>DÉFICIT CRÍTICO</Text>
              </View>
            </View>
          </View>

          {/* Overlay de Recuperação (DINÂMICO) */}
          <View style={styles.recoveryOverlay}>
            <FontAwesome5 name="bolt" size={20} color="#D90429" />
            <Text style={styles.recoveryValue}>{recoveryPercent}%</Text>
            <Text style={styles.recoveryLabel}>RECUPERAÇÃO</Text>
          </View>
        </View>

        {/* CARD 4: INSIGHTS */}
        <View style={styles.cardInsights}>
          <Text style={styles.cardTitleSmall}>INSIGHTS BIO-METABÓLICOS</Text>
          <Text style={styles.insightsText}>
            Sua retenção de sódio está acima da média histórica. Reduza a ingestão de eletrólitos artificiais na próxima hora para evitar saturação osmótica.
          </Text>
        </View>

        {/* TAGS INFERIORES */}
        <View style={styles.bottomTagsRow}>
          <View style={styles.bottomTag}>
            <Text style={styles.bottomTagText}>ELETRÓLITOS: ESTÁVEL</Text>
          </View>
          <View style={styles.bottomTag}>
            <Text style={styles.bottomTagText}>GLICOSE: 110MG/DL</Text>
          </View>
        </View>

        {/* BOTÃO INICIAR SESSÃO */}
        <TouchableOpacity style={styles.btnStartSession}>
          <FontAwesome5 name="play" size={16} color="#FFF" style={{ marginRight: 12 }} />
          <Text style={styles.btnStartSessionText}>INICIAR SESSÃO</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
}