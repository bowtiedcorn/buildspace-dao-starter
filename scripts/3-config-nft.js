import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x7AFbACda76D242341Ec8C9BaDCf45ab8e8CB453E",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Og BowTiedCorn",
        description: "This NFT will give you access to CornDao! Listen!",
        image: readFileSync("scripts/assets/bowtiedcorn.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()