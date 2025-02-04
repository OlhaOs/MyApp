import React, { useDebugValue, useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import AvatarPlace from '../../src/components/AvatarPlace';
import bgImage from '../../assets/images/Photo BG.png';
import { colors } from '../../styles/global';
import img1 from '../../assets/images/Content Block 2.jpg';
import img2 from '../../assets/images/Content Block.jpg';
import img3 from '../../assets/images/Content Block 3.jpg';
import Comment from '../../assets/icons/Comment';
import Like from '../../assets/icons/Like';
import LocationIcon from '../../assets/icons/LocationIcon';
import LogOut from '../../assets/icons/LogOut';
import IconPlus from '../../assets/icons/PlusInCircle';
import avatar from '../../assets/images/avatar.jpg';
import { logoutDB } from '../utils/auth';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../utils/firestore';

export default function ProfileScreen({ navigation }) {
  const [postData, setPostData] = useState(null);
  const user = useSelector(state => state.user.userInfo);

  const dispatch = useDispatch();

  const onComment = () => {
    navigation.navigate('Comment');
  };
  const onMap = () => {
    navigation.navigate('Map', { latitude, longitude })
  };


  useEffect(() => {

    const fetchPostData = async () => {
      if (user?.uid) {
        const post = await getPosts(user.uid);
        setPostData(post);
      }
    };

    fetchPostData();
  }, [user?.uid]);

  if (!postData) {
    return (
      <View style={styles.container}>
        <Text>Завантаження...</Text>
      </View>
    );
  }

  const { name: displayName, email, photoURL } = user || {};

  const { titlePhoto, locationName, photoUri, latitude, longitude } = postData;


  return (
    <ScrollView
      style={styles.wrapper}
      contentContainerStyle={styles.contentContainer}
    >
      <ImageBackground source={bgImage} resizeMode='cover' style={styles.image}>
        <View style={styles.containerProfile}>
          <AvatarPlace
            icon={
              <IconPlus
                style={{
                  transform: [{ rotate: '45deg' }],
                }}
                fill={colors.white}
                stroke={colors.text_gray}
                plusColor={'yellow'}
              />
            }
            isAvatar={avatar}
          />

          <View style={styles.iconLogOut}>
            <LogOut onPress={() => logoutDB(dispatch)} />
          </View>
          <Text style={styles.titleText}>{displayName}</Text>
          {postData && (
            <View style={styles.cardContainer}>
              <View style={styles.imageContainer}>
                <Image source={{ uri: photoUri }} style={styles.image} />
              </View>
              <Text style={styles.smallText}>{titlePhoto}</Text>
              <View style={styles.detailsContainer}>
                <View style={styles.details}>
                  <View style={styles.comment}>
                    <TouchableOpacity onPress={onComment}>
                      <Comment fill='none' stroke={colors.border_gray} />
                    </TouchableOpacity>
                    <Text>0</Text>
                  </View>
                </View>

                <TouchableOpacity onPress={onMap} style={styles.comment}>
                  <LocationIcon />
                  <Text style={styles.textLocation}>{locationName}</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          <View style={styles.cardContainer}>
            <View style={styles.imageContainer}>
              <Image source={img1} style={styles.image}></Image>
            </View>
            <Text style={styles.smallText}>Ліс</Text>
            <View style={styles.detailsContainer}>
              <View style={styles.details}>
                <View style={styles.comment}>
                  <TouchableOpacity onPress={onComment}>
                    <Comment />
                  </TouchableOpacity>
                  <Text>8</Text>
                </View>
                <View style={styles.comment}>
                  <Like />
                  <Text>153</Text>
                </View>
              </View>

              <View style={styles.comment}>
                <LocationIcon />
                <Text>Ukraine</Text>
              </View>
            </View>
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.imageContainer}>
              <Image source={img2} style={styles.image}></Image>
            </View>
            <Text style={styles.smallText}>Захід на Чорному морі</Text>
            <View style={styles.detailsContainer}>
              <View style={styles.details}>
                <View style={styles.comment}>
                  <TouchableOpacity onPress={onComment}>
                    <Comment />
                  </TouchableOpacity>
                  <Text>3</Text>
                </View>
                <View style={styles.comment}>
                  <Like />
                  <Text>200</Text>
                </View>
              </View>

              <View style={styles.comment}>
                <LocationIcon />
                <Text>Ukraine</Text>
              </View>
            </View>
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.imageContainer}>
              <Image source={img3} style={styles.image}></Image>
            </View>
            <Text style={styles.smallText}>Старий будиночок у Венеції</Text>
            <View style={styles.detailsContainer}>
              <View style={styles.details}>
                <View style={styles.comment}>
                  <TouchableOpacity onPress={onComment}>
                    <Comment />
                  </TouchableOpacity>
                  <Text>50</Text>
                </View>
                <View style={styles.comment}>
                  <Like />
                  <Text>200</Text>
                </View>
              </View>

              <View style={styles.comment}>
                <LocationIcon />
                <Text>Italy</Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  //   contentContainer: { flexGrow: 1 },
  containerProfile: {
    position: 'relative',
    alignItems: 'center',
    marginTop: 147,
    width: '100%',

    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: 'white',

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  userFoto: {
    width: 120,
    height: 120,

    backgroundColor: colors.light_gray,
    borderRadius: 16,

    position: 'absolute',
    top: -60,
    left: '50%',
    transform: [{ translateX: -60 + 16 }],
  },
  titleText: {
    marginTop: 46,
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
  },
  smallText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: colors.blue,
  },
  iconLogOut: {
    width: '100%',
    alignItems: 'flex-end',
    paddingTop: 22,
  },
  cardContainer: {
    width: '100%',
    gap: 8,
    marginTop: 32,
  },
  imageContainer: {
    height: 240,
  },
  image: {
    width: '100%',
    height: 240,
    borderRadius: 8
  },
  commentContainer: {
    gap: 16,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  details: {
    flexDirection: 'row',
    gap: 24,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  iconPlus: {
    fill: colors.white,
  },
});
