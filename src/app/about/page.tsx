///
//// test-Sass
import variables from '@/styles/variables.module.scss'


const AboutPage = () => {
  return (
    <div>
        <section>
            <h1 style={{color:variables.secondaryColor}}>Hello, Lucca Basto</h1>
            <p>Essa é sua aboutPage</p>
        </section>

        <div
            className="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden"
            style={{ paddingTop: "5%" }}>
          <iframe width={560} height={315} src="https://www.youtube.com/embed/nFYwcndNuOY?si=QRoNL2y-pRCrHVco"
          title="Pitch Solutuion"
          allow="accelerometer; autoplay; clipboard-write;"
          referrerPolicy="strict-origin-when-cross-origin"/>
        </div>

    </div>
  )
}

export default AboutPage
