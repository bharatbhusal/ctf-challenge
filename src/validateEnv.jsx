import { cleanEnv, str } from "envalid";

export default cleanEnv(process.env, {
    REACT_APP_INFURA_API_KEY: str(),
    REACT_APP_PRIVATE_KEY: str(),
});