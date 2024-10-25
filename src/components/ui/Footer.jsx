import GradientContainer from "./GradientContainer"
import FAQ from "./FAQ"

function Footer() {
  return (
    <>
      <GradientContainer>
        <div className="py-32 px-16 text-center">
          <h3>Common Queries Answered</h3>
          <FAQ />
          <footer className="">Vyson 2024</footer>
        </div>
      </GradientContainer>
    </>
  )
}

export default Footer
