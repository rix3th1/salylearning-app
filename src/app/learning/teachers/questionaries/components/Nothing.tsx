interface IProps {
  type: string;
}

export default function Nothing({ type }: IProps) {
  return (
    <div className="text-center">
      <p>No hay cuestionarios {type}.</p>
    </div>
  );
}
