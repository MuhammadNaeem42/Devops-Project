FROM node:14
# Set the working directory to /app inside the container
WORKDIR /app
# Copy app files
COPY package*.json ./
# ==== BUILD =====

RUN npm install
# Build the app

# ==== RUN =======
COPY . .
# Expose the port on which the app will be running (3000 is the default that `serve` uses)
EXPOSE 3000
# Start the app
CMD [ "npx", "serve", "build" ]