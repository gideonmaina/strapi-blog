FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the application source code to the container
COPY . .

# Install application dependencies
RUN npm install

# Expose the default port
# Not: Strapi uses port 1337 by default
EXPOSE 1337

# Command to run your Node.js application when the container starts
CMD ["npm", "run", "dev"]