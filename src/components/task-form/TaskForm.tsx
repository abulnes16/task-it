import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { colors } from '../../theme';

interface TaskFormProps {
  onSubmitTask: (name: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmitTask }) => {
  const [taskName, setTaskName] = useState('');

  const onSubmit = () => {
    if (taskName.trim() === '') {
      Alert.alert('Empty task', "The task name can't be empty");
      return;
    }

    onSubmitTask(taskName);
  };

  return (
    <View style={styles.formContainer}>
      <View style={styles.inputContainer}>
        <Icon name="create-outline" color={colors.primary} size={30} />
        <TextInput
          style={styles.input}
          onChangeText={text => setTaskName(text)}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>Add task</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  inputContainer: {
    minWidth: 200,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.primaryDark,
  },
  input: {
    minWidth: 160,
  },
  button: {
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 100,
    minHeight: 30,
    borderRadius: 12,
    padding: 10,
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'white',
  },
});

export default TaskForm;
