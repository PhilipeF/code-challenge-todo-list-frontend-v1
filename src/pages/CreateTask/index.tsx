import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { DescriptionTasks, NewTaskForm } from './styles';
import { Titulo } from 'pages/TaskList/styles';
import { Container } from 'app/App.styles';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { addTodo } from 'services/api';
import useTasks from 'hooks/useTasks';

export const CreateTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { validateTask } = useTasks();

  const onNewTasks = { title, description };

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (validateTask(onNewTasks)) {
      try {
        await addTodo(onNewTasks);
        alert(
          'Nova tarefa adicionada com sucesso. Por favor, verifique a lista de tarefas.'
        );

        setTitle('');
        setDescription('');
      } catch (error) {
        console.error('Erro ao adicionar tarefa:', error);
        alert('Ocorreu um erro ao adicionar a tarefa. Tente novamente.');
      }
    }
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  function onChangeDescription(event: ChangeEvent<HTMLTextAreaElement>) {
    setDescription(event.target.value);
  }

  return (
    <>
      <Titulo>Crie uma nova tarefa</Titulo>
      <Container>
        <NewTaskForm onSubmit={handleSubmit}>
          <input
            placeholder="Adicione o título da tarefa"
            onChange={onChangeTitle}
            value={title}
          />
          <DescriptionTasks
            placeholder="Adicione a descrição para a tarefa"
            rows={10}
            cols={70}
            value={description}
            onChange={onChangeDescription}
          />
          <div>
            <button type="submit">
              Criar
              <AiOutlinePlusCircle />
            </button>
            <Link to="/">
              <button> Lista de tarefas </button>
            </Link>
          </div>
        </NewTaskForm>
      </Container>
    </>
  );
};
