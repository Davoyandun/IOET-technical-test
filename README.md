# IOET technical test
![image](https://user-images.githubusercontent.com/70674906/150671942-3d351435-ec09-4228-b999-d799de216893.png)
![image](https://user-images.githubusercontent.com/70674906/150671965-f06c7bca-62a1-48ba-bca3-dd519e09897c.png)




## Instructions
1. Clone the repository on your local machine

2. Open your console and go to the /IOET-technical-test folder

3. Run the command 
```bash
npm install
``` 
inside said folder

4. Remove comment slashes (//),
from lines 67 and 68 inside ./src/index.js
![image](https://user-images.githubusercontent.com/70674906/150670955-b9eabdc5-a6c3-42ce-9fbd-69a1d712d4d7.png)

5. Go to the src folder with your console and run the command
```bash
node index.js
``` 

6. Next, you will be able to see a table with the requested information on your console.



## Solution overview

To finish this challenging challenge I divided the problem into three parts.

- first import the .txt and separate each employee into an array element

- then separate each string into an object I have its key the name of the employee and its value an array with an element for each day of the week and within this, an array with the hours worked separated in minutes


- Finally, I compare the array of all the employees in each position and for each coincidence, an accumulator adds the coincidences, which I then transform into hours and minutes and show on the screen.

- To run the tests, inside the /IOET-technical-test folder run the command
```bash
npm run test
``` 
-   and you can see the results in the console

## Architecture
My project contemplates both the handling of hours, as well as minutes, and with small changes it could contemplate seconds
There is the utilities folder in which I included secondary functions.
The first tests were written before starting to develop the functionalities.
SOLID principles were used to maintain good practices.
The code is written in ES6, for a better understanding and update
The code has been written under the standards of the declarative programming paradigm



















