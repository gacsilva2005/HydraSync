import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  KeyboardAvoidingView, 
  Platform, 
  ImageBackground,
  ScrollView,
  Alert
} from 'react-native';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import { styles } from './styles'; 
import { router } from 'expo-router';

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    // 1. Remove os espaços em branco do começo e do fim (caso o usuário digite sem querer)
    const cleanEmail = email.trim();

    // 2. Verifica se algum campo está vazio
    if (!cleanEmail) {
      Alert.alert('Campo Obrigatório', 'Por favor, informe seu e-mail para recuperar a senha.');
      return;
    }

    // 3. Verifica o formato do e-mail usando Regex (precisa ter texto, um @, texto, um ponto, texto)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      Alert.alert('E-mail Inválido', 'Insira um formato de e-mail válido.');
      return;
    }

    // Simulação de envio
    Alert.alert(
      'Solicitação Enviada', 
      'Se este e-mail estiver em nossa base, você receberá instruções para redefinir sua senha em instantes.',
      [{ text: 'OK', onPress: () => router.back() }]
    );
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ImageBackground
<<<<<<< HEAD
        source={require('../../assets/images/saocamilo.jpg')} 
=======
        source={require('../assets/images/saocamilo.jpg')} 
>>>>>>> develop
        style={styles.backgroundImage}
        imageStyle={{ opacity: 0.09 }} 
      >
        <ScrollView contentContainerStyle={styles.scrollContainer} bounces={false}>
          
          {/* Reaproveitando o Cabeçalho */}
          <View style={styles.headerSection}>
            <View style={styles.logoContainer}>
              <FontAwesome5 name="tint" size={16} color="#FFF" />
              <Text style={styles.logoText}>HYDRASENSE</Text>
            </View>

            <Text style={styles.mainTitle}>RECUPERAR</Text>
            <Text style={styles.subTitleHighlight}>ACESSO</Text>
            
            <Text style={styles.description}>
              Identifique-se para validar sua identidade{'\n'}
              e restaurar suas credenciais de performance.
            </Text>
          </View>

          {/* Card de Recuperação */}
          <View style={styles.bottomCard}>
            <TouchableOpacity 
                style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}
                onPress={() => router.back()}
            >
              <Feather name="arrow-left" size={20} color="#7C7C8A" />
              <Text style={{ color: '#7C7C8A', marginLeft: 8, fontWeight: '500' }}>VOLTAR AO LOGIN</Text>
            </TouchableOpacity>

            <Text style={styles.cardTitle}>ESQUECEU A SENHA?</Text>
            <Text style={styles.cardSubtitle}>
                Enviaremos um código de verificação para o seu e-mail cadastrado no laboratório.
            </Text>

            {/* Input de E-mail */}
            <Text style={styles.inputLabel}>ENDEREÇO DE E-MAIL CADASTRADO</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={[styles.input, {color:'#000'}]}
                placeholder="nome@performance.com"
                placeholderTextColor="#7C7C8A"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
              <Feather name="mail" size={20} color="#7C7C8A" />
            </View>

            {/* Botão de Enviar */}
            <TouchableOpacity 
              style={[styles.loginButton, { marginTop: 20 }]} 
              onPress={handleResetPassword}
            >
              <Text style={styles.loginButtonText}>ENVIAR</Text>
            </TouchableOpacity>

            <View style={[styles.footerRow, { marginTop: 30 }]}>
              <Text style={styles.footerText}>Problemas com o e-mail? </Text>
              <TouchableOpacity>
                <Text style={styles.footerLink}>Suporte Técnico</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground> 
    </KeyboardAvoidingView>
  );
}