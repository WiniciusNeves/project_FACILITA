import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const PoliticaTermos = () => {
  const navigation = useNavigation();

  const [checks, setChecks] = useState([false, false, false, false]);

  const toggleCheck = (index: number) => {
    if (index === 3) {
      const allChecked = !checks[3];
      setChecks([allChecked, allChecked, allChecked, allChecked]);
    } else {
      const newChecks = [...checks];
      newChecks[index] = !newChecks[index];
      newChecks[3] = newChecks[0] && newChecks[1] && newChecks[2];
      setChecks(newChecks);
    }
  };

  const handleNext = () => {
    navigation.navigate('AuthScreen');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Política e Termos</Text>
      <View style={styles.divider} />

      <Text style={styles.description}>
        Ao utilizar o aplicativo FACILITA, você concorda com os nossos Termos de
        Uso e nossa Política de Privacidade. Recomendamos que leia com atenção
        as informações a seguir.
        {'\n\n'}
        🔐 Coleta e Uso de Dados: Coletamos informações pessoais como nome,
        localização, CPF e dados de contato para conectar você a profissionais
        da sua região. Esses dados são usados exclusivamente para fins de
        atendimento e personalização da sua experiência.
        {'\n\n'}
        📍 Geolocalização: O aplicativo pode solicitar acesso à sua localização
        para mostrar profissionais próximos. Você pode ativar ou desativar essa
        permissão a qualquer momento nas configurações do seu dispositivo.
        {'\n\n'}
        📤 Compartilhamento de Dados: Seus dados não serão compartilhados com
        terceiros sem seu consentimento, exceto quando exigido por lei ou para
        garantir o funcionamento adequado do serviço.
        {'\n\n'}
        🔒 Segurança: Adotamos medidas técnicas e administrativas para proteger
        suas informações contra acessos não autorizados, vazamentos ou qualquer
        tipo de uso indevido.
        {'\n\n'}✅ Consentimento: Ao continuar, você declara estar ciente e de
        acordo com todas as condições apresentadas nesta Política. Caso tenha
        dúvidas, entre em contato com nossa equipe de suporte.
        {'\n\n'}A versão completa da nossa Política de Privacidade pode ser
        acessada em nosso site.
      </Text>

      {[
        'Li e concordo com os Termos de Uso e a Política de Privacidade',
        'Aceito o uso de meus dados para melhorar minha experiência no app',
        'Aceito receber notificações e atualizações importantes por e-mail',
        'Aceito tudo acima',
      ].map((text, i) => (
        <View style={styles.checkboxRow} key={i}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: 24,
              height: 24,
              borderRadius: 12,
              backgroundColor: checks[i] ? '#6C63FF' : '#fff',
              marginRight: 8,
              borderWidth: 2,
              borderColor: '#6C63FF',
            }}
            onTouchEnd={() => toggleCheck(i)}
          />

          <Text style={styles.checkboxText}>{text}</Text>
        </View>
      ))}

      <Button
        mode="contained"
        onPress={handleNext}
        style={[
          styles.button,
          {backgroundColor: checks[3] ? '#6C63FF' : '#ADA8F6'},
        ]}
        labelStyle={{color: '#fff'}}
        disabled={!checks[3]}>
        Próximo
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#f5f8ff',
    flexGrow: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 8,
  },
  divider: {
    height: 1,
    backgroundColor: '#aaa',
    marginBottom: 16,
  },
  description: {
    fontSize: 14,
    color: '#333',
    marginBottom: 20,
    lineHeight: 20,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  checkboxText: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    marginTop: 6,
  },
  button: {
    marginTop: 24,
    backgroundColor: '#6C63FF',
    borderRadius: 8,
    paddingVertical: 6,
  },
});

export default PoliticaTermos;
