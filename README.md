
# Skip Selection App

This React-based application allows users to select the size of a skip (waste container)


## ⚙️ Installation & Launch

### Prerequisite

- Node.js >= 22
- npm ou yarn
- (Optional) Docker & Docker Compose


### Local Installation

```bash
# 1. Clone the project
git clone https://github.com/phanuelndong/test_project
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

# 1. Build the image
docker-compose build

# 2. Run the container
docker-compose up

# 3. Installs dependencies
docker exec -ti test-project sh
npm install
# or
yarn install
