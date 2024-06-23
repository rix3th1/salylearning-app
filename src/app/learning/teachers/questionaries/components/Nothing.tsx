interface IProps {
  complement: string;
}

export default function Nothing({ complement }: IProps) {
  return (
    <div className="text-center">
      <p>No hay cuestionarios {complement}.</p>
    </div>
  );
}
