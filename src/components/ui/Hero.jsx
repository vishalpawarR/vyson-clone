import Button from "./Button"
import { CheckBadgeIcon } from "@heroicons/react/24/solid"

function Hero() {
  return (
    <>
      <div className="flex">
        <div>
          <div className="flex">
            <CheckBadgeIcon className="w-5" />
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
            src="/hero-img.avif"
            alt="Hero image showing a developer"
          />
        </div>
      </div>
    </>
  )
}

export default Hero
