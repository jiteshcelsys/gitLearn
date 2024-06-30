name : Deployment Exercise
on: push
jobs: 
  deploy:
    runs-on: ubuntu-latest
    steps:
    //this ensure that code is download in the runner machine
      - name: Get Code
        uses: actions/checkout@v3
    // this allow the execution of the command in the shell .ci we are using to install the exact version.
      - name: Install dependencies
        run: npm ci 
    // lint script in the package.json will be executed by this command
      - name: Lint
        run: npm run lint
    // tesing the code
      - name: Test code
        run: npm run test  
    // for building the code
      - name: Build code
        run: npm run build  
    // As of now we are not having deployment process because that will required hosting provider for that.
      - name: Deploy code 
        run: echo "Deploying ..." 

 
 
