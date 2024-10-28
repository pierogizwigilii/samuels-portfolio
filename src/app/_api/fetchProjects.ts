const fetchProjects = async () => {
  const response = await fetch("http://localhost:3000/api/projects");

  const json = await response.json();

  return json;
}

export default fetchProjects;