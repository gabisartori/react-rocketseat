import { useState } from 'react';
import { Tweet } from './components/Tweet';
import { Teste } from './components/Teste';
import './app.css';

function App() {
// <Component atributos=qualquer_coisa />
  function adicionarTweet(){
    const input = document.getElementById('tweetar') as HTMLInputElement;
    const value = input?.value;
    setTweets([...tweets, value]);
  };
  const [tweets, setTweets] = useState<string[]>([
    'Oi',
    'Tudo bem?',
    'Tudo sim',
    'Que bom então'
  ]);

  return (
    <div>
      <div id='css'>Essa div foi estilizada com um arquivo css</div>
      <Teste />
      <input 
        type="text"
        name="bla"
        id="tweetar"
        style={{
          marginLeft: '5px',
        }}
        />
      <button onClick={adicionarTweet}>Adicionar tweet</button>
      {tweets.map((tweet)=>{
        return <Tweet text={tweet}/>;
      })}
    </div>
  );
}

export default App;
