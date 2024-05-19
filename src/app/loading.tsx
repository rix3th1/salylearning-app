import "./loading.css";

export default function LoadingPage() {
  return (
    <div className="loader-container">
      <div className="loader">
        {Array.from({ length: 4 }, (_, i) => (
          <span key={i} />
        ))}
      </div>
    </div>
  );
}
