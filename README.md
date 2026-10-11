# Student Task Manager Jenkins Assignment

This guide explains how to demonstrate the Jenkins CI assignment on another
machine. Follow the steps in order.

The project demonstrates this pipeline:

```text
Checkout -> Install Dependencies -> Build -> Automated Testing
```

The application is intentionally basic. The purpose of this project is to
demonstrate Jenkins Pipeline as Code and automatic pipeline failure when tests
fail.

## 1. Prerequisites

Install the following software on the demonstration machine:

- Git
- Node.js and npm
- Java JDK supported by the selected Jenkins version
- Jenkins
- A GitHub account

The machine also requires internet access.

Verify Git and Node.js before continuing:

```powershell
git --version
node --version
npm --version
java --version
```

If any command is not recognized, install the missing software and restart the
terminal. On Windows, Jenkins must also be able to find Git, Node.js, npm, and
Java in its system `PATH`.

## 2. Get the project from GitHub

Create or use the GitHub repository containing this project. Copy its HTTPS
repository URL, then clone it:

```powershell
git clone https://github.com/<your-username>/student-task-manager.git
cd student-task-manager
```

Replace `<your-username>` and the repository name with the actual values.

For an existing local copy, open a terminal in the project directory instead:

```powershell
cd D:\path\to\student-task-manager
```

The project directory must contain:

```text
Jenkinsfile
package.json
package-lock.json
app.js
build.js
test.js
public\index.html
public\app.js
public\style.css
```

## 3. Verify the project locally

Run the same commands that Jenkins will run:

```powershell
npm install
npm run build
npm test
```

The test command should finish with:

```text
All automated tests passed.
```

Optionally start the application:

```powershell
npm start
```

Open `http://localhost:3000` in a browser. Add a task and mark it as
completed. Stop the server with `Ctrl+C`.

## 4. Start and configure Jenkins

Start Jenkins and open it in a browser. The default local address is:

```text
http://localhost:8080
```

Complete the initial Jenkins setup and install the suggested plugins. Confirm
that Jenkins is running before creating the job.

### Windows Jenkins service check

If Jenkins is running as a Windows service, the service account must be able
to access Git, Node.js, npm, and Java. If Jenkins cannot find a command that
works in a normal terminal, add the relevant installation directories to the
system `PATH`, restart the Jenkins service, and try again.

## 5. Configure GitHub credentials in Jenkins

If the GitHub repository is public, credentials may not be required.

For a private repository:

1. Create a GitHub personal access token with the minimum repository access
   required to clone the repository.
2. In Jenkins, open:

   ```text
   Manage Jenkins -> Credentials
   ```

3. Add the token as a Git username/password or appropriate GitHub credential.
4. Remember the credential ID or name for the pipeline configuration.

Never put a GitHub token, password, or other secret in the `Jenkinsfile`.

## 6. Create the Jenkins Pipeline job

1. From the Jenkins dashboard, select **New Item**.
2. Enter this job name:

   ```text
   student-task-manager-pipeline
   ```

3. Select **Pipeline**.
4. Select **OK**.
5. Scroll to the **Pipeline** section.
6. Set **Definition** to:

   ```text
   Pipeline script from SCM
   ```

7. Set **SCM** to **Git**.
8. Enter the GitHub repository HTTPS URL.
9. Select the GitHub credential if the repository is private.
10. Set **Branch Specifier** to:

    ```text
    */main
    ```

11. Set **Script Path** to:

    ```text
    Jenkinsfile
    ```

12. Select **Save**.

The `Jenkinsfile` must be in the root of the repository. Do not paste a
different pipeline script into Jenkins; the purpose of this assignment is to
use Pipeline as Code from GitHub.

## 7. Run the successful pipeline

1. Open the `student-task-manager-pipeline` job.
2. Select **Build Now**.
3. Open the new build.
4. Select **Console Output**.

Verify that these stages complete successfully:

```text
Checkout
Install Dependencies
Build
Automated Testing
```

The console should include output similar to:

```text
Build completed successfully.
Starting automated tests...
TEST PASSED: app.js exists
TEST PASSED: package.json exists
TEST PASSED: public\index.html exists
All automated tests passed.
Finished: SUCCESS
```

The exact path separator may be `/` on Linux and `\` on Windows.

## 8. Demonstrate automatic pipeline failure

This step intentionally breaks a required test condition.

On the development machine, temporarily rename the HTML file:

```powershell
Rename-Item public\index.html index.html.backup
```

Commit and push the change:

```powershell
git add public/index.html
git commit -m "Demonstrate pipeline test failure"
git push origin main
```

Run **Build Now** in Jenkins again. The **Automated Testing** stage should
fail, and the later stages should not execute.

Expected output includes:

```text
TEST FAILED: public\index.html not found
Finished: FAILURE
```

This proves that the test script returns exit code `1` and Jenkins fails the
pipeline automatically.

## 9. Restore the application

Restore the missing file:

```powershell
Rename-Item index.html.backup public\index.html
```

Commit and push the correction:

```powershell
git add public/index.html
git commit -m "Restore application entry page"
git push origin main
```

Run the Jenkins job again. Verify that all stages pass and the final result
is:

```text
Finished: SUCCESS
```

## 10. Collect assignment evidence

Capture screenshots or save console output showing:

1. The GitHub repository and project files.
2. The Jenkins Pipeline job configuration.
3. A successful pipeline with all four stages.
4. Successful `npm test` output.
5. The failed pipeline after `public/index.html` was removed.
6. The `TEST FAILED` message and `Finished: FAILURE`.
7. The final successful pipeline after restoring the file.

## 11. Troubleshooting

### Jenkins cannot clone the repository

- Confirm the repository URL is correct.
- Confirm the branch is `main`.
- Add or select the correct GitHub credential.
- Check the Jenkins console output for the exact Git error.

### `npm` is not recognized by Jenkins

- Confirm Node.js is installed.
- Add Node.js to the system `PATH`.
- Restart the Jenkins service after changing `PATH`.
- Verify the Jenkins agent is using the intended machine.

### The pipeline fails during `npm install`

- Run `npm install` locally in the project directory.
- Confirm that `package.json` and `package-lock.json` are committed.
- Check the Jenkins machine's internet connection.

### The pipeline cannot run `bat`

The supplied `Jenkinsfile` automatically uses `bat` on Windows and `sh` on
Unix-like systems. Confirm that the Jenkins agent is running on the expected
operating system and that the agent is online.

### The test fails unexpectedly

Confirm that the following files exist with the exact names and locations:

```text
app.js
package.json
public\index.html
public\app.js
```

Run this locally to reproduce the Jenkins test:

```powershell
npm test
```
