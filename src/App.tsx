import { useState } from 'react';
import { Tweet } from './components/Tweet';

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
      {tweets.map((tweet)=>{
        return <Tweet text={tweet}/>;
      })}
      <input type="text" name="bla" id="tweetar" />
      <button onClick={adicionarTweet}>Adicionar tweet</button>
    </div>
  );
}

export default App;
