// Fetch projects.json and display dynamically
fetch('projects.json')
  .then(response => response.json())
  .then(projects => {
    const container = document.getElementById('projects');
    projects.forEach(project => {
      const div = document.createElement('div');
      div.className = 'project';
      div.innerHTML = `
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">View Project</a>
      `;
      container.appendChild(div);
    });
  })
  .catch(err => console.error('Error loading projects:', err));
