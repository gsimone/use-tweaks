import React from "react";
import {
  EffectComposer,
  ChromaticAberration,
  Noise,
} from "react-postprocessing";

import { makeFolder, useTweaks } from "../../dist";

export default function Effects() {
  const { offset, opacity } = useTweaks("Effects", {
    ...makeFolder("Chromatic", { offset: { value: { x: 1, y: 1 } } }),
    ...makeFolder("Noise", { opacity: 0.1 }),
  });

  return (
    <EffectComposer>
      <ChromaticAberration
        // @ts-expect-error
        offset={[offset.x / 1000, offset.y / 1000]}
      />
      <Noise
        // @ts-expect-error
        opacity={opacity}
      />
    </EffectComposer>
  );
}
