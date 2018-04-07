import {version} from '../package.json';


export default class Starship {
    static get version(): string {
        return version;
    }
}
