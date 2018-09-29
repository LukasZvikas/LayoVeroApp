import { SecureStore } from "expo";
import NavigationService from "../../NavigationService";

export default async () => {
  await SecureStore.getItemAsync("jwt").then(token => {
    if (token != null) NavigationService.navigate("afterAuth");
  });
};
