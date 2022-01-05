import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [question, setQuestion] = useState(data)
  return (
    <main>
      <div className='container'>
        <h3>Questions And Answers About Login</h3>
        <section className='info'>
          {
            question.map(question => (
              <SingleQuestion
                key={question.id}
                {...question} />
            ))
          }
        </section>
      </div>
    </main>
  )
}

export default App;
