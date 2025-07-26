// ✅ Load subject & difficulty from localStorage
let selectedSubject = localStorage.getItem("selectedSubject")?.trim();
let selectedDifficulty = localStorage.getItem("selectedDifficulty")?.trim();

const subjectEmoji = {
  English: "📘",
  Physics: "⚛️",
  Maths: "➕",
  Chemistry: "🧪"
};

// 2️⃣ Update page heading with emoji
document.getElementById("subject-handling").innerText = `${subjectEmoji[selectedSubject]} ${selectedSubject} - ${selectedDifficulty} Quiz`;


const quizdata={
    English: {
    easy: [
      { question: "What is the synonym of 'happy'?", options: ["Sad", "Joyful", "Angry", "Tired"], answer: "Joyful" },
      { question: "Choose the correct spelling:", options: ["Definately", "Definitely", "Defanitely", "Definetly"], answer: "Definitely" },
      { question: "Which word is an antonym of 'cold'?", options: ["Hot", "Cool", "Freezing", "Icy"], answer: "Hot" },
      { question: "Which one is a noun?", options: ["Run", "Blue", "Chair", "Quickly"], answer: "Chair" },
      { question: "What is a plural of 'child'?", options: ["Childs", "Childes", "Children", "Child"], answer: "Children" },
      { question: "What is the past tense of 'go'?", options: ["Goes", "Gone", "Went", "Going"], answer: "Went" },
      { question: "Which is a punctuation mark?", options: [",", "and", "book", "red"], answer: "," },
      { question: "Which is a verb?", options: ["Jump", "Happy", "Blue", "Table"], answer: "Jump" },
      { question: "Find the adjective:", options: ["Quickly", "Cat", "Beautiful", "Run"], answer: "Beautiful" },
      { question: "What is the opposite of 'up'?", options: ["Top", "Down", "Left", "Over"], answer: "Down" },
      { question: "Choose the correct sentence:", options: ["She have a book.", "She has a book.", "She haves a book.", "She is have a book."], answer: "She has a book." },
      { question: "Which word rhymes with 'blue'?", options: ["Clue", "Green", "Brown", "Black"], answer: "Clue" },
      { question: "Select the correct article: ___ apple", options: ["A", "An", "The", "No article"], answer: "An" },
      { question: "Which is a question word?", options: ["When", "Book", "Apple", "Dog"], answer: "When" },
      { question: "What is the opposite of 'fast'?", options: ["Quick", "Slow", "Swift", "Rapid"], answer: "Slow" },
      { question: "Choose the correct word: I ___ happy.", options: ["is", "are", "am", "be"], answer: "am" },
      { question: "Which is a pronoun?", options: ["She", "Book", "Run", "Red"], answer: "She" },
      { question: "How many vowels are there in English?", options: ["5", "4", "6", "7"], answer: "5" },
      { question: "Which is an animal?", options: ["Chair", "Elephant", "Book", "Door"], answer: "Elephant" },
      { question: "Find the correct opposite: 'night'", options: ["Morning", "Day", "Evening", "Afternoon"], answer: "Day" },
      { question: "What is a sentence?", options: ["A group of words", "A number", "A letter", "A sound"], answer: "A group of words" },
      { question: "Pick the conjunction:", options: ["And", "Blue", "Quickly", "Box"], answer: "And" },
      { question: "Which is an emotion?", options: ["Sad", "Chair", "Street", "Sky"], answer: "Sad" },
      { question: "Which word is a preposition?", options: ["Under", "Cat", "Red", "Quick"], answer: "Under" },
      { question: "Which sentence is a question?", options: ["You are here.", "Are you here?", "She goes to school.", "I am fine."], answer: "Are you here?" }
    ],
    medium: [
      { question: "Which sentence is grammatically correct?", options: ["He go to school.", "She goes to school.", "They goes to school.", "We goes to school."], answer: "She goes to school." },
      { question: "What part of speech is 'quickly'?", options: ["Noun", "Adjective", "Verb", "Adverb"], answer: "Adverb" },
      { question: "Which is a compound word?", options: ["Sunlight", "Sun", "Light", "Shine"], answer: "Sunlight" },
      { question: "Identify the verb in: 'The cat slept under the bed.'", options: ["Cat", "Slept", "Bed", "Under"], answer: "Slept" },
      { question: "Choose the correct homophone: Their/There/They're coming to the party.", options: ["Their", "There", "They're", "Thar"], answer: "They're" },
      { question: "What is the plural of 'mouse'?", options: ["Mouses", "Mice", "Mices", "Mouse"], answer: "Mice" },
      { question: "What is a synonym of 'intelligent'?", options: ["Smart", "Lazy", "Funny", "Tall"], answer: "Smart" },
      { question: "Choose the correct sentence:", options: ["I seen him yesterday.", "I saw him yesterday.", "I sees him yesterday.", "I see him yesterday."], answer: "I saw him yesterday." },
      { question: "Which one is a proper noun?", options: ["book", "table", "city", "London"], answer: "London" },
      { question: "Identify the subject in the sentence: 'Ravi plays cricket every evening.'", options: ["Cricket", "Plays", "Evening", "Ravi"], answer: "Ravi" },
      { question: "Which is an interjection?", options: ["Wow!", "Run", "Cat", "On"], answer: "Wow!" },
      { question: "Choose the correct idiom meaning 'very easy':", options: ["Piece of cake", "Hot potato", "Break a leg", "Cold feet"], answer: "Piece of cake" },
      { question: "What does 'kick the bucket' mean?", options: ["Dance", "Die", "Run", "Laugh"], answer: "Die" },
      { question: "What type of sentence is: 'Please close the door.'", options: ["Interrogative", "Declarative", "Imperative", "Exclamatory"], answer: "Imperative" },
      { question: "Find the misspelled word:", options: ["Receive", "Believe", "Acheive", "Perceive"], answer: "Acheive" },
      { question: "Choose the correct past participle: 'I have ___ my homework.'", options: ["do", "done", "did", "does"], answer: "done" },
      { question: "Which is not a punctuation mark?", options: ["?", "@", ",", "!"], answer: "@" },
      { question: "What’s the antonym of 'brave'?", options: ["Coward", "Strong", "Fighter", "Tall"], answer: "Coward" },
      { question: "Which is a declarative sentence?", options: ["Are you ready?", "Close the door.", "She loves coffee.", "Wow, amazing!"], answer: "She loves coffee." },
      { question: "Choose the correct contraction for 'do not':", options: ["didn't", "don’t", "doesn't", "won't"], answer: "don’t" },
      { question: "Which is a collective noun?", options: ["Flock", "Dog", "Chair", "Road"], answer: "Flock" },
      { question: "Choose the word that fits: 'He is ___ honest man.'", options: ["a", "an", "the", "no article"], answer: "an" },
      { question: "Find the error: 'She don't like tea.'", options: ["Don't should be doesn't", "She should be He", "Tea should be coffee", "No error"], answer: "Don't should be doesn't" },
      { question: "Which is a demonstrative pronoun?", options: ["This", "She", "You", "We"], answer: "This" },
      { question: "Identify the clause: 'I know that she is coming.'", options: ["Independent", "Subordinate", "Compound", "Simple"], answer: "Subordinate" }
    ],
   hard: [
  { question: "Identify the figure of speech: 'The wind whispered secrets'", options: ["Simile", "Metaphor", "Personification", "Alliteration"], answer: "Personification" },
  { question: "Which is a complex sentence?", options: ["He came, and we left.", "Although it rained, we went outside.", "I went to the park.", "She sang."], answer: "Although it rained, we went outside." },
  { question: "Find the passive voice: 'The cake was eaten by John.'", options: ["John ate the cake.", "The cake was eaten by John.", "John was eating cake.", "John eats cake."], answer: "The cake was eaten by John." },
  { question: "What is an oxymoron?", options: ["Contradictory phrase", "Extreme exaggeration", "Sound repetition", "Indirect reference"], answer: "Contradictory phrase" },
  { question: "Which is a gerund?", options: ["Swimming", "Swim", "Swam", "Swims"], answer: "Swimming" },
  { question: "What is the mood of this sentence: 'If I were rich, I would travel the world.'", options: ["Indicative", "Imperative", "Subjunctive", "Exclamatory"], answer: "Subjunctive" },
  { question: "Choose the correct parallel structure:", options: ["I like to swim, biking, and to run.", "I like swimming, biking, and running.", "I like to swim, to bike, and running.", "I like to swim, bike, and running."], answer: "I like swimming, biking, and running." },
  { question: "Which sentence uses an ellipsis correctly?", options: ["I don't know...", "I...don't know", "...I don't know", "I don't...know"], answer: "I don't know..." },
  { question: "What is the function of a semicolon?", options: ["Separate clauses", "End a sentence", "Show emotion", "Indicate possession"], answer: "Separate clauses" },
  { question: "Identify the sentence with subjunctive mood:", options: ["If I were you, I'd study.", "I was there.", "She studies hard.", "They are students."], answer: "If I were you, I'd study." },
  { question: "What is the meaning of 'ephemeral'?", options: ["Permanent", "Short-lived", "Beautiful", "Painful"], answer: "Short-lived" },
  { question: "Which is an example of a compound-complex sentence?", options: ["I went home.", "She runs fast, and she wins races.", "Though it rained, we played, and we got wet.", "He likes apples."], answer: "Though it rained, we played, and we got wet." },
  { question: "Which word is an example of an adverb?", options: ["Quickly", "Quick", "Quicken", "Quickness"], answer: "Quickly" },
  { question: "Choose the correct form: 'Neither the players nor the coach ___ happy.'", options: ["are", "were", "is", "have been"], answer: "is" },
  { question: "What type of clause is this: 'Because he was late'", options: ["Main clause", "Dependent clause", "Relative clause", "Independent clause"], answer: "Dependent clause" },
  { question: "Which is a rhetorical question?", options: ["What time is it?", "Are you serious?", "Can you help me?", "What is the answer?"], answer: "Are you serious?" },
  { question: "Choose the correct idiom for 'extremely happy':", options: ["Down in the dumps", "Over the moon", "On thin ice", "Bite the dust"], answer: "Over the moon" },
  { question: "Identify the correct preposition: 'He is good ___ math.'", options: ["in", "on", "at", "to"], answer: "at" },
  { question: "Which is an example of irony?", options: ["The police station got robbed.", "The sun is hot.", "He loves pizza.", "Cats meow."], answer: "The police station got robbed." },
  { question: "What is the meaning of 'ambiguous'?", options: ["Clear", "Confusing", "Doubtful", "Unclear or double meaning"], answer: "Unclear or double meaning" },
  { question: "Which literary device uses exaggeration?", options: ["Metaphor", "Irony", "Hyperbole", "Symbolism"], answer: "Hyperbole" },
  { question: "Which word is a conjunction?", options: ["Quickly", "Because", "Apple", "Jump"], answer: "Because" },
  { question: "Choose the correct sentence:", options: ["The dog chased it's tail.", "The dog chased its tail.", "Its tail was chase by dog.", "It's tail chased the dog."], answer: "The dog chased its tail." },
  { question: "What is the superlative form of 'good'?", options: ["Goodest", "Better", "Best", "More good"], answer: "Best" },
  { question: "What does the root 'bene' mean?", options: ["Bad", "Good", "Neutral", "Old"], answer: "Good" }
]

  }
,

        
    Physics:{
      easy: [
  { question: "What is the unit of force?", options: ["Watt", "Newton", "Joule", "Pascal"], answer: "Newton" },
  { question: "What does a voltmeter measure?", options: ["Current", "Resistance", "Voltage", "Power"], answer: "Voltage" },
  { question: "What is the unit of electric current?", options: ["Ohm", "Volt", "Ampere", "Watt"], answer: "Ampere" },
  { question: "Which particle has a negative charge?", options: ["Proton", "Neutron", "Electron", "Photon"], answer: "Electron" },
  { question: "Acceleration due to gravity on Earth is approximately:", options: ["9.8 m/s²", "10 m/s²", "8.9 m/s²", "9.2 m/s²"], answer: "9.8 m/s²" },
  { question: "Which wave can travel in a vacuum?", options: ["Sound wave", "Water wave", "Radio wave", "Seismic wave"], answer: "Radio wave" },
  { question: "Which of the following is a scalar quantity?", options: ["Velocity", "Force", "Displacement", "Speed"], answer: "Speed" },
  { question: "Which instrument is used to measure atmospheric pressure?", options: ["Thermometer", "Barometer", "Manometer", "Hygrometer"], answer: "Barometer" },
  { question: "What is the SI unit of frequency?", options: ["Hertz", "Decibel", "Cycle", "Radian"], answer: "Hertz" },
  { question: "What is the speed of light in vacuum?", options: ["3 × 10^8 m/s", "3 × 10^6 m/s", "3 × 10^5 m/s", "3 × 10^7 m/s"], answer: "3 × 10^8 m/s" },
  { question: "Which of these is NOT a form of energy?", options: ["Heat", "Light", "Motion", "Mass"], answer: "Mass" },
  { question: "What is the source of solar energy?", options: ["Combustion", "Nuclear fission", "Nuclear fusion", "Chemical reaction"], answer: "Nuclear fusion" },
  { question: "Which of these is a conductor of electricity?", options: ["Plastic", "Glass", "Wood", "Copper"], answer: "Copper" },
  { question: "Which instrument is used to measure temperature?", options: ["Barometer", "Thermometer", "Ammeter", "Voltmeter"], answer: "Thermometer" },
  { question: "What is the boiling point of water in Celsius?", options: ["0°C", "50°C", "100°C", "212°C"], answer: "100°C" },
  { question: "Which planet is known for having the most gravity?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: "Jupiter" },
  { question: "Which of these is not a simple machine?", options: ["Lever", "Pulley", "Screwdriver", "Engine"], answer: "Engine" },
  { question: "Sound travels fastest through:", options: ["Air", "Water", "Steel", "Vacuum"], answer: "Steel" },
  { question: "Which one is a renewable energy source?", options: ["Coal", "Oil", "Wind", "Natural Gas"], answer: "Wind" },
  { question: "The freezing point of water is:", options: ["32°F", "0°F", "0°C", "100°C"], answer: "0°C" },
  { question: "Which of these is a unit of pressure?", options: ["Pascal", "Watt", "Joule", "Ampere"], answer: "Pascal" },
  { question: "A mirror reflects:", options: ["Sound", "Light", "Heat", "Magnetism"], answer: "Light" },
  { question: "Which planet is closest to the sun?", options: ["Earth", "Venus", "Mercury", "Mars"], answer: "Mercury" },
  { question: "Which gas do plants absorb from the air?", options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"], answer: "Carbon dioxide" },
  { question: "The Earth revolves around the Sun in how many days?", options: ["365", "30", "24", "180"], answer: "365" }
]
,
medium: [
  { question: "Which law states that 'every action has an equal and opposite reaction'?", options: ["First Law of Motion", "Second Law of Motion", "Third Law of Motion", "Law of Gravitation"], answer: "Third Law of Motion" },
  { question: "The unit of power is:", options: ["Joule", "Watt", "Newton", "Pascal"], answer: "Watt" },
  { question: "Ohm’s law is given by:", options: ["V = IR", "P = VI", "E = mc²", "F = ma"], answer: "V = IR" },
  { question: "Which law explains the relationship between pressure and volume of a gas?", options: ["Boyle’s Law", "Newton’s Law", "Ohm’s Law", "Faraday’s Law"], answer: "Boyle’s Law" },
  { question: "The energy stored in a stretched spring is:", options: ["Kinetic Energy", "Potential Energy", "Thermal Energy", "Chemical Energy"], answer: "Potential Energy" },
  { question: "A body in motion continues in motion unless acted upon by:", options: ["Energy", "Friction", "An external force", "Velocity"], answer: "An external force" },
  { question: "Which of the following quantities is a vector?", options: ["Speed", "Mass", "Temperature", "Acceleration"], answer: "Acceleration" },
  { question: "Which type of lens is used to correct short-sightedness?", options: ["Convex", "Concave", "Cylindrical", "Flat"], answer: "Concave" },
  { question: "Which of the following is a renewable source of energy?", options: ["Coal", "Natural Gas", "Petroleum", "Solar Energy"], answer: "Solar Energy" },
  { question: "What happens to the resistance of a wire when its length is doubled?", options: ["Halved", "Unchanged", "Doubled", "Quadrupled"], answer: "Doubled" },
  { question: "Which instrument is used to detect electric current?", options: ["Voltmeter", "Barometer", "Ammeter", "Thermometer"], answer: "Ammeter" },
  { question: "In which medium does sound travel fastest?", options: ["Air", "Water", "Vacuum", "Steel"], answer: "Steel" },
  { question: "The SI unit of work is:", options: ["Newton", "Joule", "Watt", "Pascal"], answer: "Joule" },
  { question: "Who discovered the electron?", options: ["Newton", "Einstein", "Thomson", "Bohr"], answer: "Thomson" },
  { question: "Which wave is used in microwave ovens?", options: ["Radio", "Infrared", "Microwave", "Ultraviolet"], answer: "Microwave" },
  { question: "Which physical quantity is conserved in an elastic collision?", options: ["Mass", "Energy", "Momentum", "All of these"], answer: "All of these" },
  { question: "What is the function of a fuse in an electric circuit?", options: ["Increase voltage", "Measure resistance", "Protect against overload", "Store energy"], answer: "Protect against overload" },
  { question: "What is refraction?", options: ["Bending of light", "Reflection of sound", "Splitting of white light", "Absorption of energy"], answer: "Bending of light" },
  { question: "What kind of mirror is used in vehicles as rearview mirrors?", options: ["Concave", "Convex", "Plane", "Parabolic"], answer: "Convex" },
  { question: "Which color of light has the highest energy?", options: ["Red", "Green", "Blue", "Violet"], answer: "Violet" },
  { question: "The motion of a pendulum is an example of:", options: ["Uniform motion", "Circular motion", "Oscillatory motion", "Projectile motion"], answer: "Oscillatory motion" },
  { question: "Which subatomic particle is positively charged?", options: ["Electron", "Neutron", "Proton", "Photon"], answer: "Proton" },
  { question: "Which phenomenon causes the sky to appear blue?", options: ["Reflection", "Refraction", "Scattering", "Diffraction"], answer: "Scattering" },
  { question: "Which gas is used in electric bulbs?", options: ["Oxygen", "Nitrogen", "Argon", "Hydrogen"], answer: "Argon" },
  { question: "Which instrument is used to measure electric potential difference?", options: ["Voltmeter", "Ammeter", "Thermometer", "Galvanometer"], answer: "Voltmeter" }
]
,
hard: [
  { question: "Who discovered the electron?", options: ["Newton", "Einstein", "Thomson", "Bohr"], answer: "Thomson" },
  { question: "What is the gravitational force between two masses called?", options: ["Tension", "Friction", "Weight", "Gravity"], answer: "Gravity" },
  { question: "Which color of light has the highest energy?", options: ["Red", "Yellow", "Blue", "Violet"], answer: "Violet" },
  { question: "What is the formula for kinetic energy?", options: ["mv", "½mv²", "ma", "mgh"], answer: "½mv²" },
  { question: "What is the unit used to measure work done?", options: ["Watt", "Joule", "Newton", "Pascal"], answer: "Joule" },
  { question: "Which electromagnetic wave has the shortest wavelength?", options: ["Microwaves", "Ultraviolet", "Gamma rays", "Radio waves"], answer: "Gamma rays" },
  { question: "The bending of light around an obstacle is called:", options: ["Reflection", "Refraction", "Diffraction", "Interference"], answer: "Diffraction" },
  { question: "What is the SI unit of electric charge?", options: ["Ampere", "Volt", "Coulomb", "Ohm"], answer: "Coulomb" },
  { question: "Which of the following quantities is not a scalar?", options: ["Speed", "Temperature", "Distance", "Displacement"], answer: "Displacement" },
  { question: "Which device converts sound energy into electrical energy?", options: ["Microphone", "Speaker", "Transistor", "Amplifier"], answer: "Microphone" },
  { question: "Which fundamental force is the weakest?", options: ["Gravitational", "Electromagnetic", "Strong Nuclear", "Weak Nuclear"], answer: "Gravitational" },
  { question: "Which scientist is associated with the uncertainty principle?", options: ["Bohr", "Heisenberg", "Einstein", "Planck"], answer: "Heisenberg" },
  { question: "Which physical quantity remains constant in uniform circular motion?", options: ["Speed", "Velocity", "Acceleration", "Displacement"], answer: "Speed" },
  { question: "What is the unit of electric potential?", options: ["Watt", "Ampere", "Volt", "Ohm"], answer: "Volt" },
  { question: "The resistance of a wire depends on:", options: ["Length", "Material", "Temperature", "All of these"], answer: "All of these" },
  { question: "Which law relates current, voltage, and resistance?", options: ["Ohm's Law", "Faraday's Law", "Newton's Law", "Boyle's Law"], answer: "Ohm's Law" },
  { question: "What is the escape velocity from Earth’s surface?", options: ["7.9 km/s", "9.8 m/s²", "11.2 km/s", "3×10⁸ m/s"], answer: "11.2 km/s" },
  { question: "Which law explains the conservation of energy?", options: ["First Law of Thermodynamics", "Newton's Third Law", "Law of Inertia", "Hooke’s Law"], answer: "First Law of Thermodynamics" },
  { question: "The area under a force vs. displacement graph represents:", options: ["Energy", "Work", "Power", "Momentum"], answer: "Work" },
  { question: "What is the dimensional formula of power?", options: ["ML²T⁻³", "ML²T⁻²", "MLT⁻²", "MT⁻²"], answer: "ML²T⁻³" },
  { question: "What is the principle behind hydraulic brakes?", options: ["Pascal’s Law", "Archimedes’ Principle", "Newton’s Third Law", "Bernoulli’s Principle"], answer: "Pascal’s Law" },
  { question: "Who proposed the quantum theory of energy?", options: ["Einstein", "Newton", "Planck", "Heisenberg"], answer: "Planck" },
  { question: "The Lenz’s Law relates to:", options: ["Electric field", "Magnetic field", "Induced EMF", "Ohmic resistance"], answer: "Induced EMF" },
  { question: "What is the function of a capacitor in an electric circuit?", options: ["To store energy", "To increase resistance", "To reduce voltage", "To generate current"], answer: "To store energy" },
  { question: "The magnetic field inside a solenoid is:", options: ["Zero", "Weak and uniform", "Strong and uniform", "Random"], answer: "Strong and uniform" }
]

  } ,
    Maths:{
      esay:[
         { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "4" },
  { question: "What is 10 - 3?", options: ["7", "6", "8", "9"], answer: "7" },
  { question: "What is 5 × 2?", options: ["10", "12", "15", "8"], answer: "10" },
  { question: "What is 20 ÷ 5?", options: ["4", "5", "3", "6"], answer: "4" },
  { question: "What is the square of 3?", options: ["6", "9", "12", "3"], answer: "9" },
  { question: "What comes after 19?", options: ["18", "20", "21", "22"], answer: "20" },
  { question: "What is half of 8?", options: ["2", "4", "6", "3"], answer: "4" },
  { question: "What is the smallest 2-digit number?", options: ["10", "11", "12", "9"], answer: "10" },
  { question: "Which number is even?", options: ["7", "9", "4", "5"], answer: "4" },
  { question: "What is the value of 1 + 1?", options: ["2", "3", "1", "4"], answer: "2" },
  { question: "What is the sum of 5 and 7?", options: ["10", "11", "12", "13"], answer: "12" },
  { question: "What is 3 less than 10?", options: ["6", "7", "8", "9"], answer: "7" },
  { question: "What is the place value of 3 in 345?", options: ["300", "3", "30", "345"], answer: "300" },
  { question: "Which shape has 4 equal sides?", options: ["Triangle", "Rectangle", "Square", "Circle"], answer: "Square" },
  { question: "What is 100 - 50?", options: ["40", "50", "60", "70"], answer: "50" },
  { question: "What is 6 + 6?", options: ["10", "11", "12", "13"], answer: "12" },
  { question: "How many hours in a day?", options: ["24", "12", "10", "30"], answer: "24" },
  { question: "What is the value of zero added to any number?", options: ["Same number", "Zero", "One", "Two"], answer: "Same number" },
  { question: "How many minutes are in an hour?", options: ["60", "100", "30", "45"], answer: "60" },
  { question: "Which number is greater: 45 or 54?", options: ["45", "54", "Equal", "Can't tell"], answer: "54" },
  { question: "Which is a 3-digit number?", options: ["99", "100", "10", "9"], answer: "100" },
  { question: "What is the shape of a ball?", options: ["Circle", "Cube", "Sphere", "Rectangle"], answer: "Sphere" },
  { question: "What is the number before 50?", options: ["48", "49", "51", "52"], answer: "49" },
  { question: "What is the product of 4 and 5?", options: ["20", "25", "15", "10"], answer: "20" },
  { question: "What is 9 - 5?", options: ["3", "5", "4", "2"], answer: "4" }
      ]
      ,
     medium: [
  { question: "What is the solution of 2x + 3 = 11?", options: ["3", "4", "5", "6"], answer: "4" },
  { question: "If a triangle has sides 3, 4, 5, it is a:", options: ["Equilateral", "Isosceles", "Scalene", "Right-angled"], answer: "Right-angled" },
  { question: "Simplify: 3(x - 2) + 2x", options: ["5x - 2", "5x - 6", "3x - 6", "3x + 2"], answer: "5x - 6" },
  { question: "Evaluate: 6² - 4²", options: ["12", "16", "20", "28"], answer: "20" },
  { question: "What is the median of [7, 3, 9, 5, 1]?", options: ["3", "5", "7", "9"], answer: "5" },
  { question: "Find the mode: [4, 2, 5, 2, 3, 2]", options: ["2", "3", "4", "5"], answer: "2" },
  { question: "What is 15% of 80?", options: ["10", "12", "15", "18"], answer: "12" },
  { question: "If a = 2 and b = 3, what is ab²?", options: ["6", "12", "18", "36"], answer: "18" },
  { question: "Simplify: (x + 2)(x - 2)", options: ["x² + 4", "x² - 4", "x² - 2x", "x² + 2x"], answer: "x² - 4" },
  { question: "Convert 0.75 to fraction.", options: ["1/2", "3/4", "2/3", "4/5"], answer: "3/4" },
  { question: "What is 7²?", options: ["49", "42", "56", "36"], answer: "49" },
  { question: "The angle in a semicircle is:", options: ["90°", "180°", "60°", "45°"], answer: "90°" },
  { question: "Solve for x: x/4 = 3", options: ["6", "7", "12", "15"], answer: "12" },
  { question: "Find the value of x if 2x + 5 = 3x - 2", options: ["2", "5", "7", "10"], answer: "7" },
  { question: "What is the area of a circle with r = 3?", options: ["6π", "9π", "12π", "18π"], answer: "9π" },
  { question: "What is the square of 0.5?", options: ["0.25", "0.5", "1", "2"], answer: "0.25" },
  { question: "Simplify: 9x - 4x + 6", options: ["5x + 6", "13x", "5x", "5x - 6"], answer: "5x + 6" },
  { question: "A number is 3 more than twice another. If the sum is 21, what are the numbers?", options: ["6 and 9", "4 and 11", "5 and 8", "3 and 9"], answer: "6 and 9" },
  { question: "What is the mean of [4, 8, 6, 10]?", options: ["7", "8", "6", "9"], answer: "7" },
  { question: "How many centimeters are in 2.5 meters?", options: ["250", "25", "2.5", "2500"], answer: "250" },
  { question: "Convert 3/5 to percentage.", options: ["50%", "55%", "60%", "65%"], answer: "60%" },
  { question: "Find x: 2(x + 1) = 10", options: ["2", "4", "5", "6"], answer: "4" },
  { question: "If perimeter of square is 40 cm, side is:", options: ["8 cm", "10 cm", "12 cm", "14 cm"], answer: "10 cm" },
  { question: "Which formula finds area of triangle?", options: ["bh", "½bh", "b+h", "b/h"], answer: "½bh" },
  { question: "How many degrees in a straight line?", options: ["90°", "180°", "270°", "360°"], answer: "180°" }
]
,
hard: [
  { question: "What is the derivative of sin(x)?", options: ["cos(x)", "-sin(x)", "-cos(x)", "tan(x)"], answer: "cos(x)" },
  { question: "Solve: log₃(81)", options: ["3", "4", "5", "6"], answer: "4" },
  { question: "If f(x) = x² + 2x, find f(3)", options: ["9", "15", "12", "18"], answer: "15" },
  { question: "What is the integral of 1/x dx?", options: ["x", "ln|x|", "1/x", "x²"], answer: "ln|x|" },
  { question: "What is the sum of interior angles of a hexagon?", options: ["360°", "540°", "720°", "900°"], answer: "720°" },
  { question: "Solve for x: 2x² - 8 = 0", options: ["±2", "±4", "2", "4"], answer: "±2" },
  { question: "Find the slope of the line 3x - 2y = 6", options: ["2/3", "-2/3", "3/2", "-3/2"], answer: "3/2" },
  { question: "What is the solution to |x - 4| = 6?", options: ["10", "-10", "-2 or 10", "-6"], answer: "-2 or 10" },
  { question: "Factor: x² - 9", options: ["(x+3)(x-3)", "(x-3)²", "x(x-9)", "(x+9)(x-1)"], answer: "(x+3)(x-3)" },
  { question: "What is the discriminant of 2x² + 4x + 1?", options: ["16", "8", "4", "0"], answer: "8" },
  { question: "If a matrix A has order 2×3, what is the number of elements?", options: ["5", "6", "4", "3"], answer: "6" },
  { question: "Simplify: (x²)^3", options: ["x⁵", "x⁶", "x³", "x⁴"], answer: "x⁶" },
  { question: "What is the formula for the volume of a sphere?", options: ["(4/3)πr³", "πr²", "2πr", "πr³"], answer: "(4/3)πr³" },
  { question: "Find x: x² = 121", options: ["11", "±11", "121", "10"], answer: "±11" },
  { question: "If f(x) = 3x + 1, then f⁻¹(x) is:", options: ["(x-1)/3", "x/3 + 1", "3x - 1", "x + 1/3"], answer: "(x-1)/3" },
  { question: "What is tan(45°)?", options: ["0", "1", "√3", "∞"], answer: "1" },
  { question: "A function is one-to-one if:", options: ["Every y has one x", "Every x has one y", "It is linear", "It is quadratic"], answer: "Every x has one y" },
  { question: "What is the domain of √(x - 4)?", options: ["x ≥ 4", "x > 4", "x ≤ 4", "All real numbers"], answer: "x ≥ 4" },
  { question: "Find the asymptote of f(x) = 1/(x - 3)", options: ["x = 0", "x = 1", "x = 3", "x = -3"], answer: "x = 3" },
  { question: "What is 0 factorial (0!)?", options: ["0", "1", "Undefined", "-1"], answer: "1" },
  { question: "Evaluate: ∑ from i=1 to 3 of i²", options: ["9", "14", "13", "12"], answer: "14" },
  { question: "What is the inverse of multiplication?", options: ["Addition", "Division", "Subtraction", "Exponent"], answer: "Division" },
  { question: "What is the slope of a vertical line?", options: ["0", "1", "Undefined", "-1"], answer: "Undefined" },
  { question: "Simplify: (x³)(x²)", options: ["x⁵", "x⁶", "x²", "x⁹"], answer: "x⁵" },
  { question: "Solve: x² - 2x - 8 = 0", options: ["-4 and 2", "4 and -2", "2 and -2", "4 and 2"], answer: "4 and -2" }
]


    } 
  ,
    Chemistry:{
     esay:[
        
  {
  question: "What is the chemical formula for water?",
  options: ["H2O", "CO2", "NaCl", "O2"],
  answer: "H2O"
},
{
  question: "What is the atomic number of carbon?",
  options: ["6", "12", "8", "14"],
  answer: "6"
},
{
  question: "Which gas is used in the preparation of fertilizers and explosives?",
  options: ["Oxygen", "Nitrogen", "Hydrogen", "Chlorine"],
  answer: "Nitrogen"
},
{
  question: "Which of the following is an alkali metal?",
  options: ["Calcium", "Sodium", "Iron", "Aluminum"],
  answer: "Sodium"
},
{
  question: "The pH of a neutral solution is:",
  options: ["0", "7", "14", "1"],
  answer: "7"
},
{
  question: "What is the symbol of gold?",
  options: ["Ag", "Au", "Gd", "Go"],
  answer: "Au"
},
{
  question: "Which acid is found in lemon juice?",
  options: ["Acetic acid", "Citric acid", "Hydrochloric acid", "Formic acid"],
  answer: "Citric acid"
},
{
  question: "What is the process of solid changing directly into gas called?",
  options: ["Condensation", "Evaporation", "Sublimation", "Fusion"],
  answer: "Sublimation"
},
{
  question: "Which element is a noble gas?",
  options: ["Hydrogen", "Nitrogen", "Argon", "Oxygen"],
  answer: "Argon"
},
{
  question: "What is the chemical name of table salt?",
  options: ["Sodium carbonate", "Sodium chloride", "Potassium iodide", "Calcium carbonate"],
  answer: "Sodium chloride"
},
{
  question: "Which compound is used to test the presence of starch?",
  options: ["Benedict’s solution", "Iodine solution", "Lime water", "Litmus solution"],
  answer: "Iodine solution"
},
{
  question: "What is the valency of oxygen?",
  options: ["1", "2", "3", "4"],
  answer: "2"
},
{
  question: "Which type of bond involves sharing of electrons?",
  options: ["Ionic bond", "Covalent bond", "Metallic bond", "Hydrogen bond"],
  answer: "Covalent bond"
},
{
  question: "Which of these is a base?",
  options: ["HCl", "NaOH", "HNO3", "H2SO4"],
  answer: "NaOH"
},
{
  question: "What is the molar mass of water (H₂O)?",
  options: ["10 g/mol", "16 g/mol", "18 g/mol", "20 g/mol"],
  answer: "18 g/mol"
},
{
  question: "Which gas turns lime water milky?",
  options: ["Oxygen", "Carbon dioxide", "Hydrogen", "Nitrogen"],
  answer: "Carbon dioxide"
},
{
  question: "Which of the following is not a chemical change?",
  options: ["Burning of paper", "Melting of ice", "Rusting of iron", "Cooking of food"],
  answer: "Melting of ice"
},
{
  question: "What is the periodic table mainly arranged by?",
  options: ["Mass number", "Density", "Atomic number", "Valency"],
  answer: "Atomic number"
},
{
  question: "Which metal is liquid at room temperature?",
  options: ["Mercury", "Iron", "Aluminum", "Copper"],
  answer: "Mercury"
},
{
  question: "Which gas is released during photosynthesis?",
  options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Methane"],
  answer: "Oxygen"
},
{
  question: "Which of the following is a non-metal?",
  options: ["Copper", "Aluminum", "Sulfur", "Zinc"],
  answer: "Sulfur"
},
{
  question: "Which element is essential for the formation of proteins?",
  options: ["Iron", "Calcium", "Nitrogen", "Sodium"],
  answer: "Nitrogen"
},
{
  question: "What is the color of copper sulfate solution?",
  options: ["Green", "Blue", "Red", "Yellow"],
  answer: "Blue"
},
{
  question: "What is the charge of an electron?",
  options: ["Positive", "Negative", "Neutral", "Variable"],
  answer: "Negative"
},
{
  question: "Which of the following is an exothermic process?",
  options: ["Melting ice", "Boiling water", "Freezing water", "Evaporating alcohol"],
  answer: "Freezing water"
}       
     ],
     medium: [
  {
    question: "Which element has the highest electronegativity?",
    options: ["Fluorine", "Oxygen", "Chlorine", "Nitrogen"],
    answer: "Fluorine"
  },
   {
    question: "What is the oxidation state of nitrogen in HNO₃?",
    options: ["+3", "+5", "-3", "0"],
    answer: "+5"
  }
 ,
  {
    question: "Which of the following is an example of a strong acid?",
    options: ["HCl", "CH3COOH", "H2CO3", "NH4OH"],
    answer: "HCl"
  },
  {
    question: "Which metal is most reactive in the reactivity series?",
    options: ["Calcium", "Sodium", "Potassium", "Magnesium"],
    answer: "Potassium"
  },
  {
    question: "Which gas is produced when zinc reacts with hydrochloric acid?",
    options: ["Oxygen", "Hydrogen", "Carbon dioxide", "Nitrogen"],
    answer: "Hydrogen"
  },
  {
    question: "Which compound contains both ionic and covalent bonds?",
    options: ["NaCl", "CaCO3", "CO2", "CH4"],
    answer: "CaCO3"
  },
  {
    question: "What type of isomerism is shown by C2H6O?",
    options: ["Chain isomerism", "Functional isomerism", "Geometrical isomerism", "Position isomerism"],
    answer: "Functional isomerism"
  },
  {
    question: "What is Avogadro’s number?",
    options: ["6.02 × 10^23", "3.14 × 10^8", "9.8 m/s²", "1.6 × 10^-19"],
    answer: "6.02 × 10^23"
  },
  {
    question: "Which orbital is filled after 3p?",
    options: ["4s", "3d", "4p", "4d"],
    answer: "4s"
  },
  {
    question: "Which of the following is a reducing agent?",
    options: ["O2", "Cl2", "H2", "HNO3"],
    answer: "H2"
  },
  {
    question: "Which type of chemical reaction involves heat absorption?",
    options: ["Exothermic", "Endothermic", "Neutralization", "Combustion"],
    answer: "Endothermic"
  },
  {
    question: "What is the shape of a methane molecule?",
    options: ["Linear", "Bent", "Tetrahedral", "Trigonal planar"],
    answer: "Tetrahedral"
  },
  {
    question: "Which group in the periodic table is known as halogens?",
    options: ["Group 1", "Group 2", "Group 17", "Group 18"],
    answer: "Group 17"
  },
  {
    question: "What is formed when an acid reacts with a base?",
    options: ["Salt and water", "Gas and water", "Precipitate", "Only water"],
    answer: "Salt and water"
  },
  {
    question: "Which element has the smallest atomic radius?",
    options: ["Hydrogen", "Fluorine", "Helium", "Neon"],
    answer: "Helium"
  },
  {
    question: "Which polymer is formed by ethene?",
    options: ["Polyester", "Polythene", "PVC", "Teflon"],
    answer: "Polythene"
  },
  {
    question: "Which ion is responsible for the acidity of a solution?",
    options: ["OH⁻", "Na⁺", "H⁺", "Cl⁻"],
    answer: "H⁺"
  },
  {
    question: "Which is a common drying agent?",
    options: ["Water", "NaCl", "CuSO4 (anhydrous)", "KCl"],
    answer: "CuSO4 (anhydrous)"
  },
  {
    question: "Which property decreases down the group in alkali metals?",
    options: ["Atomic size", "Reactivity", "Electronegativity", "Density"],
    answer: "Electronegativity"
  },
  {
    question: "Which compound is formed when ammonia reacts with hydrogen chloride?",
    options: ["NH4Cl", "HCl", "NH3Cl", "H2"],
    answer: "NH4Cl"
  },
  {
    question: "Which of the following shows hydrogen bonding?",
    options: ["CH4", "NH3", "CO2", "CCl4"],
    answer: "NH3"
  },
  {
    question: "Which compound does not contain carbon?",
    options: ["CO2", "CH4", "NaHCO3", "NaCl"],
    answer: "NaCl"
  },
  {
    question: "What is the hybridization of carbon in ethene (C2H4)?",
    options: ["sp³", "sp²", "sp", "dsp²"],
    answer: "sp²"
  },
  {
    question: "Which oxide of nitrogen is a greenhouse gas?",
    options: ["NO", "N2O", "NO2", "N2"],
    answer: "N2O"
  },
  {
    question: "Which acid is used in car batteries?",
    options: ["Hydrochloric acid", "Sulfuric acid", "Nitric acid", "Acetic acid"],
    answer: "Sulfuric acid"
  }
]
,
hard: [
  {
    question: "Which of the following has the highest lattice energy?",
    options: ["NaCl", "MgO", "KBr", "CaF2"],
    answer: "MgO"
  },
  {
    question: "Which gas is used in the Haber process?",
    options: ["Oxygen", "Nitrogen", "Chlorine", "Methane"],
    answer: "Nitrogen"
  },
  {
    question: "Which theory explains acid-base behavior in non-aqueous solvents?",
    options: ["Arrhenius", "Bronsted-Lowry", "Lewis", "Solvent system"],
    answer: "Solvent system"
  },
  {
    question: "What is the coordination number of Fe in [Fe(CN)6]³⁻?",
    options: ["4", "5", "6", "3"],
    answer: "6"
  },
  {
    question: "Which compound shows geometrical isomerism?",
    options: ["CH4", "C2H4", "C2H2Cl2", "C2Cl2"],
    answer: "C2H2Cl2"
  },
  {
    question: "What is the product of alkene ozonolysis followed by reduction?",
    options: ["Alcohol", "Aldehyde/Ketone", "Acid", "Alkane"],
    answer: "Aldehyde/Ketone"
  },
  {
    question: "Which element does not follow the octet rule?",
    options: ["Neon", "Carbon", "Boron", "Oxygen"],
    answer: "Boron"
  },
  {
    question: "What is the correct order of acidity?",
    options: ["H2O > HF > HCl", "HF > HCl > HBr", "HCl < HBr < HI", "HI > HBr > HCl"],
    answer: "HI > HBr > HCl"
  },
  {
    question: "Which metal is used in the contact process?",
    options: ["Iron", "Copper", "Vanadium", "Platinum"],
    answer: "Vanadium"
  },
  {
    question: "Which salt is formed by a strong acid and weak base?",
    options: ["NaCl", "NH4Cl", "KNO3", "CH3COONa"],
    answer: "NH4Cl"
  },
  {
    question: "Which technique is used to separate pigments in a mixture?",
    options: ["Distillation", "Filtration", "Chromatography", "Crystallization"],
    answer: "Chromatography"
  },
  {
    question: "Which compound is amphoteric?",
    options: ["NaOH", "HCl", "Al(OH)3", "CuO"],
    answer: "Al(OH)3"
  },
  {
    question: "Which compound is used as an antacid?",
    options: ["NaCl", "Mg(OH)2", "KNO3", "CaCO3"],
    answer: "Mg(OH)2"
  },
  {
    question: "Which has the highest ionization energy?",
    options: ["Lithium", "Fluorine", "Neon", "Sodium"],
    answer: "Neon"
  },
  {
    question: "Which gas is collected over water due to its low solubility?",
    options: ["Ammonia", "Oxygen", "Hydrogen", "CO2"],
    answer: "Oxygen"
  },
  {
    question: "What is the molecular geometry of SF6?",
    options: ["Tetrahedral", "Octahedral", "Trigonal bipyramidal", "Square planar"],
    answer: "Octahedral"
  },
  {
    question: "Which of the following is not an allotrope of carbon?",
    options: ["Diamond", "Graphite", "Buckminsterfullerene", "Quartz"],
    answer: "Quartz"
  },
  {
    question: "Which element shows maximum catenation?",
    options: ["Silicon", "Carbon", "Sulfur", "Phosphorus"],
    answer: "Carbon"
  },
  {
    question: "Which law states that equal volumes of gases contain equal number of molecules?",
    options: ["Boyle's law", "Charles's law", "Avogadro’s law", "Dalton’s law"],
    answer: "Avogadro’s law"
  },
  {
    question: "What is the IUPAC name of CH3COOH?",
    options: ["Formic acid", "Ethanoic acid", "Methanoic acid", "Acetic acid"],
    answer: "Ethanoic acid"
  },
  {
    question: "Which of the following has resonance structures?",
    options: ["CO3²⁻", "NaCl", "H2O", "CH4"],
    answer: "CO3²⁻"
  },
  {
    question: "Which reagent is used in the test for unsaturation?",
    options: ["Fehling’s solution", "Benedict’s solution", "Baeyer's reagent", "Tollens' reagent"],
    answer: "Baeyer's reagent"
  },
  {
    question: "Which organic compound has a fruity smell?",
    options: ["Ketones", "Alcohols", "Esters", "Amines"],
    answer: "Esters"
  },
  {
    question: "Which vitamin contains cobalt?",
    options: ["Vitamin B1", "Vitamin B12", "Vitamin C", "Vitamin D"],
    answer: "Vitamin B12"
  },
  {
    question: "Which complex ion is used in the detection of Fe³⁺ ions?",
    options: ["[Fe(CN)6]³⁻", "[Fe(SCN)]²⁺", "[Fe(OH)3]", "[Fe(NO3)3]"],
    answer: "[Fe(SCN)]²⁺"
  }
]

        }
}



// ✅ Get filtered questions
let questions = quizdata[selectedSubject]?.[selectedDifficulty];

if (!questions || questions.length === 0) {
  document.querySelector(".question-container").innerHTML =
    "<p>No questions found for this subject and difficulty level.</p>";
  throw new Error("No questions found.");
}

// ✅ Shuffle questions
questions = questions.sort(() => Math.random() - 0.5);

let currentQuestionIndex = 0;
let score = 0;

// ✅ Display a question
function questionDisplay() {
  let currentQuestion = questions[currentQuestionIndex];
  document.getElementById("question-title").textContent = currentQuestion.question;

  // Update progress bar
  const progressPercent = ((currentQuestionIndex + 1) / questions.length) * 100;
  document.getElementById("progress-label").textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
  document.getElementById("progressBarFill").style.width = `${progressPercent}%`;

  // Clear previous options
  const optionList = document.getElementById("options-list");
  optionList.innerHTML = "";

  currentQuestion.options.forEach((option) => {
    const li = document.createElement("li");
    li.textContent = option;
    li.addEventListener("click", () => selectedAnswer(li, option, currentQuestion.answer));
    optionList.appendChild(li);
  });

  document.getElementById("prev-btn").disabled = currentQuestionIndex === 0;
  document.getElementById("next-btn").textContent =
    currentQuestionIndex === questions.length - 1 ? "Finish" : "Next ➡️";

  updateNavigationButtons();
  updateScore();
}

// ✅ Handle option selection
function selectedAnswer(selectedLi, selectedOption, correctAnswer) {
  const allOptions = document.querySelectorAll("#options-list li");
  allOptions.forEach((li) => (li.style.pointerEvents = "none"));

  if (selectedOption === correctAnswer) {
    selectedLi.style.backgroundColor = "green";
    score++;
  } else {
    selectedLi.style.backgroundColor = "red";
    allOptions.forEach((li) => {
      if (li.textContent === correctAnswer) li.style.backgroundColor = "green";
    });
  }

  updateScore();
}

// ✅ Update score
function updateScore() {
  if (currentQuestionIndex >= questions.length) {
    document.getElementById("score-display").style.display = "block";
    document.getElementById("score-display").innerHTML = `Score: ${score}/${questions.length}`;
  }
}

// ✅ Navigation buttons
document.getElementById("next-btn").addEventListener("click", () => {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    questionDisplay();
  } else {
    showResult();
  }
});

document.getElementById("prev-btn").addEventListener("click", () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    questionDisplay();
  }
});

function updateNavigationButtons() {
  document.getElementById("prev-btn").style.display = currentQuestionIndex === 0 ? "none" : "inline-block";
  document.getElementById("next-btn").textContent =
    currentQuestionIndex === questions.length - 1 ? "Finish" : "Next";
}

// ✅ Show result screen
function showResult() {
  localStorage.setItem("finalScore", score);
  localStorage.setItem("totalQuestions", questions.length);
  window.location.href = "result.html";
}

// ✅ Restart
function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  document.querySelector(".next-btn").style.display = "inline-block";
  questionDisplay();
}

// ✅ Dark Mode Toggle
function toggleDarkMode() {
  const body = document.body;
  const toggleBtn = document.getElementById("theme-toggle");

  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀️ Light Mode";
    localStorage.setItem("theme", "dark");
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
    localStorage.setItem("theme", "light");
  }
}

// ✅ Apply saved theme on load
window.onload = function () {
  const savedTheme = localStorage.getItem("theme");
  const toggleBtn = document.getElementById("theme-toggle");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    toggleBtn.textContent = "☀️ Light Mode";
  } else {
    document.body.classList.remove("dark-mode");
    toggleBtn.textContent = "🌙 Dark Mode";
  }

  // Load first question
  questionDisplay();
};
