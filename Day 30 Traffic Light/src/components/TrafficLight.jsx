import { useEffect, useState } from "react";
import Light from "./Light";

function TrafficLight({ data }) {
  const displayOrder = getSortedDisplayOrder(data);
  const lightsOrder = getSortedLightsOrders(data);

  const [lightsInDisplayOrder, setLightsInDisplayOrder] =
    useState(displayOrder);
  const [lightsInOrder, setLightsInOrder] = useState(lightsOrder);
  const [activeLight, setActiveLight] = useState(lightsOrder[0]);

  //   console.log(activeLight)
  // console.log(lightsInDisplayOrder)

  function getSortedDisplayOrder(randomOrder) {
    return randomOrder.toSorted(function (a, b) {
      return a.displayOrder - b.displayOrder;
    });
  }

  function getSortedLightsOrders(randomOrder) {
    return randomOrder.toSorted(function (a, b) {
      return a.order - b.order;
    });
  }

  useEffect(() => {
    setTimeout(() => {
      const currentLightIndex = lightsInOrder.findIndex(
        (elem) => elem.color === activeLight.color
      );

      const nextLightIndex = currentLightIndex + 1;
      const nextLight = lightsInOrder[nextLightIndex] ?? lightsInOrder[0];

      setActiveLight(nextLight);
    }, activeLight.timeDuration);
  }, [activeLight]);

  return (
    <>
      <div className=" bg-black w-[max-content] ml-10 p-5 rounded-xl">
        {lightsInDisplayOrder.map((light) => {
          return (
            <Light
              key={light.color}
              color={light.color}
              activeColor={activeLight.color}
            />
          );
        })}
      </div>
    </>
  );
}

export default TrafficLight;
