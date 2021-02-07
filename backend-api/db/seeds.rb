f1 = Flashcard.create(category: "Reactjs", question: "How do you access a function fetch() from a h1 element in JSX?", correct_answer: "<h1>{fetch()}</h1>", incorrect_answers: ["<h1>${fetch()}</h1>", "<h1>{fetch}</h1>", "
  <h1>${fetch}</h1>"] )

f2 = Flashcard.create(category: "Reactjs", question: "Which lifecyle method in a React Component should you override to stop the component from updating?", correct_answer: "shouldComponentUpdate", incorrect_answers: ["
  willComponentUpdate", "componentDidUpdate", "componentDidMount"])

f3 = Flashcard.create(category: "Reactjs", question: "What's used to pass data to a component from outside?", correct_answer: "props", incorrect_answers: ["setState", "render with arguements", "PropTypes"])

f4 = Flashcard.create(category: "Reactjs", question: "Which lifecycle method in a React Comompnent is called after the component is rendered for the first time?", correct_answer: "componentDidMount", incorrect_answers: ["componentDidUpdate", "componentMounted", "componentUpdated"])

f5 = Flashcard.create(category: "Reactjs", question: "Which of the following is correct syntax for a button click event handler, foo?", correct_answer: "<button onClick={this.foo}>", incorrect_answers: ["<button onclick={this.foo()}>", "
  <button onclick={this.foo}>", "<button onClick={this.foo()}>"])

f6 = Flashcard.create(category: "Reactjs", question: "What happens when you call setState() inside render() method?", correct_answer: "ininite loop", incorrect_answers: ["Repetitive output appears on the screen", "Duplicate key error", "None of the above"])

f7 = Flashcard.create(category: "Reactjs", question: "How do you write an inline style specifying the font-size:12px and color:red; in JSX", correct_answer: "style={{fontSize:'12px',color:'red'}}", incorrect_answers: ["style={{font-size:12,color:'red'}}
", "style={fontSize:'12px',color:'red'}", "style={{font-size:12px,color:'red'}}"])

f8 = Flashcard.create(category: "Reactjs", question: "What is used in ReactJs to increase performance?", correct_answer: "Virtual DOM", incorrect_answers: ["DOM", "COM", "HTML"])

f9 = Flashcard.create(category: "Reactjs", question: "Which of the following below act as the input of a class-based component? ", correct_answer: "props", incorrect_answers: ["class", "factory", "render"])

f10 = Flashcard.create(category: "Reactjs", question: "What is the declarative way to render a dynamic list of components based on values in an array ", correct_answer: "Using the Array.map() method", incorrect_answers: ["Using the reduce array method", "Using a for loop", "Using a while loop"])

f11 = Flashcard.create(category: "Reactjs", question: "What is ReactJs?", correct_answer: "A library for building interaction interfaces", incorrect_answers: ["Server side framework", "Client side framework", "A language"])

f12 = Flashcard.create(category: "Reactjs", question: "Who develop react.js?", correct_answer: "Facebook", incorrect_answers: ["Microsoft", "Twitter", "Google"])

f13 = Flashcard.create(category: "Reactjs", question: "Name the function used to change the state of react component ", correct_answer: "this.setState", incorrect_answers: ["this.setChangeState", "this.State{}", "this.State()"])

f14 = Flashcard.create(category: "Reactjs", question: "What is state in react? ", correct_answer: "Internal storage of the component", incorrect_answers: ["A permanent storage", "A global storage for the application", "A particular condition that someone or something is in at a specific time"])

f15 = Flashcard.create(category: "Reactjs", question: "Everything in react is?", correct_answer: "Component", incorrect_answers: ["Model", "Method", "Package"])

f16 = Flashcard.create(category: "Reactjs", question: "What will happen if you render an input element with disabled = {false}", correct_answer: "It will be rendered as enabled", incorrect_answers: ["It will be rendered as disabled", "It will not be rendered at all", "It will throw an error"])

f17 = Flashcard.create(category: "Reactjs", question: "React component can return how many components?", correct_answer: "Multiple", incorrect_answers: ["One", "Two", "Three"])

# Funny Random

fr1 = Flashcard.create(category: "Funny", question: "What is the color of aircraft black boxes?", correct_answer: "Bright orange color", incorrect_answers: ["Bright red color", "Bright yellow color", "None of the above"])
fr2 = Flashcard.create(category: "Funny", question: "Do goldfish really have a memory of 3 seconds?", correct_answer: "No", incorrect_answers: ["Yes", "Sometimes", "None of the above"])
fr3 = Flashcard.create(category: "Funny", question: "In which place it is illegal to catch mice?", correct_answer: "Ohio", incorrect_answers: ["Hawaii", "Alaska", "Texas"])
fr4 = Flashcard.create(category: "Funny", question: "A group of ravens is known as?", correct_answer: "Unkindness", incorrect_answers: ["Brood", "Mischief", "Drift"])
fr5 = Flashcard.create(category: "Funny", question: "What kind of animal is known as jackrabbit?", correct_answer: "Hare", incorrect_answers: ["Rabbit", "Pika", "Patagonian Mara"])
fr6 = Flashcard.create(category: "Funny", question: "Which is the main ingredient used in the Bombay duck?", correct_answer: "Fish", incorrect_answers: ["Duck", "Milk", "Honey"])
fr7 = Flashcard.create(category: "Funny", question: "A group of crows is known as?", correct_answer: "Murderer", incorrect_answers: ["Blessing", "Army", "Flink"])
fr8 = Flashcard.create(category: "Funny", question: "A group of unicorns is called", correct_answer: "Blessing", incorrect_answers: ["Murderer", "Colony", "Pack"])
fr9 = Flashcard.create(category: "Funny", question: "How many years old is the oldest piece of chewing gum?", correct_answer: "9000 years", incorrect_answers: ["2000 years", "10 years", "5700 years"])
fr10 = Flashcard.create(category: "Funny", question: "What is a kind of animal which is known as a prairie dog?", correct_answer: "Rodent", incorrect_answers: ["Dog", "Bird", "Cat"])
fr11 = Flashcard.create(category: "Funny", question: "Which is the country where fortune cookies were discovered?", correct_answer: "America", incorrect_answers: ["China", "Vietnam", "Wakanda"])
fr12 = Flashcard.create(category: "Funny", question: "On Sunday what is once illegal to sell in Columbus Ohio?", correct_answer: "Corn flakes", incorrect_answers: ["Vehicle", "Rice", "House"])
fr13 = Flashcard.create(category: "Funny", question: "What is the name of fear of being buried alive?", correct_answer: "Technophobia", incorrect_answers: ["Cynophobia", "Acrophobia", "Trypophobia"])
fr14 = Flashcard.create(category: "Funny", question: "For whom it is illegal to frown at in a new jersey?", correct_answer: "Police officer", incorrect_answers: ["Docter", "Baby", "Adult"])
fr15 = Flashcard.create(category: "Funny", question: "Where is it illegal to sell ice cream after 6pm, unless the customer has a note from his doctor?", correct_answer: "New Jersey", incorrect_answers: ["Seattle", "Spain", "New York"])
fr16 = Flashcard.create(category: "Funny", question: "The month in which Russian’s celebrates October revolution?", correct_answer: "November", incorrect_answers: ["October", "September", "January"])
fr17 = Flashcard.create(category: "Funny", question: "Group of frogs is known as?", correct_answer: "Army", incorrect_answers: ["Blessing", "Flock", "Horde"])
fr18 = Flashcard.create(category: "Funny", question: "The animal that causes the most human deaths every year?", correct_answer: "Deer", incorrect_answers: ["Dog", "Cow", "Donkey"])
fr19 = Flashcard.create(category: "Funny", question: "What is the color of blueberry jam?", correct_answer: "Purple", incorrect_answers: ["Blue", "Green", "Pink"])
fr20 = Flashcard.create(category: "Funny", question: "What is the size of kangaroo babies when they are born?", correct_answer: "1 inch", incorrect_answers: ["1 feet", "1 yard", "1 meter"])