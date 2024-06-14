import { useEffect, useState } from 'react';
import { ITasksProps } from 'types/tasks';
import { deleteTodo, todoListService } from 'services/api';

interface useTasksProps {
  tasks: ITasksProps[];
  deleteTask: (taskId: string) => void;
}

const useTasks = (): useTasksProps => {
  const [tasks, setTasks] = useState<ITasksProps[]>([]);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const tasksData = await todoListService();
        setTasks(tasksData);
      } catch (error) {
        console.error('Erro ao carregar lista de tarefas:', error);
      }
    };

    loadTasks();
  }, []);

  const deleteTask = async (taskId: string) => {
    try {
      await deleteTodo(taskId);
      const tasksData = await todoListService();
      setTasks(tasksData);
    } catch (error) {
      console.log('Error ao deletar a tarefa', error);
    }
  };

  return { tasks, deleteTask };
};

export default useTasks;
