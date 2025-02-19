type TaskProps = {
  title: string;
};

export function Task({ title }: TaskProps) {
  return <li>{title}</li>;
}
