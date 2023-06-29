import messages_en from "./translations/en.json";
import GrievanceMainMenu from "./menus/GrievanceMainMenu";

const DEFAULT_CONFIG = {
  "translations": [{ key: "en", messages: messages_en }],
  'core.MainMenu': [GrievanceMainMenu],
}

export const GrievanceModule = (cfg) => {
  return { ...DEFAULT_CONFIG, ...cfg };
}