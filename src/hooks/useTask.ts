import { useState, useEffect } from 'react';
import { FetchingState, Task } from '../models';
import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TASKS_KEY } from '../constants';

const useTask = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [fetchingState, setFetchingState] = useState<FetchingState>(
    FetchingState.LOADING,
  );

  const fetchTasksInStorage = async () => {
    try {
      const tasksInStorage = await AsyncStorage.getItem(TASKS_KEY);
      if (tasksInStorage) {
        const convertedTasks = JSON.parse(tasksInStorage);
        setTasks(convertedTasks);
      }

      setFetchingState(FetchingState.SUCCESS);
    } catch (error) {
      console.log(error);
      setFetchingState(FetchingState.ERROR);
    }
  };

  useEffect(() => {
    fetchTasksInStorage();
  }, []);

  const addTask = (taskName: string) => {
    const newTasks: Task[] = [
      ...tasks,
      { name: taskName, id: uuid.v4().toString() },
    ];

    AsyncStorage.setItem(TASKS_KEY, JSON.stringify(newTasks));

    setTasks(newTasks);
  };

  const deleteTask = (id: string) => {
    const filteredTasks = tasks.filter(task => task.id !== id);
    AsyncStorage.setItem(TASKS_KEY, JSON.stringify(filteredTasks));
    setTasks(filteredTasks);
  };

  return { tasks, fetchingState, addTask, deleteTask, fetchTasksInStorage };
};

export default useTask;
