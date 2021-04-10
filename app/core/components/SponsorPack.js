import {hierarchy, Pack} from "@visx/hierarchy"
import {ParentSize} from "@visx/responsive"
import React from "react"

const sponsors = [
  {
    name: "Fauna",
    href:
      "https://dashboard.fauna.com/accounts/register?utm_source=BlitzJS&utm_medium=sponsorship&utm_campaign=BlitzJS_Sponsorship_2020",
    imageUrl: "https://raw.githubusercontent.com/blitz-js/blitz/canary/assets/Fauna_Logo_Blue.png",
    tier: 2,
    cost: 500,
  },
  {
    name: "Render",
    href:
      "https://render.com/?utm_source=BlitzJS&utm_medium=sponsorship&utm_campaign=BlitzJS_Sponsorship_2020",
    imageUrl:
      "https://raw.githubusercontent.com/blitz-js/blitz/canary/assets/render-logo-color2.png",
    tier: 3,
    cost: 250,
  },
  {
    name: "Andreas",
    href: "https://andreas.fyi/",
    imageUrl: "https://raw.githubusercontent.com/blitz-js/blitz/canary/assets/andreas.jpg",
    tier: 4,
    cost: 100,
  },
  {
    name: "Robert Malko",
    href: "https://github.com/malkomalko",
    imageUrl: "https://raw.githubusercontent.com/blitz-js/blitz/canary/assets/rob_blitz.jpg",
    tier: 4,
    cost: 100,
  },
  {
    name: "React Bricks",
    href:
      "https://reactbricks.com/?utm_source=blitzjs&utm_medium=sponsorship&utm_campaign=blitzjs_sponsorship",
    imageUrl: "https://raw.githubusercontent.com/blitz-js/blitz/canary/assets/reactbricks_icon.svg",
    tier: 4,
    cost: 100,
  },
  {
    name: "Digsas",
    href:
      "https://digsas.com/?utm_source=blitzjs&utm_medium=sponsorship&utm_campaign=blitzjs_sponsorship",
    imageUrl: "https://raw.githubusercontent.com/blitz-js/blitz/canary/assets/digsas.svg",
    tier: 4,
    cost: 100,
  },
  {
    name: "userTrack",
    href: "https://www.usertrack.net/?ref=blitzjs_web",
    imageUrl: "https://i.imgur.com/UDBeazC.png",
    tier: 4,
    cost: 100,
  },
]

const pack = {
  children: sponsors,
  name: "root",
  radius: 0,
  distance: 0,
}

export const SponsorPack = () => {
  const root = React.useMemo(
    () =>
      hierarchy(pack)
        .sum((d) => d?.cost * d?.cost)
        .sort((a, b) => b.data.cost - a.data.cost),
    [],
  )

  return (
    <ParentSize>
      {({width}) => {
        return width < 10 ? null : (
          <div
            style={{
              width,
              height: width,
              position: "relative",
            }}
          >
            <style
              dangerouslySetInnerHTML={{
                __html: `
              .spon-link {
                transition: all .2s ease;
                transform: translate(-50%, -50%);
              }
              .spon-link:hover {
                z-index: 10;
                transform: translate(-50%, -50%) scale(1.1);
              }
              .spon-link:hover .spon-tooltip {
                opacity: 1;
              }
            `,
              }}
            />
            <Pack root={root} size={[width, width]} padding={width * 0.1}>
              {(packData) => {
                const circles = packData.descendants().slice(1) // skip first layer
                return (
                  <div>
                    {[...circles].reverse().map((circle, i) => {
                      const tooltipX = circle.x > width / 2 ? "left" : "right"
                      const tooltipY = circle.y > width / 2 ? "top" : "bottom"

                      return (
                        <a
                          key={`circle-${i}`}
                          href={circle.data.href}
                          className="spon-link bg-off-white dark:bg-white absolute shadow-lg rounded-full z-0"
                          style={{
                            left: circle.x,
                            top: circle.y,
                            width: circle.r * 2,
                            height: circle.r * 2,
                          }}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <div
                            key={`circle-${i}`}
                            className="absolute bg-no-repeat bg-center bg-contain rounded-sm"
                            style={{
                              left: "50%",
                              top: "50%",
                              transform: "translate(-50%, -50%)",
                              width: circle.data.cost > 100 ? "80%" : "50%",
                              height: circle.data.cost > 100 ? "80%" : "50%",
                              backgroundImage: `url(${circle.data.imageUrl})`,
                            }}
                          />
                          <div
                            className={
                              `spon-tooltip absolute
                          text-sm
                          bg-gray-900 text-white p-2 pointer-events-none
                          transform opacity-0
                          shadow-xl rounded-lg
                          flex flex-col items-center ` +
                              (tooltipX === "left"
                                ? `left-1/4 -translate-x-full`
                                : `right-1/4 translate-x-full`) +
                              " " +
                              (tooltipY === "top"
                                ? `top-1/4 -translate-y-full`
                                : `bottom-1/4 translate-y-full`)
                            }
                          >
                            <p className="whitespace-nowrap font-bold">{circle.data.name}</p>
                            <p className="whitespace-nowrap">${circle.data.cost} / month</p>
                          </div>
                        </a>
                      )
                    })}
                  </div>
                )
              }}
            </Pack>
          </div>
        )
      }}
    </ParentSize>
  )
}
