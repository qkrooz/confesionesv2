import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
class StyleSheetFactory {
    static getSheet(realwidth) {
        return StyleSheet.create({
            timeBar: {
                width: realwidth,
                // flex: 1,
                position: 'absolute',
                zIndex: 1010,
                top: 0,
                height: 10,
                backgroundColor: 'black',
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10
            }
        })
    }
}
const TimeBar = () => {
    // Getting CurrentTime
    const [updateWidth, setupdateWidth] = useState(100);

    useEffect(
        () => {
            // Definition of checkpoints
            const dayStart = "01 Jan 2000 00:00:00";
            const dayEnd = "01 Jan 2000 23:59:59";
            const resetTime = "01 Jan 2000 02:00:00";
            let RemainingTime;
            const pivot = "01 Jan 2000";
            // Definition of the Hour
            var dt = new Date();
            var hours = dt.getHours().toString().padStart(2, '0');
            var minutes = dt.getMinutes().toString().padStart(2, '0');
            var seconds = dt.getSeconds().toString().padStart(2, '0');
            // Definition of the currentTime
            let currentTime = pivot + " " + hours + ":" + minutes + ":" + seconds;
            // Definition of the RemainingTime in Unix
            if (Date.parse(currentTime) >= Date.parse(dayStart) &&
                Date.parse(currentTime) <= Date.parse(resetTime)) {
                RemainingTime = Date.parse(resetTime) - Date.parse(currentTime);
            } else if (Date.parse(currentTime) >= Date.parse(resetTime) &&
                Date.parse(currentTime) <= Date.parse(dayEnd)) {
                RemainingTime = Date.parse(dayEnd) - Date.parse(currentTime) + 7200000;
            }
            RemainingTime = RemainingTime - 1000;
            let tempWidth1 = (RemainingTime * 100) / 86400000;
            setupdateWidth(tempWidth1);
            const interval = setInterval(() => {
                setupdateWidth(updateWidth => updateWidth - 0.069)
                if (updateWidth === 0) {
                    clearInterval(interval);
                }
            }, 60000);
            return () => clearInterval(interval);
            // Actualizacion del tiempo
            // const interval = setInterval(() => {
            //     RemainingTime = RemainingTime - 1000;
            //     let tempWidth = (RemainingTime * 100) / 86400000;
            //     setupdateWidth(updateWidth => updateWidth - tempWidth);
            //     console.log(updateWidth);
            // }, 500);
            // return () => clearInterval(interval);
        }, []);
    let realwidth = updateWidth + '%';
    let myStyleSheet = StyleSheetFactory.getSheet(realwidth);
    return (<View style={myStyleSheet.timeBar}></View>);
}
export default TimeBar;
