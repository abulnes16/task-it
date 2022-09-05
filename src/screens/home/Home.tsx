import React from 'react';
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native';
import { Logo, TaskCard, TaskForm } from '../../components';
import { useTask } from '../../hooks';
import { FetchingState } from '../../models';
import { colors } from '../../theme';

const Home = () => {
  const { tasks, addTask, deleteTask, fetchingState } = useTask();

  return (
    <View style={styles.container}>
      <Logo />
      <TaskForm onSubmitTask={addTask} />
      {fetchingState === FetchingState.LOADING ? (
        <ActivityIndicator color={colors.primaryDark} size="large" />
      ) : fetchingState === FetchingState.SUCCESS ? (
        tasks.map((task, index) => (
          <TaskCard
            key={task.id}
            task={task}
            onDelete={() => deleteTask(task.id)}
            position={index}
          />
        ))
      ) : (
        <View>
          <Text>An error occurred reading the tasks </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default Home;
