import React, { useState, useEffect } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";
import { getAuth, updateProfile } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const EditProfile = () => {
  const [filiere, setFiliere] = useState("");
  const [gmail, setGmail] = useState("");
  const [nom, setNom] = useState("");
  const [telephone, setTelephone] = useState("");

  const auth = getAuth();
  const firestore = getFirestore();

  useEffect(() => {
    fetchProfileData();
  }, []);

  const fetchProfileData = async () => {
    const user = auth.currentUser;
    if (user) {
      const docRef = doc(firestore, "profiles", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setFiliere(data.filiere || "");
        setGmail(data.gmail || "");
        setNom(data.nom || "");
        setTelephone(data.telephone || "");
      }
    }
  };

  const saveProfileData = async () => {
    const user = auth.currentUser;
    if (user) {
      const profileData = {
        filiere,
        gmail,
        nom,
        telephone,
      };

      const docRef = doc(firestore, "profiles", user.uid);
      await setDoc(docRef, profileData, { merge: true });
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Filière"
        value={filiere}
        onChangeText={(text) => setFiliere(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Gmail"
        value={gmail}
        onChangeText={(text) => setGmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Nom"
        value={nom}
        onChangeText={(text) => setNom(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Téléphone"
        value={telephone}
        onChangeText={(text) => setTelephone(text)}
      />
      <Button title="Enregistrer" onPress={saveProfileData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default EditProfile;
