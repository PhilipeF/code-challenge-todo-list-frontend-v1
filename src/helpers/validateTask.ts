interface validateTaskProps {
  title: string;
  description: string;
}

export const validateTask = (task: validateTaskProps): boolean => {
  if (!task.title.trim() || !task.description.trim()) {
    return false;
  }
  return true;
};
