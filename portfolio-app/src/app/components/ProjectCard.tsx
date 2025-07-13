type Props = {
  title: string;
  description: string;
};

export default function ProjectCard({ title, description }: Props) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "10px",
      borderRadius: "8px",
      marginTop: "10px"
    }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}