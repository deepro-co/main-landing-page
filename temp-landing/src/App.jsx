import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';


function Box(props) {
  const meshRef = useRef();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame((state, delta) => {
    // Rotate the mesh every frame
    meshRef.current.rotation.x += delta;
    meshRef.current.rotation.y += delta;
  });

  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={1.2}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'green' : 'purple'} />
    </mesh>
  );
}

function App() {
  return (
    <div style = {{width: 'screen', height: '100vh'}} className='bg-slate-900'>
    
    <Canvas position={[0, 0, 0]}>
    
      <ambientLight intensity={Math.PI /2} />
      <spotLight position={[10, 10, 10]} angle={0.10} penumbra={1} decay={0} intensity={Math.PI/2} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Box position={[0, 1, 0]} />
      
      
    </Canvas>
    <h1 className='text-slate-600 text-[1.5em] my-[-14em] mx-auto max-w-fit justify-items-center'>Something Amazing is Coming Soon</h1>
    <h1 className='text-slate-400 text-[1em] my-[34em] mx-auto max-w-fit justify-items-center'><span className='text-purple-500'>deepro.co </span>Technologies | 2024</h1>
    
    </div>
    
  );
}

export default App;
