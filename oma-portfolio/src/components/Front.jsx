import Beams from './Beams'

function Front() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">

      
      <div className="absolute inset-0">
        <Beams
          beamWidth={4}
          beamHeight={30}
          beamNumber={50}
          lightColor="#7e6aff"
          speed={0.5}
          noiseIntensity={4}
          scale={0.2}
          rotation={40}
        />
      </div>

      
  

    </section>
  )
}

export default Front