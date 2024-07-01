function App() {
  const nombre = "Pedrito";
  if (nombre) {
    return <h1>Hola {nombre}</h1>;
  }
  return <h1>Hola Mundillo</h1>;
}

export default App;
