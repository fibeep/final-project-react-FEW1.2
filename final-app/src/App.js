import './App.css';
import Canvas from '../src/components/Canvas/Canvas'

const draw = (ctx) => {
  // Insert your canvas API code to draw an image
  ctx.beginPath();
  ctx.rect(20, 40, 50, 50);
  ctx.fillStyle = "#FF0000";
  ctx.fill();
  ctx.closePath();
};

function App() {
  return <Canvas draw={draw} height={480} width={320} />;
}

export default App;
