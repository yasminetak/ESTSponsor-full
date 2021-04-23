import React from "react";
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

const PublicationCreator = () => {
  return (
    <Style.Container>
      <Style.LabelContainer>
        <Style.Label>Titre : </Style.Label>
        <Style.TitleInput multiline linumberOfLinesnec />
        <Style.Label>Description : </Style.Label>
        <Style.TitleInput multiline linumberOfLinesnec  />
        <Style.Button
          title="Ajouter un document"
          onPress={() => {}}
        ></Style.Button>
        <Style.Button title="Partager" onPress={() => {}}></Style.Button>
      </Style.LabelContainer>
    </Style.Container>
  );
};
export default PublicationCreator;
