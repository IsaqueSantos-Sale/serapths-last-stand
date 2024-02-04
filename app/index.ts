import { scenes } from "@Src/index";
import ArenaScene from "./Scenes/ArenaScene";
import MenuSecene from "./Scenes/MenuScene";

scenes.add(ArenaScene);
scenes.add(MenuSecene);

scenes.use("arena");
