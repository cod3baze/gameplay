import React from "react";
import { View, Text, Image } from "react-native";

import IllustrationImg from "../../assets/illustration.png";

import { styles } from "./styles";

function SignIn() {
  return (
    <View style={styles.container}>
      <Image source={IllustrationImg} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {`\n`}e organize suas{`\n`}
          jogatinas
        </Text>
        <Text>
          Crie grupos para jogar seus games {`\n`} favoritos com seus amigos
        </Text>
      </View>

      <View>
        <Text>Discord</Text>
      </View>
    </View>
  );
}

export { SignIn };
