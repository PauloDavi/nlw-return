import React from 'react';

import {
  ImageProps,
  Text,
  TouchableOpacityProps,
  TouchableOpacity,
  Image,
} from 'react-native';

import { styles } from './styles';

interface OptionProps extends TouchableOpacityProps {
  title: string;
  image: ImageProps;
}

export function Option({ title, image, ...restProps }: OptionProps) {
  return (
    <TouchableOpacity style={styles.container} {...restProps}>
      <Image source={image} style={styles.image} />

      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
