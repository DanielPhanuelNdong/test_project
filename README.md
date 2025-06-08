
# Skip Selection App

This React-based application allows users to select the size of a skip (waste container)


## 🚀 Features

- Step-by-step progress bar (`StepProgress`)
- Dynamic skip selection maps (size, price, image)
- Selecting/Deselecting a Skip
- Warning message if a skip is not allowed on the road
- Summary bottom bar (price, continue button)
- Responsive design with horizontal scroll for the step bar


## 📁 Project structure

my-app/
├── public/
│   └── index.html
├── src/
│   ├── assets/              # Images
│   ├── components/          # Reusable Components
│   ├── pages/              # Main pages
│   ├── routes/             # Defining Application Routes
│   ├── services/           # Shared API calls
│   ├── styles/             # Global CSS/SASS files
│   ├── utils/              # Utility Functions
│   ├── App.jsx             # Root Component
│   └── main.jsx            # Entry point (with ReactDOM)
├── Dockerfile              # Instructions for building the Docker image
├── compose.yaml            # Docker Compose configuration to orchestrate multiple services
├── nginx.conf              # Nginx server configuration file
├── README.md               # Project documentation: how to install it, run it locally, useful commands, etc
├── .gitignore
├── package.json
└── vite.config.js          # ou webpack.config.js selon l'outil


## ⚙️ Installation & Launch

### Prerequisite

- Node.js >= 22
- npm ou yarn
- (Optional) Docker & Docker Compose


### Local Installation

```bash
# 1. Clone the project
git clone https://github.com/DanielPhanuelNdong/test_project
cd skip-selection-app

# 2. Installs dependencies
npm install
# or
yarn install

# 3. Launches the project
npm run dev
# or
yarn dev


### (Optional) Docker & Docker Compose

# 1. Build the image and Run the container
docker-compose up -d --build

# 2. Installs dependencies
docker exec -ti test-project sh
npm install
# or
yarn install
