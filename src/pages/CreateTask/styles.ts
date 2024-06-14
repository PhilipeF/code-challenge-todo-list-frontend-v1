import styled from 'styled-components';

export const NewTaskForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.625rem;
  margin-top: 2.5rem;
  width: 100%;

  input {
    width: 100%;
    background: var(--gray-500);
    color: var(--gray-300);
    border-radius: 8px;
    border: 1px solid var(--gray-700);
    padding: 1rem;
    font-size: 1rem;
  }

  div {
    display: flex;
    gap: 1rem;
  }

  button {
    background: var(--blue-dark);
    color: var(--white);
    font-weight: 700;
    font-size: 1rem;
    border-radius: 8px;
    border: none;
    padding: 1rem 3rem;
    gap: 0.375rem;
    cursor: pointer;
    display: inline-flex;
    align-items: center;

    &:hover {
      background-color: var(--blue-light);
    }
  }
`;

export const DescriptionTasks = styled.textarea`
  background: var(--gray-500);
  color: var(--gray-300);
  border-radius: 8px;
  border: 1px solid var(--gray-700);
  padding: 1rem;
  font-size: 1rem;
  width: 100%;
  margin-bottom: 1.5rem;
`;
