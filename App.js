import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Spinner, Label, Button, Text } from 'native-base';
import Loading from 'react-native-whc-loading';

export default class FloatingLableExample extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {
        nama_lengkap: '',
        alamat: ''
      }
    }
  }

  render() {
    const { nama_lengkap, alamat } = this.state.data;
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Nama Lengkap</Label>
              <Input onChangeText={nama_lengkap =>
                this.setState(prevState => ({
                  data: {
                    ...prevState.data,
                    nama_lengkap
                  }

                }))
              }
                value={nama_lengkap} />

            </Item>
            <Item floatingLabel last>
              <Label>Alamat</Label>
              <Input onChangeText={alamat =>
                this.setState(prevState => ({
                  data: {
                    ...prevState.data,
                    alamat
                  }

                }))
              }
                value={alamat} />
            </Item>
          </Form>
          <Text>{JSON.stringify(this.state.data)}</Text>
          <Button success onPress={this._saveData}>
            <Text>Simpan</Text>
          </Button>
          <Loading ref="loading" />
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
        body: JSON.stringify(this.state.data),
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