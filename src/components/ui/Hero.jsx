import Button from "./Button"
import starSVG from "../../assets/hero-img/star.svg"

function Hero() {
  console.log(starSVG)
  return (
    <>
      <div>
        <svg
          width="18"
          height="19"
          viewBox="0 0 18 19"
          fill="none"
          id="svg22051478_419"
        >
          <path
            d="M9 0.0853577L10.8469 4.01102L14.7851 2.19096L13.6765 6.38536L17.8633 7.52252L14.318 10.0231L16.7942 13.5854L12.4711 13.222L12.0782 17.5426L9 14.4854L5.92182 17.5426L5.52895 13.222L1.20577 13.5854L3.68204 10.0231L0.13673 7.52252L4.32346 6.38536L3.21491 2.19096L7.15309 4.01102L9 0.0853577Z"
            fill="#A9E8C2"
          ></path>
        </svg>

        <div>
          <div>
            <div
              class="svgContainer"
              style="width:100%;height:100%;aspect-ratio:inherit"
            >
              <svg
                style="width:100%;height:100%"
                viewBox="0 0 18 19"
                preserveAspectRatio="none"
              >
                <use href="#svg22051478_419"></use>
              </svg>
            </div>

            <p>Current cohort is full. Next cohort starts 15th November.</p>
          </div>
          <h1>
            Wasting Time on Bench? Hit a Career Plateau? It’s Not Too Late To
            Future-Proof Your Career, Yet.
          </h1>
          <Button>Secure Your Spot</Button>
          <hr />
          <p>
            Give us 1000 hours of your life. We'll make you a backend craftsman.
            No shortcuts. Just pure hands-on learning.
          </p>
        </div>
        <div>
          <img
            src="../../assets/hero-img/hero-img.avif"
            alt=""
          />
        </div>
      </div>
    </>
  )
}

export default Hero
