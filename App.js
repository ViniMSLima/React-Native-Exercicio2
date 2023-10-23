import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { useState } from 'react';

export default function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0);

  return (
      
    <View style={styles.container}>

      <TextInput style={{height: "50px", width: "90%", borderWidth: "2px", borderColor: "black", borderRadius: "5px"}}
      value = {input} 
      onChangeText={(text) => setInput(text)}
      />

      <View style={{flexDirection: 'row'}}>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setInput(input + '+')}
          >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setInput(input + '-')}
          >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setInput(input + '/')}
          >
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setInput(input + '*')}
          >
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setInput(eval(input))}
          >
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>

      </View>

      <View style={{flexDirection: 'row'}}>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setInput(input + '1')}
          >
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setInput(input + '2')}
          >
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setInput(input + '3')}
          >
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>

      </View>

      <View style={{flexDirection: 'row'}}>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setInput(input + '4')}
          >
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setInput(input + '5')}
          >
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setInput(input + '6')}
          >
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>

      </View>

      <View style={{flexDirection: 'row'}}>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setInput(input + '7')}
          >
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setInput(input + '8')}
          >
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setInput(input + '9')}
          >
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>

      </View>

      <View style={{flexDirection: 'row'}}>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setInput(input + '0')}
          >
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>

      </View>

      <View style={{flexDirection: 'row'}}>

        <TouchableOpacity
          style={styles.button2}
          onPress={() => setInput('')}
          >
          <Text style={styles.buttonText}>Limpar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2}
          >
          <Text style={styles.buttonText}>Historico</Text>
        </TouchableOpacity>

      </View>

      

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "lightgrey"
    
  },

  button: {
    width: "30px", 
    backgroundColor: "grey",
    borderRadius: "5px",
    alignContent: 'center', 
    justifyContent: "center",
    marginTop: "10px",
    margin: "5px",
    height: "30px",
    backgroundColor: "white"
  },

  buttonText: {
    alignItems: 'center', 
    justifyContent: "center",
    width: "100%", 
    textAlign: "center",
    color: "black",
    fontSize: "20px",
    marginBottom: "5px"
  },

  button2: {
    width: "100px", 
    backgroundColor: "white",
    borderRadius: "5px",
    alignContent: 'center', 
    justifyContent: "center",
    marginTop: "10px",
    margin: "5px",
    height: "30px"
  }
});
