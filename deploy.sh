#!/bin/bash

# Build the project
echo "Building the project..."
npm run build

# Check if the build was successful
if [ $? -eq 0 ]; then
  echo "Build successful!"
  
  # Create a temporary branch for deployment
  echo "Creating deployment branch..."
  git checkout -b temp-deploy
  
  # Add the build output
  git add -f out/
  
  # Commit the changes
  git commit -m "Deploy to GitHub Pages"
  
  # Push to the gh-pages branch
  echo "Pushing to gh-pages branch..."
  git push origin temp-deploy:gh-pages --force
  
  # Switch back to the main branch
  git checkout main
  
  # Delete the temporary branch
  git branch -D temp-deploy
  
  echo "Deployment completed successfully!"
else
  echo "Build failed. Please check the errors above."
  exit 1
fi 