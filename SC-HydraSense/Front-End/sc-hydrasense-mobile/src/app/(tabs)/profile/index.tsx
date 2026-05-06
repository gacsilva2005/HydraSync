// src/app/(tabs)/profile/index.tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Screen } from '../../../components/Screen';
import { Header } from '../../../components/Header';
import { InputProfile } from '../../../components/InputProfile';
import { styles } from './styles';
import { theme } from '@/src/global/themas';
import MaterialCommunityIcons from '@expo/vector-icons/build/MaterialCommunityIcons';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';

export default function Profile() {
  const router = useRouter();
  const handleLogout = () => {
    // Aqui você limparia tokens de autenticação futuramente
    console.log("Sessão encerrada");
    router.replace('/'); // Caminho da sua tela de Login
  };
  const [isEditing, setIsEditing] = useState(false);
  // Altere para null no início
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const pickImage = async () => {
    // Pede permissão para acessar a galeria
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true, // Permite cortar a foto (ficar quadrada/redonda)
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri); // Atualiza a foto na tela
    }
  };
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState<'M' | 'F' | null>('M');
  const handleSave = () => {
    // Aqui entrará a integração com o Back-end futuramente
    console.log("Dados salvos:", { weight, height, age, gender });
    setIsEditing(false);
  };

  return (
    <Screen
      backgroundColor={theme.colors.background} // Usa a cor do seu tema
      scrollable={true} // Ativa o ScrollView interno da Screen
      HeaderComponent={<Header userPhoto={profileImage} />}
    >

      <View style={styles.mainContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleLine}>O ESTADO</Text>
          <Text style={[styles.titleLine, styles.titleHighlight]}>BASAL</Text>
        </View>

        <Text style={styles.description}>
          Gerencie seus parâmetros fisiológicos e equipamentos para cálculos precisos de taxa de suor.
        </Text>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>CONFIGURAÇÕES PESSOAIS</Text>
          <TouchableOpacity
            onPress={isEditing ? handleSave : () => setIsEditing(true)}
            style={styles.editButton}
          >
            <MaterialCommunityIcons
              name={isEditing ? "check-circle" : "pencil-circle"}
              size={24}
              color={isEditing ? "#27ae60" : theme.colors.primary}
            />
            <Text style={[styles.editText, isEditing && { color: "#27ae60" }]}>
              {isEditing ? "SALVAR" : "EDITAR"}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.photoSection}>
          <View style={styles.photoContainer}>
            <Image
              // Se não tiver profileImage, ele usa a logo local como fallback no corpo do perfil também
              source={profileImage ? { uri: profileImage } : require('../../../assets/images/logo.png')}
              style={styles.profilePhoto}
            />
            {isEditing && (
              <TouchableOpacity
                style={styles.changePhotoButton}
                onPress={pickImage}
              >
                <MaterialCommunityIcons name="camera-flip" size={20} color="#FFF" />
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.photoTextContainer}>
            <Text style={styles.photoTitle}>FOTO DE PERFIL</Text>
            <Text style={styles.photoSubtitle}>
              {isEditing ? "Toque no ícone para alterar" : "Clique em EDITAR para mudar"}
            </Text>
          </View>
        </View>

        <InputProfile
          label="PESO ATUAL (KG)"
          value={weight}
          onChangeText={setWeight}
          editable={isEditing}
          placeholder='Ex: 70'
          observation="USE SEMPRE A MESMA BALANÇA"
          // Passamos o estilo consolidado
          style={isEditing ? styles.inputUnlocked : styles.inputLocked}
        />

        <InputProfile
          label="ALTURA (CM)"
          value={height}
          onChangeText={setHeight}
          editable={isEditing}
          placeholder="Ex: 170"
          style={isEditing ? styles.inputUnlocked : styles.inputLocked}
        />

        <InputProfile
          label="IDADE"
          value={age}
          onChangeText={setAge}
          editable={isEditing}
          placeholder="Ex: 30"
          style={isEditing ? styles.inputUnlocked : styles.inputLocked}
        />

        {/* Seção de Gênero com feedback visual de bloqueio */}
        <View style={[styles.genderContainer, !isEditing && { opacity: 0.5 }]}>
          <Text style={styles.inputLabel}>SEXO BIOLÓGICO</Text>
          <View style={styles.genderRow}>
            <TouchableOpacity
              disabled={!isEditing}
              style={[styles.genderButton, gender === 'M' && styles.genderButtonSelected]}
              onPress={() => setGender('M')}
            >
              <Text style={[styles.genderText, gender === 'M' && styles.genderTextSelected]}>
                MASCULINO
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              disabled={!isEditing}
              style={[styles.genderButton, gender === 'F' && styles.genderButtonSelected]}
              onPress={() => setGender('F')}
            >
              <Text style={[styles.genderText, gender === 'F' && styles.genderTextSelected]}>
                FEMININO
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={handleLogout}
          activeOpacity={0.7}
        >
          <MaterialCommunityIcons
            name="logout-variant"
            size={22}
            color={theme.colors.primary}
            opacity={0.5}
          />
          <Text style={styles.logoutText}>ENCERRAR SESSÃO</Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
}