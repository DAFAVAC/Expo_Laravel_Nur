import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions'

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        const permissionResult = await Permissions.askAsync(Permissions.CAMERA)
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
      if (Platform.OS !== 'web') {
        const permissionResult = await Permissions.askAsync(Permissions.CAMERA)
        if (permissionResult.status !== 'granted') {
          alert('no permissions to access camera!', [{ text: 'ok' }])
        return false
	    	}
      }
    })();
  }, []);




takeImage = async () => {
		// make sure that we have the permission

			// launch the camera with the following settings
			let image = await ImagePicker.launchCameraAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				allowsEditing: true,
				aspect: [4,3],
				quality: 1,
				base64: true,
			})
			// make sure a image was taken:
			if (!image.cancelled) {
          setImage(image.uri);
			}
		
	}







  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };



  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Take a foto" onPress={takeImage} />
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 400, height: 300 }} />}
    </View>
  );
}













//https://ichi.pro/es/react-native-tome-imagenes-y-carguelas-en-un-servidor-node-js-222296612337239



//https://docs.expo.io/versions/latest/sdk/imagepicker/