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
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { Screen } from '../components/Screen';
import { Divider } from '../components/Divider';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import { theme } from '../global/themas';
import { styles } from './styles';
import { router } from 'expo-router';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [carregando, setCarregando] = useState(false);

  const handleLogin = () => {
    const cleanEmail = email.trim();
    const cleanPassword = password.trim();

    if (!cleanEmail || !cleanPassword) {
      Alert.alert('Campos Obrigatórios', 'Por favor, preencha o seu e-mail e a sua senha para acessar o portal.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      Alert.alert('E-mail Inválido', 'Por favor, insira um formato de e-mail válido (ex: atleta@performance.com).');
      return;
    }

    console.log('Login validado com sucesso! Entrando com:', cleanEmail);
    router.replace('/(tabs)/dashboard');
  };

  return (
    <Screen bgImage={require('../../assets/images/saocamilo.jpg')}
      backgroundColor="#4A0E17">

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
        <Input
          label="E-mail"
          iconName="mail"
          placeholder="Digite seu e-mail do portal"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <Input
          label="Senha"
          placeholder="Sua senha de acesso"
          isPassword={true}
          value={password}
          onChangeText={setPassword}
        />

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
          <TouchableOpacity onPress={() => router.push('./esquecer_senha')}>
            <Text style={styles.forgotPassword}>ESQUECI MINHA SENHA</Text>
          </TouchableOpacity>
        </View>

        {/* Botão de Acesso */}
        <Button
          title="ACESSAR PORTAL"
          onPress={handleLogin}
        />

        {/* Divisor */}
        <Divider text="OU CONECTE VIA" />

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
            <Text onPress={() => router.push('./cadastro')} style={styles.footerLink}>Criar cadastro</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Screen>
  );
}