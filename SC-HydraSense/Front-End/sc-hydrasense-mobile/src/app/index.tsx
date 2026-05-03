// src/app/index.tsx
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
import Checkbox from 'expo-checkbox';
import { theme } from '../global/themas';
import  { styles } from './styles';
import { router } from 'expo-router';

export default function LoginScreen() {
  // Estados para capturar o que o usuário digita
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

 const handleLogin = () => {
    // 1. Remove os espaços em branco do começo e do fim (caso o usuário digite sem querer)
    const cleanEmail = email.trim();
    const cleanPassword = password.trim();

    // 2. Verifica se algum campo está vazio
    if (!cleanEmail || !cleanPassword) {
      Alert.alert('Campos Obrigatórios', 'Por favor, preencha o seu e-mail e a sua senha para acessar o portal.');
      return; // O "return" faz a função parar aqui e não avançar
    }

    // 3. Verifica o formato do e-mail usando Regex (precisa ter texto, um @, texto, um ponto, texto)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      Alert.alert('E-mail Inválido', 'Por favor, insira um formato de e-mail válido (ex: atleta@performance.com).');
      return;
    }

    // 4. Se passou por todas as barreiras acima, o login é válido!
    console.log('Login validado com sucesso! Entrando com:', cleanEmail);
    
    // Avança para o Dashboard
<<<<<<< HEAD
    router.replace('./dashboard'); 
=======
    router.replace('/(tabs)/dashboard');
>>>>>>> develop
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
      
        {/* === CABEÇALHO ESCURO === */}
        <View style={styles.headerSection}>
          <View style={styles.logoContainer}>
            <FontAwesome5 name="tint" size={16} color="#FFF" />
            <Text style={styles.logoText}>HYDRASENSE</Text>
          </View>

          <Text style={styles.mainTitle}>PRECISÃO</Text>
          <Text style={styles.subTitleHighlight}>BIOMÉTRICA</Text>
          
          <Text style={styles.description}>
            Acesse o laboratório cinético de alta{'\n'}
            performance e monitore sua evolução{'\n'}
            em tempo real.
          </Text>

          <View style={styles.partnerContainer}>
            <Text style={styles.partnerLabel}>PARCEIRO OFICIAL</Text>
            <Text style={styles.partnerName}>HOSPITAL</Text>
            <Text style={styles.partnerName}>SÃO CAMILO</Text>
          </View>
        </View>

        {/* === CARD BRANCO DE LOGIN === */}
        <View style={styles.bottomCard}>
          <Text style={styles.cardTitle}>ACESSO AO PORTAL</Text>
          <Text style={styles.cardSubtitle}>Insira suas credenciais técnicas para autenticação.</Text>

          {/* Input de E-mail */}
          <Text style={styles.inputLabel}>ENDEREÇO DE E-MAIL</Text>
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

          {/* Input de Senha */}
          <Text style={styles.inputLabel}>SENHA DE ACESSO</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, {color:'#000'}]}
              placeholder="••••••••"
              placeholderTextColor="#7C7C8A"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Feather name={showPassword ? "eye-off" : "eye"} size={20} color="#7C7C8A" />
            </TouchableOpacity>
          </View>

          {/* Opções (Lembrar / Esqueci a senha) */}
          <View style={styles.optionsRow}>
            <View style={styles.checkboxContainer}>
              <Checkbox
                value={rememberMe}
                onValueChange={setRememberMe}
                color={rememberMe ? theme.colors.primary : '#4A4A4A'}
                style={styles.checkbox}
              />
              <Text style={styles.checkboxLabel}>Lembrar sessão</Text>
            </View>
<<<<<<< HEAD
            <TouchableOpacity onPress={() => router.push('/esquecer_senha')}>
=======
            <TouchableOpacity onPress={() => router.push('./esquecer_senha')}>
>>>>>>> develop
              <Text style={styles.forgotPassword}>ESQUECI MINHA SENHA</Text>
            </TouchableOpacity>
          </View>

          {/* Botão de Acesso */}
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>ACESSAR PORTAL</Text>
          </TouchableOpacity>

          {/* Divisor */}
          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>OU CONECTE VIA</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Botões Sociais */}
          <View style={styles.socialRow}>
            <TouchableOpacity style={styles.socialButton}>
              <FontAwesome5 name="google" size={18} color="#DB4437" />
              <Text style={styles.socialButtonText}>Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <FontAwesome5 name="apple" size={18} color="#000" />
              <Text style={styles.socialButtonText}>Apple</Text>
            </TouchableOpacity>
          </View>

          {/* Rodapé */}
          <View style={styles.footerRow}>
            <Text style={styles.footerText}>Novo no HydroPerform? </Text>
            <TouchableOpacity>
              <Text style={styles.footerLink}>Solicitar acesso ao lab</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      </ImageBackground> 
    </KeyboardAvoidingView>
  );
}

