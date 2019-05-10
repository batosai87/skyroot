import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Spinner, Label, Button, Text, Picker } from 'native-base';
import Loading from 'react-native-whc-loading';
import DatePicker from 'react-native-datepicker'


export default class StackedLabelExample extends Component {

  constructor(props) {
    super(props);
    this.state = {
      FetchData: {
        nama_marketing: "",
        kelompok: "",
        cabang: "",
        nama_lengkap: "",
        email: "",
        //
        alamat: "",
        kecamatan: "",
        kab_kota: "",
        //
        tmpt_lahir: "",
        tgl_lahir: null,
        no_ektp: "",
        //
        //
        telp: "",
        jk: "",
        perkawinan: "",
        nama_penjamin: "",
        //
        jml_anak: "",
        status_rumah: "",
        pekerjaan: "",
        instansi: "",
        jabatan: "",
        jenis_usaha: "",
        pendapatan: "",
        //
        penghasilan: "",
        //
        jumlah_pinjaman: "",
        pinjaman_ke: "",
        jangka_waktu: "",
        keperluan: "",
        transfer: ""
      },
      dataMarketing: ['Ahmad Fadli Lubis', 'Sulhairi Lubis'],
      dataKelompok: ['Perorangan', 'Group'],
      dataCabang: ['Medan', 'Deli Serdang'],
      dataKabKota: ['Kota Medan', 'Deli Serdang'],
      dataPerkawinan: ['Kawin', 'Tidak Kawin', 'Cerai'],
      dataJenisKelamin: ['Laki-Laki', 'Perempuan'],
      dataRumah: ['Milik Sendiri', 'Milik keluarga', 'Sewa'],
      dataInstansi: ['Pemerintah', 'Swasta'],
      dataPinjaman: ['Rp 1.000.000', 'Rp 2.000.000', 'Rp 3.000.000', 'Rp 4.000.000', 'Rp 5.000.000', '> Rp 10.000.000'],
      dataPinjamanKe: ['1', '2', '3', '4', '5'],
      dataJangkaWaktu: ['6', '12'],

    }
  }

  // _openGalery = () => {
  //   ImagePicker.openPicker({
  //     width: 300,
  //     height: 400,
  //     cropping: true
  //   }).then(image => {
  //     console.log(image);
  //     this.setState({
  //       avatarSrc: image
  //     })
  //   });
  // }


  render() {
    const { nama_marketing, kelompok, cabang, nama_lengkap, email, alamat, kecamatan, kab_kota, tmpt_lahir,
      tgl_lahir, no_ektp, telp, jk, perkawinan, nama_penjamin, jml_anak, status_rumah, pekerjaan, instansi, jabatan,
      jenis_usaha, pendapatan, penghasilan, jumlah_pinjaman, pinjaman_ke, jangka_waktu, keperluan, transfer } = this.state.FetchData;
    return (
      <Container>
        <Header />
        <Content>
          {/* <ScrollView> */}
          <Form>
            <Label>Nama Marketing</Label>
            <Picker
              selectedValue={nama_marketing}
              style={{ height: 50 }}
              onValueChange={nama_marketing =>
                this.setState(prevState => ({
                  FetchData: {
                    ...prevState.FetchData,
                    nama_marketing
                  }
                }))
              }
            >
              {this.state.dataMarketing.map((item, index) => (
                <Picker.Item
                  key={index}
                  label={item}
                  value={item.toLowerCase()} />
              ))}
            </Picker>

            <Label>Kelompok</Label>
            <Picker
              selectedValue={kelompok}
              onValueChange={kelompok =>
                this.setState(prevState => ({
                  FetchData: {
                    ...prevState.FetchData,
                    kelompok
                  }
                }))
              }
            >
              {this.state.dataKelompok.map((item, index) => (
                <Picker.Item
                  key={index}
                  label={item}
                  value={item.toLowerCase()} />
              ))}
            </Picker>

            <Label>Cabang</Label>
            <Picker
              selectedValue={cabang}
              onValueChange={cabang =>
                this.setState(prevState => ({
                  FetchData: {
                    ...prevState.FetchData,
                    cabang
                  }
                }))
              }
            >
              {this.state.dataCabang.map((item, index) => (
                <Picker.Item
                  key={index}
                  label={item}
                  value={item.toLowerCase()} />
              ))}
            </Picker>

            <Item stackedLabel>
              <Label>Nama Lengkap</Label>
              <Input
                underlineColorAndroid='blue'
                onChangeText={nama_lengkap =>
                  this.setState(prevState => ({
                    FetchData: {
                      ...prevState.FetchData,
                      nama_lengkap
                    }
                  }))
                }
                value={nama_lengkap} />
            </Item>

            <Item stackedLabel>
              <Label>Email</Label>
              <Input
                underlineColorAndroid='blue'
                keyboardType="email-address"
                onChangeText={email =>
                  this.setState(prevState => ({
                    FetchData: {
                      ...prevState.FetchData,
                      email
                    }

                  }))
                }
                value={email}
              />
            </Item>

            {/* <Text style={styles.label}>Foto Nasabah</Text>
            <View style={[styles.row, { alignItems: "center" }]}>
              <TouchableHighlight onPress={this._openGalery}>
                <Image
                  source={sourceUri}
                  indicator={ProgressBar}
                  style={{
                    width: 150,
                    height: 150,
                  }} />
              </TouchableHighlight>
            </View> */}


            <Item stackedLabel last>
              <Label>Alamat</Label>
              <Input
                underlineColorAndroid='blue'
                onChangeText={alamat =>
                  this.setState(prevState => ({
                    FetchData: {
                      ...prevState.FetchData,
                      alamat
                    }
                  }))
                }
                value={alamat} />
            </Item>

            <Item stackedLabel>
              <Label>Kecamatan</Label>
              <Input
                underlineColorAndroid='blue'
                onChangeText={kecamatan =>
                  this.setState(prevState => ({
                    FetchData: {
                      ...prevState.FetchData,
                      kecamatan
                    }

                  }))
                }
                value={kecamatan}
              />
            </Item>

            <Label>Kab/Kota</Label>
            <Picker
              selectedValue={kab_kota}
              style={{ height: 50 }}
              onValueChange={kab_kota =>
                this.setState(prevState => ({
                  FetchData: {
                    ...prevState.FetchData,
                    kab_kota
                  }
                }))
              }
            >
              {this.state.dataKabKota.map((item, index) => (
                <Picker.Item
                  key={index}
                  label={item}
                  value={item.toLowerCase()} />
              ))}
            </Picker>

            <Item stackedLabel>
              <Label>Tempat Lahir</Label>
              <Input
                underlineColorAndroid='blue'
                onChangeText={tmpt_lahir =>
                  this.setState(prevState => ({
                    FetchData: {
                      ...prevState.FetchData,
                      tmpt_lahir
                    }

                  }))
                }
                value={tmpt_lahir}
              />
            </Item>

            <Item stackedLabel>
              <Label>Tanggal Lahir</Label>
              <DatePicker
                style={{ width: '100%' }}
                date={tgl_lahir}
                mode="date"
                placeholder="select date"
                format="DD-MM-YYYY"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    right: 0,
                    top: 4,
                    marginLeft: 0
                  },
                  dateInput: {
                    // marginLeft: 36
                  }
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={(tgl_lahir) => {
                  this.setState(prevState => ({
                    FetchData: {
                      ...prevState.FetchData,
                      tgl_lahir
                    }

                  }))
                }}
              />
            </Item>

            <Item stackedLabel>
              <Label>EKTP</Label>
              <Input
                underlineColorAndroid='blue'
                onChangeText={no_ektp =>
                  this.setState(prevState => ({
                    FetchData: {
                      ...prevState.FetchData,
                      no_ektp
                    }

                  }))
                }
                value={no_ektp}
              />
            </Item>

            {/* <Text style={styles.label}>Foto Peminjam</Text>
            <View style={[styles.row, { alignItems: "center" }]}>
              <TouchableHighlight onPress={this._openGalery}>
                <Image
                  source={sourceUri}
                  indicator={ProgressBar}
                  style={{
                    width: 150,
                    height: 150,
                  }} />
              </TouchableHighlight>
            </View> */}

            {/* <Text style={styles.label}>Foto Kartu Keluarga</Text>
            <View style={[styles.row, { alignItems: "center" }]}>
              <TouchableHighlight onPress={this._openGalery}>
                <Image
                  source={sourceUri}
                  indicator={ProgressBar}
                  style={{
                    width: 150,
                    height: 150,
                  }} />
              </TouchableHighlight>
            </View> */}


            <Item stackedLabel>
              <Label>Telp</Label>
              <Input
                underlineColorAndroid='blue'
                keyboardType="phone-pad"
                onChangeText={telp =>
                  this.setState(prevState => ({
                    FetchData: {
                      ...prevState.FetchData,
                      telp
                    }

                  }))
                }
                value={telp}
              />
            </Item>

            {/* <Item stackedLabel>
            <Label>Jenis Kelamin</Label>
              <RadioForm
                radio_props={this.state.dataJk}
                initial={0}
                formHorizontal={true}
                labelHorizontal={true}
                labelStyle={{ paddingRight: 15 }}
                buttonColor={'#2196f3'}
                animation={true}
                onPress={jk =>
                  this.setState(prevState => ({
                    FetchData: {
                      ...prevState.FetchData,
                      jk
                    }

                  }))
                }
              // onPress={(value) => { this.setState({ value: value }) }}
              />
            </Item> */}

            <Label>Jenis Kelamin</Label>
            <Picker
              selectedValue={jk}
              style={{ height: 50 }}
              onValueChange={jk =>
                this.setState(prevState => ({
                  FetchData: {
                    ...prevState.FetchData,
                    jk
                  }
                }))
              }
            >
              {this.state.dataJenisKelamin.map((item, index) => (
                <Picker.Item
                  key={index}
                  label={item}
                  value={item.toLowerCase()} />
              ))}
            </Picker>


            <Label>Status Perkawinan</Label>
            <Picker
              selectedValue={perkawinan}
              onValueChange={perkawinan =>
                this.setState(prevState => ({
                  FetchData: {
                    ...prevState.FetchData,
                    perkawinan
                  }
                }))
              }
            >
              {this.state.dataPerkawinan.map((item, index) => (
                <Picker.Item
                  key={index}
                  label={item}
                  value={item.toLowerCase()} />
              ))}
            </Picker>

            <Item stackedLabel>
              <Label>Nama Suami/Istri/Orang TUa</Label>
              <Input
                underlineColorAndroid='blue'
                onChangeText={nama_penjamin =>
                  this.setState(prevState => ({
                    FetchData: {
                      ...prevState.FetchData,
                      nama_penjamin
                    }
                  }))
                }
                value={nama_penjamin}
              />
            </Item>

            {/* <Text style={styles.label}>Foto KTP SUAMI/ISTRI/ORANGTUA</Text>
            <View style={[styles.row, { alignItems: "center" }]}>
              <TouchableHighlight onPress={this._openGalery}>
                <Image
                  source={sourceUri}
                  indicator={ProgressBar}
                  style={{
                    width: 150,
                    height: 150,
                  }} />
              </TouchableHighlight>
            </View> */}

            <Item stackedLabel>
              <Label>Jumlah Anak</Label>
              <Input
                underlineColorAndroid='blue'
                keyboardType="phone-pad"
                onChangeText={jml_anak =>
                  this.setState(prevState => ({
                    FetchData: {
                      ...prevState.FetchData,
                      jml_anak
                    }

                  }))
                }
                value={jml_anak}
              />
            </Item>

            <Label>Status Rumah</Label>
            <Picker
              selectedValue={status_rumah}
              style={{ height: 50 }}
              onValueChange={status_rumah =>
                this.setState(prevState => ({
                  FetchData: {
                    ...prevState.FetchData,
                    status_rumah
                  }
                }))
              }
            >
              {this.state.dataRumah.map((item, index) => (
                <Picker.Item
                  key={index}
                  label={item}
                  value={item.toLowerCase()} />
              ))}
            </Picker>


            {/* <Text style={styles.label}>Buku Rekening Listrik/Air</Text>
            <View style={[styles.row, { alignItems: "center" }]}>
              <TouchableHighlight onPress={this._openGalery}>
                <Image
                  source={sourceUri}
                  indicator={ProgressBar}
                  style={{
                    width: 150,
                    height: 150,
                  }} />
              </TouchableHighlight>
            </View> */}


            <Label>Jenis Pekerjaan</Label>
            <Picker
              selectedValue={pekerjaan}
              style={{ height: 50 }}
              onValueChange={pekerjaan =>
                this.setState(prevState => ({
                  FetchData: {
                    ...prevState.FetchData,
                    pekerjaan
                  }
                }))
              }
            >
              {this.state.dataInstansi.map((item, index) => (
                <Picker.Item
                  key={index}
                  label={item}
                  value={item.toLowerCase()} />
              ))}
            </Picker>

            <Label>Instansi</Label>
            <Picker
              selectedValue={instansi}
              style={{ height: 50 }}
              onValueChange={instansi =>
                this.setState(prevState => ({
                  FetchData: {
                    ...prevState.FetchData,
                    instansi
                  }
                }))
              }
            >
              {this.state.dataInstansi.map((item, index) => (
                <Picker.Item
                  key={index}
                  label={item}
                  value={item.toLowerCase()} />
              ))}
            </Picker>

            <Item stackedLabel>
              <Label>Jabatan</Label>
              <Input
                underlineColorAndroid='blue'
                onChangeText={jabatan =>
                  this.setState(prevState => ({
                    FetchData: {
                      ...prevState.FetchData,
                      jabatan
                    }
                  }))
                }
                value={jabatan} />
            </Item>

            <Item stackedLabel>
              <Label>Jenis Usaha</Label>
              <Input onChangeText={jenis_usaha =>
                this.setState(prevState => ({
                  FetchData: {
                    ...prevState.FetchData,
                    jenis_usaha
                  }
                }))
              }
                value={jenis_usaha} />
            </Item>

            <Item stackedLabel>
              <Label>Pendapatan</Label>
              <Input
                underlineColorAndroid='blue'
                onChangeText={pendapatan =>
                  this.setState(prevState => ({
                    FetchData: {
                      ...prevState.FetchData,
                      pendapatan
                    }
                  }))
                }
                value={pendapatan} />
            </Item>

            {/* <Text style={styles.label}>Foto Slip Gaji</Text>
            <View style={[styles.row, { alignItems: "center" }]}>
              <TouchableHighlight onPress={this._openGalery}>
                <Image
                  source={sourceUri}
                  indicator={ProgressBar}
                  style={{
                    width: 150,
                    height: 150,
                  }} />
              </TouchableHighlight>
            </View> */}

            <Item stackedLabel>
              <Label>Penghasilan Lainnya</Label>
              <Input
                underlineColorAndroid='blue'
                onChangeText={penghasilan =>
                  this.setState(prevState => ({
                    FetchData: {
                      ...prevState.FetchData,
                      penghasilan
                    }
                  }))
                }
                value={penghasilan} />
            </Item>

            {/* <Text style={styles.label}>Jaminan Rumah/Emas</Text>
            <View style={[styles.row, { alignItems: "center" }]}>
              <TouchableHighlight onPress={this._openGalery}>
                <Image
                  source={sourceUri}
                  indicator={ProgressBar}
                  style={{
                    width: 150,
                    height: 150,
                  }} />
              </TouchableHighlight>
            </View> */}

            <Label>Jumlah Pinjaman</Label>
            <Picker
              selectedValue={jumlah_pinjaman}
              style={{ height: 50 }}
              onValueChange={jumlah_pinjaman =>
                this.setState(prevState => ({
                  FetchData: {
                    ...prevState.FetchData,
                    jumlah_pinjaman
                  }
                }))
              }
            >
              {this.state.dataPinjaman.map((item, index) => (
                <Picker.Item
                  key={index}
                  label={item}
                  value={item.toLowerCase()} />
              ))}
            </Picker>


            <Label>Pinjaman Ke</Label>
            <Picker
              selectedValue={pinjaman_ke}
              style={{ height: 50 }}
              onValueChange={pinjaman_ke =>
                this.setState(prevState => ({
                  FetchData: {
                    ...prevState.FetchData,
                    pinjaman_ke
                  }
                }))
              }
            >
              {this.state.dataPinjamanKe.map((item, index) => (
                <Picker.Item
                  key={index}
                  label={item}
                  value={item.toLowerCase()} />
              ))}
            </Picker>


            <Label>Jangka Waktu</Label>
            <Picker
              selectedValue={jangka_waktu}
              style={{ height: 50 }}
              onValueChange={jangka_waktu =>
                this.setState(prevState => ({
                  FetchData: {
                    ...prevState.FetchData,
                    jangka_waktu
                  }
                }))
              }
            >
              {this.state.dataJangkaWaktu.map((item, index) => (
                <Picker.Item
                  key={index}
                  label={item}
                  value={item.toLowerCase()} />
              ))}
            </Picker>

            <Item stackedLabel>
              <Label>Keperluan Untuk</Label>
              <Input
                underlineColorAndroid='blue'
                onChangeText={keperluan =>
                  this.setState(prevState => ({
                    FetchData: {
                      ...prevState.FetchData,
                      keperluan
                    }
                  }))
                }
                value={keperluan} />
            </Item>

            <Item stackedLabel>
              <Label>Transfer Ke Rek</Label>
              <Input
                underlineColorAndroid='blue'
                onChangeText={transfer =>
                  this.setState(prevState => ({
                    FetchData: {
                      ...prevState.FetchData,
                      transfer
                    }
                  }))
                }
                value={transfer} />
            </Item>


          </Form>
          <Text>{JSON.stringify(this.state.FetchData)}</Text>
          <Button success onPress={this._saveData}>
            <Text>Simpan</Text>
          </Button>
          <Loading ref="loading" />
          {/* </ScrollView> */}
        </Content>
      </Container>
    );
  }

  _saveData = async () => {

    this.refs.loading.show();
    try {
      await fetch('http://35b18b49.ngrok.io/api/anggotas', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state.FetchData),
      })
        .then((response) => response.json())
        .then((responseJson) => {
          // return responseJson.movies;
          setTimeout(() => {
            // @ts-ignore
            this.refs.loading.close();
            alert(JSON.stringify(responseJson));
          }, 2000);
        })
        .catch((error) => {
          // @ts-ignore
          this.refs.loading.close();
          console.error(error);
        });
    } catch (error) {
      this.refs.loading.close();
      alert(error)
    }
  };
}