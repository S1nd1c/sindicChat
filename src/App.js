import './App.css';
import ChatView from './components/Chat/ChatView';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="App w-screen h-screen flex">
      <SideBar />
      <ChatView />
    </div>
  );
}

export default App;
