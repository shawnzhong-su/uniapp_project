import {
    createSSRApp
} from "vue";
import App from "./App.vue";
import UniIcons from "@dcloudio/uni-ui/lib/uni-icons/uni-icons.vue";

export function createApp() {
    const app = createSSRApp(App);
    return {
        app,
    };

}

