# IOET technical test

## instructionsinstructions
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



##solution overview

To finish this challenging challenge I divided the problem into three parts.

-first import the .txt and separate each employee into an array element

-then separate each string into an object I have its key the name of the employee and its value an array with an element for each day of the week and within this, an array with the hours worked separated in minutes


-Finally, I compare the array of all the employees in each position and for each coincidence, an accumulator adds the coincidences, which I then transform into hours and minutes and show on the screen.




