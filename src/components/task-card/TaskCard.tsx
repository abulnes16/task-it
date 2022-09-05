import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Task } from '../../models';
import { colors } from '../../theme';
import TouchableIcon from '../touchable-icon/TouchableIcon';

interface TaskCardProps {
  task: Task;
  onDelete: () => void;
  position: number;
}

const TaskCard: React.FC<TaskCardProps> = ({
  task = { name: 'Task # 1', id: '1' },
  onDelete,
  position = 0,
}) => {
  const cardColor =
    position % 2 === 0
      ? { background: styles.cardPrimary, button: colors.primaryDark }
      : { background: styles.cardPrimaryDark, button: 'white' };

  return (
    <View style={[styles.card, cardColor.background]}>
      <View>
        <Text style={styles.cardText}>{task.name}</Text>
      </View>
      <TouchableIcon
        onPress={onDelete}
        name="close-circle-outline"
        color={cardColor.button}
        size={30}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginVertical: 5,
  },
  cardText: {
    color: 'white',
    fontSize: 18,
  },
  cardPrimary: {
    backgroundColor: colors.primary,
  },
  cardPrimaryDark: {
    backgroundColor: colors.primaryDark,
  },
});

export default TaskCard;
