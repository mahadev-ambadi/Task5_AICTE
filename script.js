// --- 1. Dynamic Project Gallery ---

const allProjects = [
    { title: "E-commerce Site", category: "web", img: "APEX[ECOM].png" },
    { title: "Weather App", category: "mobile", img: "APEX[W].png" },
    { title: "Company Blog", category: "web", img: "APEX[CB].png" },
    { title: "Task Manager", category: "mobile", img: "APEX[T].png" },
    { title: "Portfolio Website", category: "web", img: "APEX[PO].png" }
];

const gallery = document.getElementById("project-gallery");
const filterButtons = document.querySelectorAll(".filter-btn");

// Function to display projects
function displayProjects(projects) {
    gallery.innerHTML = ""; // Clear existing projects
    projects.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");
        projectCard.innerHTML = `
            <img src="${project.img}" alt="${project.title}" loading="lazy">
            <h3>${project.title}</h3>
        `;
        gallery.appendChild(projectCard);
    });
}

// Add click event listeners to filter buttons
filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Handle active button style
        document.querySelector(".filter-btn.active").classList.remove("active");
        button.classList.add("active");

        // Filter projects
        const filter = button.dataset.filter;
        if (filter === "all") {
            displayProjects(allProjects);
        } else {
            const filteredProjects = allProjects.filter(p => p.category === filter);
            displayProjects(filteredProjects);
        }
    });
});

// Initial display of all projects on page load
displayProjects(allProjects);


// --- 2. Contact Form Validation ---

function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    // Check for empty fields
    if (name === "" || email === "" || message === "") {
        alert("Please fill out all required fields.");
        return false;
    }

    // Simple email format check
    let atPosition = email.indexOf("@");
    let dotPosition = email.lastIndexOf(".");
    
    if (atPosition < 1 || dotPosition < atPosition + 2 || dotPosition + 2 >= email.length) {
        alert("Invalid email format");
        return false;
    }

    // If all checks pass
    alert("Message sent successfully!");
    return true; // Allows the form to submit
}