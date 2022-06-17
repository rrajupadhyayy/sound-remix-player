import Draggable from 'components/Draggable/Draggable';
import SoundButton from 'components/SoundButton/SoundButton';
import globalStyles from 'config/globalStyles';
import { staticText } from 'config/staticText';
import useLoader, { LoadingState } from 'hooks/useLoader';
import useSoundPlayer from 'hooks/useSoundPlayer';
import React from 'react';
import { Alert, Button, Image, Text, View } from 'react-native';
import { downloadLinks, SoundFileNames } from 'services/download.constants';
import { getScreenHeight } from 'utils/screen-size';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomSlider from 'components/Slider/Sider';

function HomePage() {
  const { loadingStatus, loaderFunction } = useLoader();
  const { playSound, stopSound, setSoundVolume } = useSoundPlayer({
    fileName: SoundFileNames.RAIN,
    downloadLink: downloadLinks.rain,
    loaderFunction,
  });
  const navIcon = MaterialCommunityIcons.getImageSourceSync('home', 24, 'blue');
  return (
    <View style={[globalStyles.container, globalStyles.alignCenter]}>
      <Text>
        {loadingStatus === LoadingState.LOADING
          ? 'loading'
          : staticText.appName}
      </Text>
      <MaterialCommunityIcons name="home" color={'red'} size={22} />
      <Image source={navIcon} style={{ height: 24, width: 24 }} />
      <CustomSlider
        // name="Price"
        // icon="ticket-percent-outline"
        // boundaryMin={0}
        // boundaryMax={99}
        // initVal={0}
      />
      {/* <SoundButton /> */}

      {/* <Button onPress={stopSound} title={'stop music'} />
      <Button onPress={playSound} title={'play music'} />
      <Button onPress={setSoundVolume} title={'change volume'} /> */}
    </View>
  );
}

export default HomePage;
