// 1. Data Storage: An Array of Objects
// This simulates a database. To permanently add work, add it to this list manually in the code.
let projects = [
    {
        title: "E-Commerce Website",
        tags: "HTML, CSS, JavaScript",
        img: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=500&q=60",
        description: "A fully responsive online store with cart functionality and product filtering.",
        link: "#"
    },
    {
        title: "Weather App",
        tags: "React, API, CSS",
        img: "https://images.unsplash.com/photo-1592210454359-9043f53db692?auto=format&fit=crop&w=500&q=60",
        description: "A real-time weather dashboard fetching data from the OpenWeather API.",
        link: "#"
    },
    {
        title: "Task Manager",
        tags: "Python, Django",
        img: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=500&q=60",
        description: "A productivity tool to manage daily tasks with drag-and-drop features.",
        link: "#"
    }
];

// 2. Function to Render Projects to HTML
const projectsContainer = document.getElementById('projects-container');

function renderProjects() {
    projectsContainer.innerHTML = ""; // Clear existing content

    projects.forEach((project, index) => {
        const card = document.createElement('div');
        card.classList.add('project-card');

        // Default image if none provided
        const imageSrc = project.img ? project.img : 'https://via.placeholder.com/400x200?text=No+Image';

        card.innerHTML = `
            <div class="card-img" style="background-image: url('${imageSrc}')"></div>
            <div class="card-content">
                <span class="card-tags">${project.tags}</span>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" target="_blank" class="card-link">View Project</a>
            </div>
        `;

        projectsContainer.appendChild(card);
    });
}

// Initial Render
renderProjects();

// 3. Handle "Upload" Form Submission
const form = document.getElementById('project-form');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Stop page reload

    // Get values from inputs
    const title = document.getElementById('p-title').value;
    const tags = document.getElementById('p-tags').value;
    const img = document.getElementById('p-img').value;
    const desc = document.getElementById('p-desc').value;
    const link = document.getElementById('p-link').value;

    // Create new project object
    const newProject = {
        title: title,
        tags: tags,
        img: img,
        description: desc,
        link: link
    };

    // Add to array (unshift adds to the top)
    projects.unshift(newProject);

    // Re-render the grid
    renderProjects();

    // Clear form and alert user
    form.reset();
    alert("Project added successfully! (Note: This will disappear if you refresh the page)");
});