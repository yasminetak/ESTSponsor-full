// MESSAGE SCREEN

import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import styled from "styled-components";

const Style = {
  Container: styled.View``,
  LabelContainer: styled.View`
    display: flex;
    flex-direction: column;
  `,
  Label: styled.Text`
    padding: 5px;
    color: black;
  `,
  TitleInput: styled.TextInput`
    padding: 5px;
    background: papayawhip;
    border-radius: 5px;
    border: 2px solid black;
  `,
  Button: styled.Button`
    background: transparent;
    border: 2px solid black;
    border-radius: 3px;
  `,
};

const MessagesScreen = ({ navigation }) => {
  return (
    <Style.Container>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Style.LabelContainer>
        <Style.Label>A :  </Style.Label>
        <Style.TitleInput multiline linumberOfLinesnec />
        <Style.Label>De:  </Style.Label>
        <Style.TitleInput multiline linumberOfLinesnec />
        <Style.Label>Message :  </Style.Label>
        <Style.TitleInput multiline linumberOfLinesnec />
        <Style.Button title="Envoyer Message" onPress={() => {}}></Style.Button>
      </Style.LabelContainer>
    </Style.Container>
  );
};

export default MessagesScreen;
