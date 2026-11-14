import './App.css'
import {useState} from 'react'

function App() {
  const [num, setNum] = useState('')
  const [randomNumber, setRandomNumber] = useState('')
  const [score, setScore] = useState(0)
  const [result, setResult] = useState('')
  const [duplicateNum, setDuplicateNum] = useState('')

  return (
      <div className="bg-container">
        <p className="score">Score: {score}</p>
        <h1 className="digital-heading">
          Digital <span className="span">Duel</span>
        </h1>
        <p className='predictpara'>Predict . Match . Win</p>

        <div className="container">
          <div className="container-1">
            <p className='play'>How to Play:</p>
            <p className="para-1">
              Choose any didit from one to nine. When you predict, a random
              number is drawn. Match it the score rises - miss and it fails.
            </p>

            <p className="para-2">Choose Your Number:</p>

            <button className="btn" onClick={() => setNum(1)}>
              1
            </button>
            <button className="btn" onClick={() => setNum(2)}>
              2
            </button>
            <button className="btn" onClick={() => setNum(3)}>
              3
            </button>
            <button className="btn" onClick={() => setNum(4)}>
              4
            </button>
            <button className="btn" onClick={() => setNum(5)}>
              5
            </button>
            <button className="btn" onClick={() => setNum(6)}>
              6
            </button>
            <button className="btn" onClick={() => setNum(7)}>
              7
            </button>
            <button className="btn" onClick={() => setNum(8)}>
              8
            </button>
            <button className="btn" onClick={() => setNum(9)}>
              9
            </button>

            <p className="para-3">
              ------------------------------OR------------------------------
            </p>

            <div className="para-4">
              <p>{num}</p>
            </div>

            <button
              className="btn-1"
              onClick={() => {
                const number = Math.floor(Math.random() * 9) + 1
                setRandomNumber(number)
                setDuplicateNum(num)
                if (num === number) {
                  setScore(score + 1)
                  setResult('Correct Guess')
                } else {
                  setScore(score - 1)
                  setResult('Wrong Guess')
                }
              }}
            >
              Predict Number
            </button>

            <button
              className="btn-2"
              onClick={() => (
                setNum(''),
                setRandomNumber(''),
                setResult(''),
                setDuplicateNum('')
              )}
            >
              CLEAR
            </button>
          </div>

          <div className="container-2">
            <div className="container-3">
              <div className="para-5">
                <p className='result-label'>
                  Your Pick
                </p>
                <p className='result-label'>
                  {duplicateNum}
                </p>
              </div>

              <div className="para-5">
                <p className='result-label'>
                  Random Pick
                </p>
                <p className='result-label'>
                  {randomNumber}
                </p>
              </div>
            </div>

            <p className={num === randomNumber ? "para-6" : "para-7"}>{result}</p>
          </div>
        </div>
      </div>
  )
}


export default App

