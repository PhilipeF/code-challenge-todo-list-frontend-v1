import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { TbClipboardText } from 'react-icons/tb';
import { ITasksProps } from 'types/tasks';
import {
  ContainerTodo,
  Titulo,
  Container,
  Todo,
  EmptyList,
  BtnCreateNewTask,
} from './styles';
import { Link } from 'react-router-dom';

interface TaskListProps {
  tasks: ITasksProps[];
  onDelete: (taskId: string) => void;
}

export const TaskList = ({ tasks, onDelete }: TaskListProps) => {
  return (
    <>
      <Titulo>Lista de tarefas</Titulo>
      <Container>
        <ContainerTodo>
          {tasks.map((t) => (
            <Todo key={t.id}>
              <div>
                <h3>Título:</h3>
                <p>{t.title}</p>
              </div>
              <div>
                <h3>Descrição:</h3>
                <p> {t.description}</p>
              </div>
              <button onClick={() => onDelete(t.id)} title="Excluir tarefa">
                <FaRegTrashAlt />
              </button>
            </Todo>
          ))}
          {tasks.length <= 0 && (
            <EmptyList>
              <TbClipboardText size={40} />
              <p>Você ainda não possui nenhuma tarefa cadastrada.</p>
              <span>
                Clique na barra azul logo abaixo para criar uma nova tarefa.
              </span>
            </EmptyList>
          )}
          <Link to="/create-task">
            <BtnCreateNewTask> Crie uma nova tarefa</BtnCreateNewTask>
          </Link>
        </ContainerTodo>
      </Container>
    </>
  );
};
