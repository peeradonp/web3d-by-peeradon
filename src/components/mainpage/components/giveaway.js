import { ContactShadows, Float, Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const GiveAway = () => {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 22.5], fov: 85 }} >
        <hemisphereLight groundColor="red" />
        <group position={[15, 0, 0]}  >
          <Float floatIntensity={10} rotationIntensity={4}  >
            <Html castShadow receiveShadow occlude="blending" transform>
              <iframe title="embed" width={700} height={500} src="https://maxolib.github.io/world/" frameBorder={0} />
            </Html>
            <Html scale={1} rotation={[0, 0, 0]} position={[0, 8, 1]} transform occlude>
              <div className="p-4 bg-black rounded-3xl bg-opacity-60 cursor-pointer"
                onClick={() => {
                  window.open("https://github.com/maxolib/world");
                }}>
                Interactive World
              </div>
            </Html>
          </Float>
        </group>
        <Float floatIntensity={10} rotationIntensity={4} >
          <Html castShadow receiveShadow occlude="blending" transform>
            {/* <iframe title="embed" width={700} height={500} src="https://web3d-by-peeradon.vercel.app/" frameBorder={0} /> */}
            <div className="relative bg-white">
              <img src='./preview.png' alt='' width={700} height={500} />
            </div>
          </Html>
          <Html scale={1} rotation={[0, 0, 0]} position={[0, 8, 1]} transform occlude>
            <div className="p-4 bg-black rounded-3xl bg-opacity-60 cursor-pointer"
              onClick={() => {
                window.open("https://github.com/peeradonp/web3d-by-peeradon");
              }}
            >
              Introduction to Interactive Web3D
            </div>
          </Html>
        </Float>
        <group position={[-15, 0, 0]}>
          <Float floatIntensity={10} rotationIntensity={4}  >
            <Html castShadow receiveShadow occlude="blending" transform>
              <iframe width={700} height={500} src="https://www.youtube.com/embed/THW5NpTiwgI" title="Introduction to Interactive Web3D" />
            </Html>
            <Html scale={1} rotation={[0, 0, 0]} position={[0, 8, 1]} transform occlude>
              <div className="p-4 bg-black rounded-3xl bg-opacity-60 cursor-pointer"
                onClick={() => {
                  window.open("https://github.com/Watinyun/ThreejsShowcase");
                }}
              >
                ThreejsShowcase
              </div>
            </Html>
          </Float>
        </group>
        <ContactShadows position={[0, -9, 0]} opacity={0.7} scale={40} blur={1} />
      </Canvas>
    </>
  );
}
export default GiveAway;