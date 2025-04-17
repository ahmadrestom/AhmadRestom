fetch('project.json')
    .then(response => response.json())
    .then(projects => {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        const project = projects[id];

        if (project) {
            document.title = project.title;
            const images = project.images.map(image => `<img src="${image}" alt="${project.title}" style="max-width:100%; border-radius:12px; margin-bottom:10px;">`).join('');
            const content = `
      <h1>${project.title}</h1>
      <div class="images">${images}</div>
      <h2>Overview</h2>
      <p>${project.description}</p>
      <h2>Technologies Used</h2>
      <ul>${project.tech.map(t => `<li>${t}</li>`).join('')}</ul>
      <h2>Key Features</h2>
      <ul>${project.features.map(f => `<li>${f}</li>`).join('')}</ul>
      <a href="${project.github}" class="btn">View on GitHub</a>
    `;
            document.getElementById('project-content').innerHTML = content;
        } else {
            document.getElementById('project-content').innerHTML = '<p style="color:red">Project not found.</p>';
        }
    })
    .catch(error => {
        console.error("Error loading project data:", error);
        document.getElementById('project-content').innerHTML = '<p style="color:red">Error loading project data.</p>';
    });