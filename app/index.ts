import { scenes } from "@Src/index";
import ArenaScene from "./Scenes/ArenaScene";
import MenuSecene from "./Scenes/MenuScene";

scenes.add(new ArenaScene());
scenes.add(new MenuSecene());

scenes.use("menu");
