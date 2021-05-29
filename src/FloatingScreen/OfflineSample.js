import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {SUBMIT_FORM} from '../redux/action';

const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZjgxYjJhYjBmOTkxMzNjNmFhNDhjYTExM2ZjYTQwODgxZmZhMjU4MzM3Mzk0MzhmMmQ4ZTI2YzA4Mzg5MDUyY2IxZGJlNzhjMzg3MzhkNzciLCJpYXQiOiIxNjE2NDk0MTQ0LjI3MDA4MCIsIm5iZiI6IjE2MTY0OTQxNDQuMjcwMTAyIiwiZXhwIjoiMTY0ODAzMDE0NC4yNTM4NTQiLCJzdWIiOiIxNyIsInNjb3BlcyI6W119.nqNk7b8rQIfVIVsKjZ9Co4SOjtPZmrbp5HDS0rVEMz7oQOU2Hn8vjDAgqQAzwDxMQtDZSjPccU_6LNmx_BEvAdIK9h1YlZBdvLcMOgg9bjkUxv8SVBBu3Xv9x4BR6tlKd3hhyexo653zIB0sjbMibvYLdjamyD10s6_J56gXnDDFx6KK-CJc8kS9Zq9f5uw5n3d4MdwL7LdJi5yyqcz1gipcHqnT7z-XzmdwuQxkVWRnEltekoXmQ-g33y-tT-TV5fPIZcILeSiPJOg6WTteXSai7p5bm0kKzEkbdBNmtGosLwEmLcd9xrgT9WxtQAgmwVfh7-3rmlauL1YOstXJCt3oJEbGD_DIhTkVBVu-9cXTsgtgvzI5QSu7Ey4K0YOTjoLrTnS3S2ixIypTKSJD6LLqdPAHQgVos0FZTxohWT9fklP5sZYedTokpy2M-MI202pDyg33IbXU5Tp8-j1STKzVCEkFmqvxfNEwkyw3JLqSDCYFP1d65kR3VFogggp60RC0siDotFyQHSGkW7EALs8qffpSOZtfUMNqRac4rc5R1VW6CegpvWe4KzVI1szdYNfPN98pnm7cKHSIkyX8x5srkNd_LUHYZaIuWHAqkFoirzAc6QN6Phv_FSdwdXz8jYn6QnYzM0ph47M-u4bxfQu4NpBmjXQTH_Mi3ftOy18';

export default function OfflineSample(props) {
  const [quantity, setQuantity] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [type, setType] = useState('');
  const [productName, setProductName] = useState('');
  const netInfo = useNetInfo();
  // const [int, setInt] = useState(netInfo.isConnected);
  const dispatch = useDispatch();

  console.log('Internet', netInfo.isConnected);
  const {
    name1,
    email1,
    phone1,
    address1,
    type1,
    quantity1,
    // productName1,
    isEmpty,
  } = useSelector((state) => state.formReducer);

  console.log('@@@@@', name1);

  React.useEffect(() => {
    netInfo.isConnected &&
      isEmpty &&
      enquiryMethod({
        name1,
        email1,
        phone1,
        address1,
        type1,
        quantity1,
        // productName1,
      });
  }, [netInfo.isConnected]);

  const enquiryMethod = (data) => {
    try {
      fetch('https://uditsolutions.in/exporter/public/api/customers', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sub_category_name: 'first_product',
          name: data.name1,
          email: data.email1,
          address: data.address1,
          quantity: data.quantity1,
          type: data.type1,
          from: 'app',
          source: '',
          lead: '1',
          phone: data.phone1,
        }),
      })
        .then((response) => {
          console.log('response', response);
          if (response.status == 200) {
            alert('Data Posted');
            dispatch({
              type: SUBMIT_FORM,
              payload: {
                name1: '',
                email1: '',
                phone1: '',
                address1: '',
                type1: '',
                quantity1: '',
                // productName1: '',
                isEmpty: false,
              },
            });
          }
        })
        .catch((error) => {
          console.error('##########', error);
        });
    } catch (e) {
      console.log('error', e);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{fontFamily: 'aerial', fontSize: 18, marginBottom: 20}}>
        OFFLINE SYNC SAMPLE
      </Text>

      <View style={styles.modalView}>
        <TextInput
          style={{
            borderWidth: 2,
            borderColor: '#b0e0e6',
            width: '80%',
            borderRadius: 10,
            marginBottom: 5,
            backgroundColor: 'white',
          }}
          color="#3A1292"
          placeholder="Name"
          onChangeText={(name) => setName(name)}
          defaultValue={name}
        />
        <TextInput
          style={{
            borderWidth: 2,
            borderColor: '#b0e0e6',
            width: '80%',
            borderRadius: 10,
            marginBottom: 5,
            backgroundColor: 'white',
          }}
          color="#3A1292"
          placeholder="Email"
          onChangeText={(email) => setEmail(email)}
          defaultValue={email}
        />
        <TextInput
          style={{
            borderWidth: 2,
            borderColor: '#b0e0e6',
            width: '80%',
            borderRadius: 10,
            marginBottom: 5,
            backgroundColor: 'white',
          }}
          color="#3A1292"
          placeholder="Phone No"
          keyboardType="phone-pad"
          onChangeText={(phone) => setPhone(phone)}
          defaultValue={phone}
        />
        <TextInput
          style={{
            borderWidth: 2,
            borderColor: '#b0e0e6',
            width: '80%',
            borderRadius: 10,
            marginBottom: 5,
            backgroundColor: 'white',
          }}
          color="#3A1292"
          placeholder="Location"
          onChangeText={(location) => setAddress(location)}
          defaultValue={address}
        />

        <TextInput
          style={{
            borderWidth: 2,
            borderColor: '#b0e0e6',
            width: '80%',
            borderRadius: 10,
            marginBottom: 5,
            backgroundColor: 'white',
          }}
          color="#3A1292"
          placeholder="Type"
          onChangeText={(type) => setType(type)}
          defaultValue={type}
        />
        <TextInput
          style={{
            borderWidth: 2,
            borderColor: '#b0e0e6',
            width: '80%',
            borderRadius: 10,
            marginBottom: 5,
            backgroundColor: 'white',
          }}
          color="#3A1292"
          placeholder="Quantity"
          keyboardType="numeric"
          onChangeText={(quantity) => setQuantity(quantity)}
          defaultValue={quantity}
        />
        {/* 
        <TextInput
          style={{
            borderWidth: 2,
            borderColor: '#b0e0e6',
            width: '80%',
            borderRadius: 10,
            marginBottom: 5,
            backgroundColor: 'white',
            fontWeight: 'bold',
            fontSize: 20,
          }}
          color="#3A1292"
          multiline={true}
          placeholder="Requirement"
          onChangeText={(prod) => setProductName(prod)}
          defaultValue={productName}
        /> */}
      </View>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'orange',
            width: 80,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 30,
            marginTop: 20,
          }}
          onPress={() => {
            if (
              name !== '' &&
              email !== '' &&
              phone !== '' &&
              address !== '' &&
              type !== '' &&
              quantity !== ''
            ) {
              dispatch({
                type: SUBMIT_FORM,
                payload: {
                  name1: name,
                  email1: email,
                  phone1: phone,
                  address1: address,
                  type1: type,
                  quantity1: quantity,
                  // productName1: productName,
                  isEmpty: true,
                },
              });

              netInfo.isConnected &&
                enquiryMethod({
                  name1: name,
                  email1: email,
                  phone1: phone,
                  address1: address,
                  type1: type,
                  quantity1: quantity,
                  // productName1: productName,
                });
              props.navigation.navigate('StartInspection');
            } else {
              alert('All Fields Mandatory');
            }
          }}>
          <Text
            style={{fontFamily: 'aerial', fontSize: 17, fontWeight: 'bold'}}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: Dimensions.get('window').width,
    backgroundColor: `white`,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
