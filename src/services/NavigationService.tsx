import { navigationRef } from "../navigation/AppNavigation";

export function navigate(name: string, params?: object) {
  navigationRef.current?.navigate(name, params);
}

export default {
  navigate
}