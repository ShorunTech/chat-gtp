import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      
        <section className="chatbox">
        <div className="chat-log">
            <div className="chat-message chatgpt">
              <div className="chat-message-center">

              
                  <div className="avatar">
                       
                  </div>
              <div className="message">
                Hello World
              </div>
            </div>
            </div>
            <div className="chat-message chatgpt">
              <div className="chat-message-center">

              
                  <div className="avatar">
                       
                  </div>
              <div className="message">
                I am AI
              </div>
            </div>
            </div>
          </div>
        <div className="chat-input-holder">
          <textarea
          rows="1" className="chat-input-textarea"
          placeholder="Type your message here">

          </textarea>
        </div>
        </section>
   
    </div>
  );
}

export default App;
