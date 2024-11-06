FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy the application files into the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install
ENV PORT 8080
EXPOSE 8080
# Define the entry point for the container
CMD ["npm", "start"]