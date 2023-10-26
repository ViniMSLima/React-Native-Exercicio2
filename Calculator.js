import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { useState, useContext } from 'react';
import { UtilsContext } from './Context';


export default function Calculator(props) {
  const [input, setInput] = useState('');
  const [sentence, setSentence] = useState('');
  const [result, setResult] = useState('');

  const{ utils, setUtils } = useContext(UtilsContext);

  let arrayUtils = [];

  function Equals()
  {
    setSentence(input);
    
    setInput(eval(input));
    setResult(input);

    if(utils.data)
    {
      arrayUtils = [...utils.data];
    }
    
    arrayUtils.push({sentence: input, result: eval(input)});
    setUtils({...utils, data:[...arrayUtils]});
    
  }

  return (

    <View style={styles.container}>
      <TextInput style={{height: "100px", width: "90%", borderWidth: "2px", borderColor: "black", borderRadius: "5px", color: "white", fontSize: "100px", marginTop: "200px", fontFamily: "Roboto", fontStyle: "italic"}}
      value = {input} 
      onChangeText={(text) => setInput(text)}
      />
      
      <View style={{flexDirection: 'row'}}>

        <TouchableOpacity
          style={[styles.button, {backgroundColor: "lightgrey"}]}
          onPress={() => setInput('')}
          >
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, {backgroundColor: "lightgrey"}]}
          onPress={() => setInput(input + "*(-1)")}
          >
          <Text style={styles.buttonText}>±</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, {backgroundColor: "lightgrey"}]}
          onPress={() => setInput(input * 100)}
          >
          <Text style={styles.buttonText}>%</Text>
        </TouchableOpacity>
     
        <TouchableOpacity
          style={[styles.button , {backgroundColor: "orange"}]}
          onPress={() => setInput(input + '/')}
          >
          <Text style={styles.buttonText}>/</Text>
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

        <TouchableOpacity
          style={[styles.button , {backgroundColor: "orange"}]}
          onPress={() => setInput(input + '*')}
          >
          <Text style={styles.buttonText}>x</Text>
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

        <TouchableOpacity
          style={[styles.button, {backgroundColor: "orange"}]}
          onPress={() => setInput(input + '-')}
          >
          <Text style={styles.buttonText}>-</Text>
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

        <TouchableOpacity
          style={[styles.button, {backgroundColor: "orange"}]}
          onPress={() => setInput(input + '+')}
          >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

      </View>

      <View style={{flexDirection: 'row'}}>

        <TouchableOpacity
          style={styles.button3}
          onPress={() => setInput(input + '0')}
          >
          <Text style={styles.buttonText3}>0</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setInput(input + '.')}
          >
          <Text style={styles.buttonText}>.</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, {backgroundColor: "orange"}]}
          onPress={() => Equals()}
          >
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>

      </View>   

      <View style={{flexDirection: 'row'}}>

        <TouchableOpacity
          style={styles.button4}
          onPress={() => props.navigation.navigate("Historico")}
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
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  button: {
    width: "85px", 
    backgroundColor: "grey",
    borderRadius: "50%",
    alignContent: 'center', 
    justifyContent: "center",
    marginBottom: "4px",
    margin: "5px",
    height: "85px"
  },

  buttonText: {
    alignItems: 'center', 
    justifyContent: "center",
    width: "100%", 
    textAlign: "center",
    color: "white",
    fontSize: "35px",
    marginBottom: "5px"
  },

  button2: {
    width: "100px", 
    backgroundColor: "white",
    borderRadius: "5px",
    alignContent: 'center', 
    justifyContent: "center",
    marginTop: "10px",
    margin: "2px",
    height: "30px"
  },

  button3: {
    width: "180px", 
    backgroundColor: "grey",
    borderRadius: "50px",
    marginTop: "10px",
    margin: "5px",
    height: "85px",
    justifyContent: "center"
  },

  button4: {
    width: "370px", 
    backgroundColor: "grey",
    borderRadius: "50px",
    marginTop: "10px",
    margin: "5px",
    height: "85px",
    justifyContent: "center",
    alignItems: 'center'
  },

  buttonText3: {
    marginLeft: "35px",
    color: "white",
    fontSize: "35px",
    marginBottom: "5px"
  }

});
