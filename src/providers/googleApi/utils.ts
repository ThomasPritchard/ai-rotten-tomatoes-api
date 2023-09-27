import moment from "moment";
import "moment-duration-format";

class Utils {
    public static formatDuration(duration: string): string {
        // Current format: PT25M47S
        // Desired format: 25.47
        const timeStamp = duration.substring(2);
        let minutes = 0;
        let seconds = 0;

        const minutesIndex = timeStamp.indexOf("M");
        const secondsIndex = timeStamp.indexOf("S");

        if (minutesIndex !== -1) {
            minutes = Number(timeStamp.substring(0, timeStamp.indexOf("M")));
        }

        if (secondsIndex !== -1) {
            seconds = Number(
                timeStamp.substring(minutesIndex + 1, secondsIndex),
            );
        }

        const secondsToMinutes = moment
            .duration(seconds, "seconds")
            .asMinutes();

        const totalMinutes = minutes + secondsToMinutes;

        const formattedDuration = moment
            .duration(totalMinutes, "minutes")
            .format("mm.ss");

        return formattedDuration;
    }
}

export { Utils };
