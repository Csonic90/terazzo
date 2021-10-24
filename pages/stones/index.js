import Typewriter from 'typewriter-effect';



export default function Gallery() {
    return (
      <>
        <Typewriter
        options={{
          strings: ['NAGROBKI', 'SCHODY', 'PARAPETY', 'NAGROBKI SCHODY PARAPETY'],
          autoStart: true,
          loop: false,
        }}
      />
      <Typewriter
  onInit={(typewriter) => {
    typewriter.typeString('NAGROBKI ')
      .pauseFor(1500)
      .typeString('PARAPETY')
      .pauseFor(500)
      .deleteChars(8)
      .pauseFor(1500)
      .typeString('SCHODY PARAPETY')
      .start();
  }}
/></>
    )
  }