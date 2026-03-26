import Beams from './Beams'
import ShinyText from './ShinyText'
import logo from '../assets/logo1.png'

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

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <div className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm text-white/90 backdrop-blur-md shadow">
          <img src={logo} className="mr-2 h-6 w-6" alt="logo" />
          <ShinyText
            text="• Tuleva ohjelmistokehittäjä"
            speed={2.85}
            color="#868686"
            shineColor="#ffffff"
            spread={120}
          />
        </div>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
          Niilo Räisänen
        </h1>
      </div>
    </section>
  )
}

export default Front