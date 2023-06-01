import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions'

class UserPermission {
    getCameraPermission = async () => {
        if (Constants.platform.ios) {
            const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status != "granted") {
                alert("we need permission to use your camera");
            }
        }
    }
}

export default new UserPermission();