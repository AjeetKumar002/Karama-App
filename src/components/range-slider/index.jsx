import {View, Text} from 'react-native';
import React from 'react';
import RnRangeSlider from 'rn-range-slider';

export default function RangeSlider() {
  return (
    <View>
      <View>
        <RnRangeSlider
            // style={styles.slider}
            min={0}
            max={100}
            step={1}
            floatingLabel
            renderThumb={renderThumb}   
            renderRail={renderRail}
            renderRailSelected={renderRailSelected}
            renderLabel={renderLabel}
            renderNotch={renderNotch}
            low={this.state.low}
            high={this.state.high}
            onValueChanged={handleValueChange}
        />
      </View>
    </View>
  );
}
