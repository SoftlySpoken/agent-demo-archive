# 🎓 Lab Project Archive

Welcome to the Lab Project Archive repository! This site showcases our students' demo projects, codebases, and presentations. 

The site is built using **Astro**. To add your project to the archive, you do not need to write any complex code or modify the site layout. You simply need to upload your assets and submit a single Markdown file.

---

## 🛠 Prerequisites

Before you begin, ensure you have the following installed on your machine:

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (v18 or higher recommended)

---

## 📝 How to Submit Your Project

### Step 1: Clone the Repository and Create a Branch

Since this is a private repository, you do not need to fork it. Clone the repository directly to your local machine, and then create a new feature branch for your project submission:

```bash
git clone https://github.com/SoftlySpoken/agent-demo-archive
cd agent-demo-archive
git checkout -b feature/your-name-project
npm install
```

### Step 2: Add Your Assets (Images, Slides, Code)

Place your project's static assets into the corresponding subdirectories inside the `public/` folder.

- **Thumbnail:** `public/images/your-project-name.jpg` (Keep under 1MB)
- **Slides:** `public/slides/your-project-name.pdf`
- **Code (if local):** `public/code/your-project-name.zip`

**⚠️ Important GitHub Limitation:** GitHub strictly blocks files larger than 100MB. Please host large demo videos externally (e.g., YouTube or [the lab's shared Google Drive directory](https://drive.google.com/drive/folders/1mS_nqDG8o29WlQ-03PquUVxWTeu19uNv?usp=sharing)) and link to them.

### Step 3: Create Your Markdown File

Navigate to the `src/content/projects/` directory and create a new Markdown file for your project (e.g., `your-project-name.md`).

Copy and paste the following template into your file and fill in your specific details:

YAML

```
---
title: "Your Project Title"
description: "A concise, 1-2 sentence description of what your project does."
thumbnail: "/images/your-project-name.jpg"
links:
  code: "[https://github.com/your-username/repo](https://github.com/your-username/repo)" # Or local path: "/code/project.zip"
  slides: "/slides/your-project-name.pdf"
  video: "[https://youtube.com/](https://youtube.com/)..."
  live_demo: "[https://your-demo.vercel.app](https://your-demo.vercel.app)" # Or local address: "http://localhost:5000" # Use the port your app runs on in the lab
---
```

Note: If your file is at the `public/xxx/yyy` path, please specify it as `/xxx/yyy` in the Markdown file to comply with Astro conventions.

### 🔒 How Live Demo Links are Handled

You can submit either a publicly hosted link (like Vercel, Render, or Hugging Face) or a private lab/localhost link (like `http://localhost:5000` or `http://192.168.x.x`).

- **If you submit a Public URL:** Your demo button will be visible to everyone on the public internet portfolio.
- **If you submit a Private/Local URL:** The site will automatically detect this. Your demo button will be **hidden** on the public internet for security, but it will appear when visitors are viewing the archive on the lab's secure internal network.

Public hosting options for live demos:

| **Platform**            | **Best Used For**                 | **Free Tier Drawbacks**          | **Setup Difficulty** |
| ----------------------- | --------------------------------- | -------------------------------- | -------------------- |
| **Netlify / Vercel**    | Frontend only (React, HTML/JS)    | None (very generous)             | Very Low             |
| **Hugging Face Spaces** | Python AI/ML (Gradio, Streamlit)  | CPU-only (no free GPUs)          | Low                  |
| **Render**              | Full-stack, Node.js, Python Flask | Instances sleep after inactivity | Medium               |

### Step 4: Test Your Submission Locally

To make sure your project card looks correct, start the local development server:

Bash

```
npm run dev
```

Open `http://localhost:4321` in your browser.

**Testing the Link Logic:** By default, the local dev server acts like the public website (private IPs are hidden; public URLs are shown). To test how your card looks on the lab's internal server (where *all* demo buttons are shown), stop the server (`Ctrl+C`) and run:

Bash

```
# Mac/Linux:
PUBLIC_SHOW_LIVE_DEMOS=false npm run dev

# Windows (Command Prompt):
set PUBLIC_SHOW_LIVE_DEMOS=false && npm run dev

# Windows (PowerShell):
$env:PUBLIC_SHOW_LIVE_DEMOS="false"; npm run dev
```

### Step 5: Submit a Pull Request

Once you are happy with how your project card looks, you'll need to push your branch to the remote repository and open a PR:

1. Stage and commit your changes:

    Bash

    ```
    git add .
    git commit -m "Add [Your Project Name] to the archive"
    ```

2. Push your feature branch to the remote repository:

    Bash

    ```
    git push origin feature/your-name-project
    ```

3. Navigate to the repository on GitHub. You should see a prompt to **"Compare & pull request"**. Click it, and open a Pull Request against the `main` branch.

The lab manager will review your PR and merge it into the live site.
