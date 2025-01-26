import MainContent from './components/MainContent';
import logo from './assets/images/logo.png';

function App() {
  const title = 'Learn & Master GitHub Actions';
  return (
    <>
      <header>
        <div id="logo-img">
          <img src={logo} />
        </div>
        <h1>Learn & Master GitHub Actions</h1>
        {title}
      </header>
      <MainContent />
    </>
  );
}

export default App;
