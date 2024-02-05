import "@Src/bootstrep";
import { scenes } from "@Src/global";
import ArenaScene from "./Scenes/ArenaScene";
import MenuSecene from "./Scenes/MenuScene";

scenes.add(ArenaScene);
scenes.add(MenuSecene);

scenes.use("arena");
