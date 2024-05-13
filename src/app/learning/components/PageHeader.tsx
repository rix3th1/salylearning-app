interface IProps {
  title: string;
}

export default function PageHeader({ title }: IProps) {
  return (
    <header className="container">
      <div className="page-header">
        <h1>
          SALY LEARNING <small>{title}</small>
        </h1>
      </div>
    </header>
  );
}
