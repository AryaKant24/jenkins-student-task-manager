# Assignment No: 6 

Assignment No: 6 

Title 

Jenkins Pipeline with Automated Testing for a Web Application 

Course Outcome (CO) Mapped: CO3 

Bloom's Taxonomy Level (BTL): L3 ~~—~~ Apply 

Hours: 02 

### 1. Aim 

To configure a Jenkins Pipeline for the Student Task Manager Web Application and integrate automated test scripts to ensure that the pipeline fails automatically when test cases fail. 

2. Problem Statement 

Create a Jenkins Pipeline for the Student Task Manager Web Application stored in GitHub. 

Define the CI workflow using a Jenkinsfile. Integrate pre ~~-~~ written automated test scripts into 

the pipeline and configure Jenkins to execute the tests automatically. 

The assignment should demonstrate: 

1. Creation of automated test scripts. 

2. Configuration ofa test command using npm. 

3. Creation of a Jenkinsfile. 

4. Creation of a Jenkins Pipeline Job. 

5. Integration of GitHub with Jenkins Pipeline. 

6. Automated dependency installation. 

7. Automated build execution. 

8. Automated test execution. 

9. Successful pipeline execution when all tests pass. 

10. Automatic pipeline failure when any test case fails. 

## 3. Learning Objectives 

- Upon successful completion of<sup>thisexperiment,studentswillbeableto:</sup> 

   - ¢ Understand Jenkins Pipeline. 

   - e Explain Pipeline as Code. 

   - ¢ Create a Jenkinsfile. 

   - ¢ Understand Jenkins Pipeline stages. 

   - e Integrate automated testing into a CI workflow. 

   - ¢ Execute tests automatically using Jenkins. 

P: ~~F-~~ LT ~~L-~~ UG /03/RO 

- e Analyze successful and failed pipeline executions. 

- ¢ Understand fail ~~-~~ fast behaviour in CI pipelines. 

### 4. Prerequisites 

Students should be familiar with: 

   - ¢ Git and GitHub. 

   - ¢ Jenkins fundamentals. 

   - ¢ Jenkins Freestyle Projects. 

   - ¢ Node.js and npm. 

   - e Basic JavaScript. 

   - ¢ Student Task Manager Web Application used in previous assignments. 

5. Software and Hardware Requirements 

#### Software 

- e Jenkins 

- e Java JDK supported by Jenkins 

- ° Git 

- ¢ Node.js and npm 

- ¢ GitHub Account 

- e Visual Studio Code 

- e Windows/ Linux Operating System 

### Hardware 

- ¢ Computer system with minimum 8 GB RAM recommended 

- ¢ Internet connectivity 

- ¢ Minimum 5 GB free disk space 

## 6. Theory 

## 6.1 Continuous Integration 

Continuous Integration (CI) is a DevOps practice in which developers frequently integrate 

source code changes into a shared repository. 

Each code change is automatically validated through build and testing processes. 

### Developer 

J 

#### Push Code 

J 

GitHub 

J 

P: ~~F-~~ LT ~~L-~~ UG /03/RO 

### CI Pipeline 

J 

Build 

J 

Automated Tests 

J 

## SUCCESS / FAILURE 

CI provides faster feedback and helps identify software defects at an early stage. 

### 6.2 Jenkins Pipeline 

A Jenkins Pipeline is a sequence of automated stages used to build, test, and deliver an application. 



<!-- Start of picture text -->
Example:<br>Checkout<br>J<br>Install<br>J<br>Build<br>J<br>Test<br>J<br>Pipeline Result<br><!-- End of picture text -->

Unlike a Freestyle Project, a Jenkins Pipeline can define the complete automation workflow 

as code. 

6.3 Pipeline as Code 

Pipeline as Code is the practice of defining the CI/CD workflow in a file stored with the 

application source code. 

In Jenkins, this file is called: 

Jenkinsfile 

The Jenkinsfile is stored in the GitHub repository. 

Benefits include: 

¢ Version ~~-c~~ ontrolled pipeline configuration. 

- ¢ Reusable CI/CD workflows. 

- e Easy modification and maintenance. 

- ¢ Better team collaboration. 

P: ~~F-~~ LT ~~L-~~ UG /03/RO 

¢ Consistent pipeline execution. 

The workflow is: 

GitHub Repository 



<!-- Start of picture text -->
|<br>|---- Application Code<br>|<br>|---- Test Scripts<br>|<br>|---- Jenkinsfile<br>J<br>Jenkins<br>‘<br>Execute Pipeline.<br>6.4 Jenkins Pipeline Stages<br>A Pipeline is divided into logical stages.<br>For this experiment:<br>Checkout<br>J<br>Install Dependencies<br>J<br>Build<br>J<br>Automated Testing<br>Checkout Stage<br>Retrieves the latest application source code from GitHub.<br><!-- End of picture text -->

### Install Dependencies Stage 

Executes: 

npm install 

This installs the dependencies defined in package.json. 

Build Stage 

Executes: 

npm run build 

The build script validates the application files. Test Stage 

P: ~~F-~~ LT ~~L-~~ UG /03/RO 

Executes: 

npm test 

The automated test scripts are executed. 

If any test fails, the command returns a non ~~-z~~ ero exit code and Jenkins marks the Pipeline as failed. 

## 6.5 Automated Testing 

Automated testing uses scripts to verify application behaviour automatically. 

For example, the Student Task Manager may require: 

Test 1 

Application file exists Test 2 

Public directory exists 

Test 3 

HTML page exists 

Instead of manually checking the files, an automated test script performs the validation. Example: 

const fs ~~=~~ require('fs'); const tests ~~=~~ [ ‘app.js’, ‘package.json’, ‘public/index.html' 

iF 

for (const file of tests) { 

if (!fs.existsSyne(file)) { 

console.error(°TEST FAILED: $ {file} not found’); process.exit(1); 

} 

console.log(* TEST PASSED: $<sup>{file}exists’);</sup> 

console.log(‘All automated tests passed.'); 

Save the file as: 

test.js 

6.6 npm Test Script 

The package.json file contains application scripts. 

P: ~~F-~~ LT ~~L-~~ UG /03/RO 

Configure: 

"scripts": { "start": "node app.js", "build": "node build.js", "test": "node test.js" } When Jenkins executes: npm test npm runs: node test.js 6.7 Test Pass and Test Failure When all test cases pass: 



<!-- Start of picture text -->
Test Execution<br>‘)<br>All Tests Passed<br>J<br>Exit Code 0<br>1<br>Jenkins Pipeline SUCCESS<br>Whena test case fails:<br>Test Execution<br>J<br>Test Failed<br>J<br>Exit Code 1<br>J<br><!-- End of picture text -->

Jenkins Pipeline FAILURE 

This ensures that defective application code does not continue through the CI workflow. 

6.8 Jenkinsfile 

A Declarative Jenkins Pipeline uses the following basic structure: 

pipeline { 

agent any stages { 

stage('Stage Name’) { 

P: ~~F-~~ LT ~~L-~~ UG /03/RO 



<!-- Start of picture text -->
steps {<br>// Commands<br>}<br>}<br>j<br>}<br>For the Student Task Manager:<br>pipeline {<br>agent any<br>stages {<br>stage('Checkout') {<br>steps {<br>checkout sem<br>}<br>}<br>stage(‘Install Dependencies’) {<br>steps {<br>bat 'npm install’<br>}<br>}<br>stage('Build’) {<br>steps {<br>bat 'npm run build'<br>j<br>}<br>stage('‘Automated Testing’) {<br>steps {<br>bat 'npm test!<br>}<br>}<br>}<br>}<br>For Linux - based Jenkins systems, use:<br>sh 'npm install’<br><!-- End of picture text -->

P: ~~F-~~ LT ~~L-~~ UG /03/RO 

sh 'npm run build! 

sh 'npm test! instead of bat. 

6.9 Fai ~~l-~~ Fast Behaviour 

A Jenkins Pipeline normally stops whena stage returns an error. Example: Checkout — SUCCESS Install — SUCCESS Build — SUCCESS Test — FAILURE Deployment _— NOT EXECUTED This behaviour prevents failed code from moving to later stages. In this assignment, the Pipeline should automatically fail when any automated test fails. 6.10 Freestyle Project vs Jenkins Pipeline 

Freestyle Project Jenkins Pipeline Configured mainly using Jenkins UI Defined using Jenkinsfile Suitable for simple Jobs Suitable for CI/CD workflows Limited workflow visibility Stage ~~-~~ based visualization Configuration stored in Jenkins Pipeline stored with source code Used in Assignment No. 3 Used in Assignment No. 6 

Jenkins Pipelines are commonly preferred for modern CI/CD workflows. 6.11 Jenkins Pipeline in Industry 

A typical industry CI/CD Pipeline may contain: Code Checkout J Dependency Installation J Build J Unit Testing J Code Quality Analysis 

J 

P: ~~F-~~ LT ~~L-~~ UG /03/RO 

Security Scanning 

J Docker Image Build J 

Container Registry 

J 

Kubernetes Deployment 

In this experiment, the Pipeline is limited to: 



<!-- Start of picture text -->
Checkout<br>J<br>Install<br>J<br>Build<br>J<br>Automated Testing<br>This provides the foundation for understanding larger CI/CD pipelines:<br>7. Procedure<br>Step 1: Open the Student Task Manager Project<br>Verify the project structure:<br>devops - tas k- manager<br>|<br>[~~ public<br>| L— index.html<br>|<br>}-—  app.js<br>| build.js<br>KE  test.js<br>fe  package.json<br><!-- End of picture text -->

~~L—~~ Jenkinsfile 

Step 2: Create the Automated Test Script 

Create: test.js Add: const fs ~~=~~ require('fs'); 

P: ~~F-~~ LT ~~L-~~ UG /03/RO 

const tests ~~=~~ [ ‘app.js', ‘package.json', ‘public/index.html' 

if 

console.log(‘Starting automated tests...'); 

for (const file of tests) { 

if (!fs.existsSync(file)) { console.error(°TEST FAILED: $ {file} not found’); 

process.exit(1); 

} 

console.log(’ TEST PASSED: $<sup>{file}exists’);</sup> 

console.log('All automated tests passed.'); 

Step 3: Configure the npm Test Command Modify package.json. "scripts": { "start": "node app.js", "build": "node build.js", 

"test": "node test.js" } 

Step 4: Execute Tests Locally 

Execute: 

npm test 

Expected output: 

TEST PASSED: app.js exists 

TEST PASSED: package.json exists 

TEST PASSED: public/index.html exists 

All automated tests passed. 

## Step 5: Create the Jenkinsfile 

Create: 

Jenkinsfile 

For Windows Jenkins: 

pipeline { 

P: ~~F-~~ LT ~~L-~~ UG /03/RO 



<!-- Start of picture text -->
agent any<br>stages {<br>stage('‘Checkout') {<br>steps {<br>checkout sem<br>}<br>}<br>stage('Install Dependencies’) {<br>steps {<br>bat 'npm install’<br>}<br>}<br>stage(Build’) {<br>steps {<br>bat 'npm run build’<br>}<br>}<br>stage(‘Automated Testing’) {<br>steps {<br>bat 'npm test!<br>j<br>}<br>}<br>}<br>For Linux Jenkins, replace bat with sh.<br>Step 6: Push the Files to GitHub<br><!-- End of picture text -->

Execute: 

git add . git commit ~~-~~ m "Add Jenkins pipeline and automated tests" git push origin main 

Verify that test.js and Jenkinsfile are available in the GitHub repository. Step 7: Create a Jenkins Pipeline Job Open the Jenkins Dashboard. Navigate to: 

P: ~~F-~~ LT ~~L-~~ UG /03/RO 



<!-- Start of picture text -->
New Item<br>J<br>Enter Job Name<br>J<br>Select Pipeline<br>J<br>OK<br>Job Name:<br>tas k- manager -p ipeline<br>Step 8: Configure Pipeline from GitHub<br>Navigate to the Pipeline section.<br>Select:<br>Pipeline Script from SCM<br>Configure:<br>SCM: Git<br>Repository URL: GitHub Repository URL<br>Branch: */main<br>Script Path: Jenkinsfile<br>Save the Job.<br>Step 9: Execute the Pipeline<br>Click:<br>Build Now<br>Jenkins executes:<br>Checkout<br>J<br>Install Dependencies<br>J<br>Build<br>J<br>Automated Testing<br>Verify that all stages complete successfully.<br>Step 10: Verify Successful Pipeline<br>Open the Console Output.<br>Expected:<br><!-- End of picture text -->

P: ~~F-~~ LT ~~L-~~ UG /03/RO 

TEST PASSED: app.js exists 

TEST PASSED: package.json exists 

TEST PASSED: public/index.html exists 

All automated tests passed. 

Finished: SUCCESS 

Step 11: Demonstrate Test Failure 

Temporarily rename: 

public/index.html 

to: 

public/index ~~-~~ old.html 

Commit and push the change: 

git add. 

git commit ~~-~~ m_ "Test pipeline failure" 

git push origin main 

Execute the Jenkins Pipeline again. 

Expected: 

TEST FAILED: public/index.html not found 

script returned exit code 1 

Finished: FAILURE 

Step 12: Restore the Application 

Restore: 

public/index.html 

Commit and push the corrected code. 

Execute the Pipeline again. 

Verify: 

Finished: SUCCESS 

8. Algorithm 

Algorithm: Jenkins Pipeline with Automated Testing 

1. Start. 

2. Open the Student Task Manager application. 

3. Create the automated test script. 

4. Define application test cases. 

5. Configure the npm test command. 

6. Execute the tests locally. 

P: ~~F-~~ LT ~~L-~~ UG /03/RO 

   7. Create the Jenkinsfile. 

   8. Define the Checkout stage. 

   9. Define the Install Dependencies stage. 

   10. Define the Build stage. 

   11. Define the Automated Testing stage. 

   12. Push the application and Jenkinsfile to GitHub. 

   13. Start Jenkins. 

   14. Create a Jenkins Pipeline Job. 

   15. Configure GitHub as the SCM. 

   16. Configure the Jenkinsfile as the Pipeline script. 

   17. Execute the Jenkins Pipeline. 

   18. Jenkins retrieves the application source code. 

   19. Jenkins installs the application dependencies. 

   20. Jenkins executes the application build. 

   21. Jenkins executes the automated tests. 

   22. Verify the Pipeline result. 

   23. Introduce a test failure. 

   24. Execute the Pipeline again. 

   25. Verify automatic Pipeline failure. 

   26. Restore the application. 

   27. Execute the Pipeline successfully. 

   28. Stop. 

9. Sample Input 

Jenkins Job Name 

tas ~~k-~~ manager ~~-p~~ ipeline 

Pipeline Stages 

Checkout 

Install Dependencies 

Build 

Automated Testing 

### Test Command 

npm test Test Files 

app.js 

P: ~~F-~~ LT ~~L-~~ UG /03/RO 

package.json 

public/index.html 

## 10. Sample Output 

Successful Pipeline 

Starting automated tests... 

TEST PASSED: app.js exists 

TEST PASSED: package.json exists 

TEST PASSED: public/index.html exists 

All automated tests passed. 

Finished: SUCCESS 

### Failed Pipeline 

Starting automated tests... 

TEST PASSED: app.js-exists 

TEST PASSED: package.json exists 

TEST FAILED: public/index.html not found 

script returned exit code 1 

Finished: FAILURE 

### 11. Outcome 

After completing this experiment, students will be able to: 

- ¢ Create a Jenkins Pipeline. 

- ¢ Understand Pipeline as Code. 

- ¢ Create and configtire a Jenkinsfile. 

- ¢ Define Jenkins Pipeline stages. 

- ¢ Integrate automated testing into a CI workflow. 

- e Execute automated tests using Jenkins. 

- e Analyze successful and failed Pipeline executions. 

- ¢ Understand automatic Pipeline failure when test cases fail. 

### 12. Viva Questions 

1. What is Continuous Integration? 

2. What is a Jenkins Pipeline? 

3. What is Pipeline as Code? 

4. What is a Jenkinsfile? 

5. Why is a Jenkinsfile stored in GitHub? 

6. What is a Pipeline stage? 

P: ~~F-~~ LT ~~L-~~ UG /03/RO 

