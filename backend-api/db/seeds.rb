f1 = Flashcard.create(category: "reactjs", question: "How do you access a function fetch() from a h1 element in JSX?", correct_answer: "<h1>{fetch()}</h1>", incorrect_answers: ["<h1>${fetch()}</h1>", "<h1>{fetch}</h1>", "
  <h1>${fetch}</h1>"] )

f2 = Flashcard.create(category: "reactjs", question: "Which lifecyle method in a React Component should you override to stop the component from updating?", correct_answer: "shouldComponentUpdate", incorrect_answers: ["
  willComponentUpdate", "componentDidUpdate", "componentDidMount"])

f3 = Flashcard.create(category: "reactjs", question: "What's used to pass data to a component from outside?", correct_answer: "props", incorrect_answers: ["setState", "render with arguements", "PropTypes"])

f4 = Flashcard.create(category: "reactjs", question: "Which lifecycle method in a React Comompnent is called after the component is rendered for the first time?", correct_answer: "componentDidMount", incorrect_answers: ["componentDidUpdate", "componentMounted", "componentUpdated"])

f5 = Flashcard.create(category: "reactjs", question: "Which of the following is correct syntax for a button click event handler, foo?", correct_answer: "<button onClick={this.foo}>", incorrect_answers: ["<button onclick={this.foo()}>", "
  <button onclick={this.foo}>", "<button onClick={this.foo()}>"])

f6 = Flashcard.create(category: "reactjs", question: "What happens when you call setState() inside render() method?", correct_answer: "ininite loop", incorrect_answers: ["Repetitive output appears on the screen", "Duplicate key error", "None of the above"])

f7 = Flashcard.create(category: "reactjs", question: "How do you write an inline style specifying the font-size:12px and color:red; in JSX", correct_answer: "style={{fontSize:'12px',color:'red'}}", incorrect_answers: ["style={{font-size:12,color:'red'}}
", "style={fontSize:'12px',color:'red'}", "style={{font-size:12px,color:'red'}}"])

f8 = Flashcard.create(category: "reactjs", question: "What is used in ReactJs to increase performance?", correct_answer: "Virtual DOM", incorrect_answers: ["DOM", "COM", "HTML"])

f9 = Flashcard.create(category: "reactjs", question: "Which of the following below act as the input of a class-based component? ", correct_answer: "props", incorrect_answers: ["class", "factory", "render"])

f10 = Flashcard.create(category: "reactjs", question: "What is the declarative way to render a dynamic list of components based on values in an array ", correct_answer: "Using the Array.map() method", incorrect_answers: ["Using the reduce array method", "Using a for loop", "Using a while loop"])

f11 = Flashcard.create(category: "reactjs", question: "What is ReactJs?", correct_answer: "A library for building interaction interfaces", incorrect_answers: ["Server side framework", "Client side framework", "A language"])

f12 = Flashcard.create(category: "reactjs", question: "Who develop react.js?", correct_answer: "Facebook", incorrect_answers: ["Microsoft", "Twitter", "Google"])

f13 = Flashcard.create(category: "reactjs", question: "Name the function used to change the state of react component ", correct_answer: "this.setState", incorrect_answers: ["this.setChangeState", "this.State{}", "this.State()"])

f14 = Flashcard.create(category: "reactjs", question: "What is state in react? ", correct_answer: "Internal storage of the component", incorrect_answers: ["A permanent storage", "A global storage for the application", "A particular condition that someone or something is in at a specific time"])

f15 = Flashcard.create(category: "reactjs", question: "Everything in react is?", correct_answer: "Component", incorrect_answers: ["Model", "Method", "Package"])

f16 = Flashcard.create(category: "reactjs", question: "What will happen if you render an input element with disabled = {false}", correct_answer: "It will be rendered as enabled", incorrect_answers: ["It will be rendered as disabled", "It will not be rendered at all", "It will throw an error"])

f17 = Flashcard.create(category: "reactjs", question: "React component can return how many components?", correct_answer: "Multiple", incorrect_answers: ["One", "Two", "Three"])