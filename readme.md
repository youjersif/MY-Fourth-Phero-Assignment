1. What is the difference between getElementById,
getElementsByClassName, and querySelector / querySelectorAll?
Answer: For getting a html attribute by ID we use getElementById, also we use getElementsByClassName for getting a class.
Similarly, we use querySelector for getting and Id and querySelectorAll for getting a class , with querySelector we can reach the nodeList parent or its parent,parent.

2. How do you create and insert a new element into the DOM?
Answer: 1st i will create a viable and will get the element which want to add or remove class.Then i will write the variable name .classList.add()
for Example,  tabEl.classList.remove(...tabActive);
            tabEl.classList.add(...tabInactive);

3. What is Event Bubbling? And how does it work?
Answer: Event Bubbling is a way to  reaching the parent or ancestor of a html attribute. in a section if we have a section  and it has a div the div has an another div inside the div we have a p . through Bubbling if we select the p first and the .parent it will the 2nd div ,if we ask again it wil give us the 1st and then the section after the section it will show the html body then the html later that it will stop.
4. What is Event Delegation in JavaScript? Why is it useful?
Answer:Event Delegation is a design pattern in JavaScript where a single event listener is attached to a parent element to manage events for all its current and future child elements

5. What is the difference between preventDefault() and stopPropagation() methods?
Answer: preventDefault() is stops the browsers default behavior which is associated with event.
and stopPropagation() is stops the event for bubbling further through DOM. 
