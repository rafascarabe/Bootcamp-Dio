
import Button from './components/Button';
function App() { //App() = componente
  return ( // o JSX só retorna 1 componente
    <>
        <div className="App">
                {/* Componente sempre criado com letra maiuscula */}
          <h1>Hello World!</h1>
          <Button title="ENTRAR"/> 
          <Button title="SAIR"/> 
          <Button title="SALVAR"/> 
          <Button title="EXCLUIR"/> 
                {/* sempre fechar as tags - mesmo sem conteudo */}
        </div>
        <p>LEMBRETE: o JSX só retorna 1 componente</p>
    </>
  );
}

export default App;
