import React, {useState, useRef} from 'react';
import {View, TextInput} from 'react-native';

import {verifyEmailInputs} from '../../../shared/styles/auth';

interface EmailCodeInputProps {
  onComplete: (code: string) => void;
}

export default function EmailCodeInput({onComplete}: EmailCodeInputProps) {
  const [code, setCode] = useState(['', '', '', '']);
  const inputs = useRef<(TextInput | null)[]>([]);

  const handleChange = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < 3) {
      inputs.current[index + 1]?.focus();
    }

    if (newCode.every(digit => digit !== '')) {
      onComplete(newCode.join(''));
    }
  };

  return (
    <View style={verifyEmailInputs.base}>
      {code.map((_, index) => (
        <TextInput
          key={index}
          ref={ref => {
            inputs.current[index] = ref;
          }}
          style={verifyEmailInputs.input}
          keyboardType="number-pad"
          maxLength={1}
          onChangeText={text => handleChange(text, index)}
        />
      ))}
    </View>
  );
}
