import { scenes } from "@Src/index";
import ArenaScene from "./Scenes/ArenaScene";

const arena_scene = new ArenaScene();

scenes.add(arena_scene);

scenes.use("arena");
