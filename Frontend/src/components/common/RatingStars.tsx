import React from "react";
import { View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";

interface RatingStarsProps {
  rating: number; // valor atual da avaliação (ex: 3.5)
  onChange?: (rating: number) => void; // se passado, torna o componente interativo
  maxStars?: number; // padrão: 5
  size?: number; // tamanho do ícone
  style?: any;
}

const STAR_COLOR = "#FFEA03";

const RatingStars: React.FC<RatingStarsProps> = ({
  rating,
  onChange,
  maxStars = 5,
  size = 28,
  style,
}) => {
  // Renderiza cada estrela (cheia, meia, vazia)
  const stars = [];
  for (let i = 1; i <= maxStars; i++) {
    let iconName = "star";
    let iconType = "regular";
    if (rating >= i) {
      iconType = "solid";
    } else if (rating >= i - 0.5) {
      iconName = "star-half-stroke";
      iconType = "solid";
    }
    const starIcon = (
      <Icon
        key={i}
        name={iconName}
        size={size}
        color={STAR_COLOR}
        solid={iconType === "solid"}
        style={{ marginHorizontal: 2 }}
      />
    );
    if (onChange) {
      stars.push(
        <TouchableOpacity
          key={i}
          onPress={() => onChange(i)}
          activeOpacity={0.7}
        >
          {starIcon}
        </TouchableOpacity>
      );
    } else {
      stars.push(starIcon);
    }
  }
  return <View style={[{ flexDirection: "row" }, style]}>{stars}</View>;
};

export default RatingStars;
