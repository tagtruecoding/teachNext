import ProjectCard from './components/ProjectCard';

export default function Home() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>Hi, I'm Jane 👋</h1>
      <p>Welcome to my portfolio!</p>
      
      <h2>My Projects</h2>
      <ProjectCard 
        title="Awesome App" 
        description="A cool app built with Next.js"
      />
      <ProjectCard 
        title="Data Dashboard" 
        description="A dashboard built with React and Chart.js"
      />
    </main>
  );
}