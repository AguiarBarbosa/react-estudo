//CSS
import './App.css'

//REACT
import { useState, useEffect, useCallback } from 'react'
//DATA
import { wordsList } from "./data/words"

//COMPONENTS
import StartScreen from './Components/StartScreen'
import Game from './Components/Game'
import GameOver from './Components/GameOver'

//ESTÁGIOS
const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" }
]
  const guessesQty = 3

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([])

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(guessesQty)
  const [score, setScore] = useState(0)
  
  

 
  
  const pickWordAndCategory = useCallback(() => {
    //PICK A RANDOM CATEGORY
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]


    //PICK A RANDOM WORD
    const word = words[category][Math.floor(Math.random() * words[category].length)]
   

    return { word, category }
  },[words]);

  //START
  const startGame = useCallback(() => {
  
    
    //CLEAR ALL LETTERS
    clearLetterStates()
    //PICK WORD AND PICK CATEGORY
    const { word, category } = pickWordAndCategory();
    
    //CREATE A ARRAY OF LETTERS
    let wordLetters = word.split("")
    wordLetters = wordLetters.map((l) => l.toLowerCase())
    
    //FILL STATES
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)
    setGameStage(stages[1].name)
    
  },[pickWordAndCategory]);

  // PROCESS THE LETTER INPUT
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase()

    if (guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }

    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters, normalizedLetter,
      ])
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters, normalizedLetter,
        setGuesses(guesses-1)
      ])
    }
    


  }
const clearLetterStates = () =>{
  setGuessedLetters([])
  setWrongLetters([])
};

  useEffect(()=>{
    if(guesses<=0){
      //reset all states
      setGameStage(stages[2].name)
      clearLetterStates()
    }

  },[guesses])


  // CHECK WIN CONDITION
  useEffect(()=> {

    const uniqueLetters = [...new Set(letters)]
    if (guessedLetters.length === uniqueLetters.length){
      setScore((actualScore)=> actualScore += 100)
      startGame()
    }
  }, [guessedLetters, letters, startGame])
  // RESTART THE GAME
  const retry = () => {
    setScore(0)
    setGuesses(guessesQty)
    setGameStage(stages[0].name)
  }
  

  return (
    <>
      <div className="App">
        {gameStage === "start" && <StartScreen startGame={startGame} />}
        {gameStage === "game" && <Game verifyLetter={verifyLetter} pickedWord={pickedWord} pickedCategory={pickedCategory} letters={letters} guessedLetters={guessedLetters} wrongLetters={wrongLetters} guesses={guesses} score={score} />}
        {gameStage === "end" && <GameOver retry={retry} score={score}/>}
      </div>
    </>
  )
}

export default App
