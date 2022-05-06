import React from 'react';

import { Text, View } from 'react-native';

import { FeedbackTypes, feedbackTypes } from '../../utils/feedbackTypes';
import { Copyright } from '../Copyright';
import { Option } from '../Option';
import { styles } from './styles';

interface OptionsProps {
  onFeedbackTypeChanged: (feedbackType: FeedbackTypes) => void;
}

export function Options({ onFeedbackTypeChanged }: OptionsProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deixe seu feedback</Text>

      <View style={styles.options}>
        {Object.entries(feedbackTypes).map(([key, { title, image }]) => (
          <Option
            key={key}
            title={title}
            image={image}
            onPress={() => onFeedbackTypeChanged(key as FeedbackTypes)}
          />
        ))}
      </View>

      <Copyright />
    </View>
  );
}
